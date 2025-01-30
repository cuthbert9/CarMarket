import { faker } from '@faker-js/faker';


function CreateRandomCarList(){


    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        gearType:"automatic",
        miles:10000,
        price:faker.finance.amount({min:1000,max:20000}),
        image:"https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg"



    };
}

const Carlist=faker.helpers.multiple(CreateRandomCarList,{
    count:7
});

export default {
    Carlist
}