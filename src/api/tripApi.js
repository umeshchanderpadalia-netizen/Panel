import tripsData from "../data/trips";

const delay = (ms) =>
  new Promise(
    (resolve) =>
      setTimeout(
        resolve,
        ms
      )
  );

const getStatusColor = (
  status
) => {

  switch(status){

    case "Completed":

      return "text-emerald-400 bg-emerald-500/20";

    case "Cancelled":

      return "text-red-400 bg-red-500/20";

    case "Confirmed":

      return "text-cyan-400 bg-cyan-500/20";

    case "Driver Assigned":

      return "text-blue-400 bg-blue-500/20";

    case "Pending":

      return "text-orange-400 bg-orange-500/20";

    default:

      return "text-yellow-400 bg-yellow-500/20";

  }

};

const formatTrip=(trip)=>({

id:
trip.id ||
trip._id ||
Date.now(),

orderId:
trip.orderId || "",

invoiceNo:
trip.invoiceNo || "",

customer:
trip.customer || "",

phone:
trip.phone || "",

pickup:
trip.pickup || "",

drop:
trip.drop || "",

date:
trip.date || "",

tripType:
trip.tripType ||
"One Way",

driver:
trip.driver || "",

vehicle:
trip.vehicle || "",

vendor:
trip.vendor || "",

baseAmount:
trip.baseAmount || 0,

total:
trip.total || 0,

afterTds:
trip.afterTds || 0,

totalExpenses:
trip.totalExpenses || 0,

balance:
trip.balance || 0,

tripStatus:
trip.tripStatus ||
"Pending",

color:
trip.color ||
getStatusColor(
trip.tripStatus
),

createdAt:
trip.createdAt ||
new Date().toISOString(),

});


// =====================
// GET TRIPS
// =====================

export async function getTrips(){

await delay(500);

return tripsData.map(
formatTrip
);

}


// =====================
// CREATE TRIP
// =====================

export async function createTrip(
trip
){

await delay(500);

return{

success:true,

message:
"Booking created successfully",

data:
formatTrip({

...trip,

id:
Date.now(),

}),

};

}


// =====================
// UPDATE TRIP
// =====================

export async function updateTrip(
trip
){

await delay(500);

return{

success:true,

message:
"Booking updated successfully",

data:
formatTrip(
trip
),

};

}


// =====================
// DELETE TRIP
// =====================

export async function deleteTrip(
tripId
){

await delay(500);

return{

success:true,

message:
"Booking deleted successfully",

deletedId:
tripId,

};

}