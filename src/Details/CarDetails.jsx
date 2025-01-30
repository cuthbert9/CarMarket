import Header from "@/components/Header";
import Services from "@/Datas/Services";
import { db } from "@/db";
import { carImages, CarListing } from "@/db/schema";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import { LiaCalendarAlt } from "react-icons/lia";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import ImageGallery from "./ImageGallery";
import CheckboxInput from "@/components/CheckboxInput";
import carInfo from '@/Datas/FormData';
import FinancialCalc from "./FinancialCalc";
import SellerCard from "../Details/sellerCard";
import { IoIosPricetags } from "react-icons/io";



function CarDetails() {

    const [carDetails, setCarDetails] = useState([]);
    // const [carInfo, setCarinfo] = useState([]);

    const [searchparam] = useSearchParams();
    const id = searchparam.get('id'); 

    // console.log(carInfo);

    useEffect(() => {
        fetchCardetails();
    }, [])



    const fetchCardetails = async () => {
        try {
            const result = await db.select().from(CarListing)
                .innerJoin(carImages, eq(CarListing.id, carImages.carListingId))
                .where(eq(CarListing.id, id));
            if (result) {
                const response = Services.formatData(result);
                setCarDetails(response[0]);
                console.log(carDetails);
            }
        } catch (e) {
            console.log(e.message);
        }
    }


    return (
        <>
            <div className=" sm:flex  m-5 h-full">

                <div className="  sm:m-2  w-[95vw] sm:w-[60vw] h-full">
                    <div className="sm:m-2">
                        <h1 className="text-3xl sm:mx-6 font-bold my-1 ">{carDetails.carName}</h1>
                        <div className="flex gap-2 sm:mx-2">
                            <div className="flex  bg-green-300 rounded-lg p-1 gap-1">
                                <LiaCalendarAlt className="text-2xl" />
                                <h1>{carDetails.year}</h1>
                            </div>
                            <div className="flex bg-green-300 rounded-lg p-1 gap-1">
                                <IoSpeedometerOutline className="text-2xl" />
                                <h1>{carDetails.mileage}</h1>
                            </div>
                            <div className="flex bg-green-300 rounded-lg p-1 gap-1">
                                <GiGearStickPattern className="text-2xl" />
                                <h1>{carDetails.transmission}</h1>
                            </div>
                            <div className="flex bg-green-300 rounded-lg p-1 gap-1">
                                <BsFillFuelPumpFill className="text-2xl" />
                                <h1>{carDetails.fuelType}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-2xl sm:h-[40vh] lg:h-[50vh] xl:h-[60vh] m-3 rounded-2xl  ">
                        <ImageGallery item={carDetails?.images}  />
                    </div>
                    <div className="shadow-2xl rounded-xl h-[15vh] m-3">
                        <h1 className="mx-5 text-lg font-bold">Car's Description</h1>
                        <h1 className="mx-6 font-[cursive]">{carDetails?.additionalFeatures}</h1>
                    </div>

                    <div className="shadow-2xl rounded-xl  m-3  ">
                        <h1 className="mx-5 text-lg font-bold">Car's Features</h1>

                        <div className="m-3  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 flex-wrap   gap-1">

                            {!carDetails.features ? (
                                <div className="bg-blue-500 animate-pulse">
                                </div>
                            ) : (
                                Object.keys(carDetails.features)?.map(item =>
                                    <div className="flex ">
                                        <input type="checkbox" checked="true" />
                                        <h1>{item}</h1>
                                    </div>
                                )
                            )
                            }

                        </div>
                    </div>
                    <div className="shadow-2xl rounded-xl m-3   ">
                        <h1 className=" mx-5 text-lg font-bold">Financial Calculator</h1>
                        <FinancialCalc Carprice={carDetails?.price}/>
                    </div>
                </div>


                <div className=" m-2  sm:w-[30vw]">
                    <div className=" m-3 rounded-xl shadow-2xl">
                        <div className="justify-center flex">
                            <h1 className="mx-3 text-lg font-bold">Car's Price</h1>
                        </div>
                        <div className="justify-center flex">
                            <h1 className="m-3 text-xl font-bold">${carDetails?.price}
                                
                            </h1>
                        </div>
                        <div className="flex justify-center ">
                            <button className="bg-green-600 p-4 mx-4 rounded-xl hover:scale-105 duration-500 my-2 w-full flex items-center justify-center gap-2">Make an Offer
                            <IoIosPricetags className="text-lg "/>
                            </button>
                        </div>
                    </div>

                    <div className="  m-3  rounded-xl shadow-2xl">
                        <h1 className="mx-3 text-lg font-bold text-center">Specifications</h1>                       

                        {carInfo?.carInfo?.map(item=>
                            <div className="m-2 flex justify-between">
                                <h1 className="text-lg mx-4">{item.label}</h1>
                                <h1>{carDetails?.[item?.name]}</h1>
                            </div>
                             )
                        }
                    </div>
                    <div className="shadow-2xl mx-3  ">
                           <SellerCard  carDetails={carDetails}/>                 
                        </div>
                </div>
            </div>

        </>

    )
}

export default CarDetails;