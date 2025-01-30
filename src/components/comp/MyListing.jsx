import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { db } from "@/db";
import { carImages, CarListing } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Services from "@/Datas/Services";
import CarItem from "../CarItem";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";



function MyListing() {
  const [userCarListing, setUserCarListing] = useState([]);

  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    getUserCarListing();
  }, [user]);

  // console.log(user);




  const getUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(carImages, eq(CarListing.id, carImages.carListingId)) // Use camelCase here for columns
      .where(
        eq(
          CarListing.postedBy,
          user?.primaryEmailAddress?.emailAddress
        )
      )
      .orderBy(desc(CarListing.id));

    const response = Services.formatData(result);
    setUserCarListing(response);
    // console.log(response);
  };




  const handleDelete = async (ind) => {
    try {
      await db.delete(carImages).where(eq(carImages.carListingId, ind));

      const result = await db.delete(CarListing).where(eq(CarListing.id, ind));
      if (result) {
        console.log("Both tables was deleted ");

        // getUserCarListing();  

        //To reduce response time of fetching all the userlisting again
        // we can just filter the userlisting and 
        //remove the deleted listing

        const editedUserListing = userCarListing.filter(item => item.id !== ind);
        setUserCarListing(editedUserListing);

      }

    } catch (e) {

      console.log(e.message);
    }
  }

  return (
    <div>
      <div className="flex justify-between   m-6">
        <div>
          <h1 className="text-4xl font-bold">My Listing</h1>
        </div>

        <Link to={"/AddListing"}>
          <Button className="bg-blue-600">
            <span className="font-extrabold text-lg ">+</span> Add Listing
          </Button>
        </Link>
      </div>
      <div className="flex gap-2 flex-wrap justify-center ">


        {!userCarListing || userCarListing < 1 ? (
          <div className="text-red-400 text-xl">

            <h1>There is No Cars!!! Add Cars </h1>
          </div>



        ) :   

          (userCarListing?.map(item =>

            <div className="">
              <CarItem key={item.id} car={item} />

              <div className="flex  gap-1 ">
                <Link to={'/AddListing?mode=edit&id=' + item.id} className="w-[80%]">
                  <Button variant="ghost" className="  border">
                    Edit

                  </Button>

                </Link>
                <Button onClick={() => handleDelete(item.id)} variant="destructive"><MdDelete /></Button>
              </div>


            </div>
          ))
        }




      </div>
    </div>
  );
}

export default MyListing;
