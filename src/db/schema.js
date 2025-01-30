import { primaryKey } from "drizzle-orm/mysql-core";
import {serial, integer, pgTable, varchar,date, json} from "drizzle-orm/pg-core";
export const CarListing = pgTable("CarListing", {
    id: serial('id').primaryKey(),
    carName: varchar('car_name', { length: 255 }).notNull(),
    category: varchar('category', { length: 50 }).notNull(),
    condition: varchar('condition', { length: 50 }).notNull(),
    price: integer('price').notNull(),
    year: integer('year').notNull(),
    mileage: integer('mileage').notNull(),
    fuelType: varchar('fuel_type', { length: 50 }).notNull(),
    transmission: varchar('transmission', { length: 50 }).notNull(),
    doors: integer('doors').notNull(),
    color: varchar('color', { length: 50 }).notNull(),
    vinNumber: varchar('vin_number', { length: 255 }).notNull(),
    registrationNumber: varchar('registration_number', { length: 255 }).notNull(),
    ownerName: varchar('owner_name', { length: 255 }).notNull(),
    ownerContact: varchar('owner_contact', { length: 50 }).notNull(),
    serviceHistory: varchar('service_history', { length: 50 }).notNull(),
    insuranceExpiry: varchar('insurance_expiry') ,
    warranty: varchar('warranty').notNull(),
    location: varchar('location', { length: 255 }).notNull(),
    dateListed: varchar('date_listed').notNull(),
    additionalFeatures: varchar('additional_features'),
    features:json("features"),
    postedBy:varchar('postedBy').default("cathbertjohnson9@gmail.com").notNull(),
    userName:varchar('userName').notNull().default('Cuthbert Johnson'),
    userImage:varchar('userImage').notNull().default("https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybmxxSUtrR2NYa2ZVQU9Wc2c2bVNES0FGdFgifQ"),
    postedOn:varchar('postedOn')

});


export const carImages = pgTable("carImages", {
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(), 
    carListingId: integer('carListingId').notNull().references(()=>CarListing.id) // Reference foreign key
});
