const Booking =
require("../models/Booking");


// GET ALL BOOKINGS

const getBookings =
async(req,res)=>{

try{

const page =
Number(req.query.page) || 1;

const limit =
Number(req.query.limit) || 10;

const search =
req.query.search || "";

const skip =
(page - 1) * limit;


// SEARCH FILTER

const searchFilter = {

isDeleted:false,

$or:[

{
customer:{
$regex:search,
$options:"i",
},
},

{
phone:{
$regex:search,
$options:"i",
},
},

{
bookingId:{
$regex:search,
$options:"i",
},
},

{
pickup:{
$regex:search,
$options:"i",
},
},

{
drop:{
$regex:search,
$options:"i",
},
},

],

};


// FETCH BOOKINGS

const bookings =
await Booking.find(

search
? searchFilter
: { isDeleted:false }

)

.populate("driver")

.populate("vendor")

.sort({
createdAt:-1,
})

.skip(skip)

.limit(limit);


// TOTAL

const total =
await Booking.countDocuments(

search
? searchFilter
: { isDeleted:false }

);


res.status(200).json({

bookings,

currentPage:
page,

totalPages:
Math.ceil(
total / limit
),

totalBookings:
total,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to fetch bookings",

error:
error.message,

});

}

};


// CREATE BOOKING

const createBooking =
async(req,res)=>{

try{

const booking =
new Booking({

...req.body,

activityLogs:[

{

action:"CREATE",

message:
"Booking created",

},

],

});

await booking.save();


// DRIVER UPDATE

if(booking.driver){

const Driver =
require("../models/Driver");

await Driver.findByIdAndUpdate(

booking.driver,

{

$inc:{
assignedTrips:1,
},

status:"On Trip",

availability:"Busy",

}

);

}


// VENDOR UPDATE

if(booking.vendor){

const Vendor =
require("../models/Vendor");

await Vendor.findByIdAndUpdate(

booking.vendor,

{

$inc:{
totalTrips:1,
},

}

);

}


res.status(201).json({

message:
"Booking created successfully",

booking,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to create booking",

error:
error.message,

});

}

};


// UPDATE BOOKING

const updateBooking =
async(req,res)=>{

try{

const { id } =
req.params;

const oldBooking =
await Booking.findById(id);

const updatedBooking =
await Booking.findByIdAndUpdate(

id,

{

...req.body,

$push:{

activityLogs:{

action:"UPDATE",

message:
"Booking updated",

},

},

},

{
new:true,
}

)

.populate("driver")

.populate("vendor");


// COMPLETED LOGIC

if(

oldBooking.tripStatus !==
"Completed"

&&

req.body.tripStatus ===
"Completed"

){

if(updatedBooking.driver){

const Driver =
require("../models/Driver");

await Driver.findByIdAndUpdate(

updatedBooking.driver._id,

{

$inc:{
completedTrips:1,
},

status:"Available",

availability:"Available",

}

);

}


if(updatedBooking.vendor){

const Vendor =
require("../models/Vendor");

await Vendor.findByIdAndUpdate(

updatedBooking.vendor._id,

{

$inc:{
completedTrips:1,
},

}

);

}

}


res.status(200).json({

message:
"Booking updated successfully",

booking:
updatedBooking,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to update booking",

error:
error.message,

});

}

};


// DELETE BOOKING

const deleteBooking =
async(req,res)=>{

try{

const { id } =
req.params;


// SOFT DELETE

await Booking.findByIdAndUpdate(

id,

{

isDeleted:true,

$push:{

activityLogs:{

action:"DELETE",

message:
"Booking soft deleted",

},

},

},

);


res.status(200).json({

message:
"Booking deleted successfully",

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to delete booking",

error:
error.message,

});

}

};


module.exports={

getBookings,

createBooking,

updateBooking,

deleteBooking,

};