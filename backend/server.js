const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const bookingRoutes =
require("./routes/bookingRoutes");

const authRoutes =
require("./routes/authRoutes");

const driverRoutes =
require("./routes/driverRoutes");

const vendorRoutes =
require("./routes/vendorRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const app = express();


// ===================
// MIDDLEWARE
// ===================

app.use(cors());

app.use(express.json());


// ===================
// DATABASE
// ===================

mongoose.connect(
process.env.MONGO_URI
)

.then(()=>{

console.log(
"MongoDB Connected"
);

})

.catch((error)=>{

console.log(
"MongoDB Error:",
error
);

});


// ===================
// ROUTES
// ===================

app.use(
"/api/bookings",
bookingRoutes
);

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/drivers",
driverRoutes
);

app.use(
"/api/vendors",
vendorRoutes
);

app.use(
"/api/dashboard",
dashboardRoutes
);


// ===================
// TEST ROUTE
// ===================

app.get(
"/",
(req,res)=>{

res.send(
"Get Me Cab Backend Running"
);

}
);


// ===================
// SERVER
// ===================

const PORT =
process.env.PORT || 5000;

app.listen(

PORT,

"0.0.0.0",

()=>{

console.log(
`Server running on port ${PORT}`
);

}

);