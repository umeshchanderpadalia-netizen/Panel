const Booking =
require("../models/Booking");

const Driver =
require("../models/Driver");

const Vendor =
require("../models/Vendor");


// DASHBOARD STATS

const getDashboardStats =
async(req,res)=>{

try{

// =====================
// BOOKINGS
// =====================

const totalBookings =
await Booking.countDocuments();

const completedTrips =
await Booking.countDocuments({

tripStatus:"Completed",

});

const pendingTrips =
await Booking.countDocuments({

tripStatus:"Pending",

});


// =====================
// REVENUE
// =====================

const revenueData =
await Booking.aggregate([

{

$group:{

_id:null,

totalRevenue:{
$sum:"$total",
},

totalExpenses:{
$sum:"$totalExpenses",
},

totalProfit:{
$sum:"$profit",
},

},

},

]);


// =====================
// DRIVERS
// =====================

const totalDrivers =
await Driver.countDocuments();

const activeDrivers =
await Driver.countDocuments({

status:"Available",

});


// =====================
// VENDORS
// =====================

const totalVendors =
await Vendor.countDocuments();


// =====================
// RESPONSE
// =====================

res.status(200).json({

bookings:{
total:
totalBookings,

completed:
completedTrips,

pending:
pendingTrips,
},

finance:{

revenue:
revenueData[0]
?.totalRevenue || 0,

expenses:
revenueData[0]
?.totalExpenses || 0,

profit:
revenueData[0]
?.totalProfit || 0,

},

drivers:{
total:
totalDrivers,

active:
activeDrivers,
},

vendors:{
total:
totalVendors,
},

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to fetch dashboard stats",

error:
error.message,

});

}

};

module.exports={
getDashboardStats,
};