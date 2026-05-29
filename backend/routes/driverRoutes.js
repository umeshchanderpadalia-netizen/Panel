const express =
require("express");

const {

getDrivers,

createDriver,

updateDriver,

deleteDriver,

} = require(
"../controllers/driverController"
);

const {

protect,

} = require(
"../middleware/authMiddleware"
);

const router =
express.Router();


// GET DRIVERS

router.get(
"/",
protect,
getDrivers
);


// CREATE DRIVER

router.post(
"/",
protect,
createDriver
);


// UPDATE DRIVER

router.put(
"/:id",
protect,
updateDriver
);


// DELETE DRIVER

router.delete(
"/:id",
protect,
deleteDriver
);


module.exports =
router;