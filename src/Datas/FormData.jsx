

const Data={
    "carDetails": [
      {
        "label": "Car Name",
        "name": "carName",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaMoneyBillAlt"
      },
      {
        "label": "Category",
        "name": "category",
        "fieldType": "dropdown",
        "options": ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Van"],
        "required": true,
        "column": 1,
        "icon": "FaCar"
      },
      {
        "label": "Condition",
        "name": "condition",
        "fieldType": "dropdown",
        "options": ["New", "Used"],
        "required": true,
        "column": 1,
        "icon": "FaCar"
      },
      {
        "label": "Price",
        "name": "price",
        "fieldType": "number",
        "required": true,
        "column": 1,
        "icon": "FaDollarSign"
      },
      {
        "label": "Year",
        "name": "year",
        "fieldType": "number",
        "required": true,
        "column": 1,
        "icon": "FaCalendarAlt"
      },
      {
        "label": "Mileage",
        "name": "mileage",
        "fieldType": "number",
        "required": true,
        "column": 1,
        "icon": "FaTachometerAlt"
      },
      {
        "label": "Fuel Type",
        "name": "fuelType",
        "fieldType": "dropdown",
        "options": ["Petrol", "Diesel", "Electric", "Hybrid"],
        "required": true,
        "column": 1,
        "icon": "FaGasPump"
      },
      {
        "label": "Transmission",
        "name": "transmission",
        "fieldType": "dropdown",
        "options": ["Automatic", "Manual", "Semi-Automatic"],
        "required": true,
        "column": 1,
        "icon": "FaCogs"
      },
      {
        "label": "Doors",
        "name": "doors",
        "fieldType": "dropdown",
        "options": ["2", "4", "5"],
        "required": true,
        "column": 1,
        "icon": "FaDoorOpen"
      },
      {
        "label": "Color",
        "name": "color",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaPalette"
      },
      {
        "label": "VIN Number",
        "name": "vinNumber",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaBarcode"
      },
      {
        "label": "Registration Number",
        "name": "registrationNumber",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaFileContract"
      },
      {
        "label": "Owner Name",
        "name": "ownerName",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaUser"
      },
      {
        "label": "Owner Contact",
        "name": "ownerContact",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaPhone"
      },
      {
        "label": "Service History",
        "name": "serviceHistory",
        "fieldType": "dropdown",
        "options": ["Full", "Partial", "None"],
        "required": true,
        "column": 1,
        "icon": "FaTools"
      },
      {
        "label": "Insurance Expiry",
        "name": "insuranceExpiry",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaCalendarCheck"
      },
      {
        "label": "Warranty",
        "name": "warranty",
        "fieldType": "dropdown",
        "options": ["Yes", "No"],
        "required": true,
        "column": 1,
        "icon": "FaShieldAlt"
      },
      {
        "label": "Location",
        "name": "location",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaMapMarkerAlt"
      },
      {
        "label": "Date Listed",
        "name": "dateListed",
        "fieldType": "text",
        "required": true,
        "column": 1,
        "icon": "FaCalendarAlt"
      },
      {
        "label": "Additional Features",
        "name": "additionalFeatures",
        "fieldType": "textarea",
        "required": false,
        "column": 2,
        "icon": "FaList"
      }
    

    ]
  }

  const carInfo=[   
    {
      "label": "Category",
      "name": "category",
      "fieldType": "dropdown",
      "options": ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Van"],
      "required": true,
      "column": 1,
      "icon": "FaCar"
    },
    {
      "label": "Condition",
      "name": "condition",
      "fieldType": "dropdown",
      "options": ["New", "Used"],
      "required": true,
      "column": 1,
      "icon": "FaCar"
    },
   
    {
      "label": "Year",
      "name": "year",
      "fieldType": "number",
      "required": true,
      "column": 1,
      "icon": "FaCalendarAlt"
    },
    {
      "label": "Mileage",
      "name": "mileage",
      "fieldType": "number",
      "required": true,
      "column": 1,
      "icon": "FaTachometerAlt"
    },
    {
      "label": "Fuel Type",
      "name": "fuelType",
      "fieldType": "dropdown",
      "options": ["Petrol", "Diesel", "Electric", "Hybrid"],
      "required": true,
      "column": 1,
      "icon": "FaGasPump"
    },
    {
      "label": "Transmission",
      "name": "transmission",
      "fieldType": "dropdown",
      "options": ["Automatic", "Manual", "Semi-Automatic"],
      "required": true,
      "column": 1,
      "icon": "FaCogs"
    },
    {
      "label": "Doors",
      "name": "doors",
      "fieldType": "dropdown",
      "options": ["2", "4", "5"],
      "required": true,
      "column": 1,
      "icon": "FaDoorOpen"
    },
    {
      "label": "Color",
      "name": "color",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaPalette"
    },
    {
      "label": "VIN Number",
      "name": "vinNumber",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaBarcode"
    },
    {
      "label": "Registration Number",
      "name": "registrationNumber",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaFileContract"
    },
    {
      "label": "Owner Name",
      "name": "ownerName",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaUser"
    },
    {
      "label": "Owner Contact",
      "name": "ownerContact",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaPhone"
    },
    {
      "label": "Service History",
      "name": "serviceHistory",
      "fieldType": "dropdown",
      "options": ["Full", "Partial", "None"],
      "required": true,
      "column": 1,
      "icon": "FaTools"
    },
    {
      "label": "Insurance Expiry",
      "name": "insuranceExpiry",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaCalendarCheck"
    },
    {
      "label": "Warranty",
      "name": "warranty",
      "fieldType": "dropdown",
      "options": ["Yes", "No"],
      "required": true,
      "column": 1,
      "icon": "FaShieldAlt"
    },
    {
      "label": "Location",
      "name": "location",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaMapMarkerAlt"
    },
    {
      "label": "Date Listed",
      "name": "dateListed",
      "fieldType": "text",
      "required": true,
      "column": 1,
      "icon": "FaCalendarAlt"
    }

  ]
  

  export default {
    Data,carInfo
  }