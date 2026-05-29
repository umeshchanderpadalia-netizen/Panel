const express =
require("express");

const {

getVendors,

createVendor,

updateVendor,

deleteVendor,

} = require(
"../controllers/vendorController"
);

const {

protect,

} = require(
"../middleware/authMiddleware"
);

const router =
express.Router();


// GET VENDORS

router.get(
"/",
protect,
getVendors
);


// CREATE VENDOR

router.post(
"/",
protect,
createVendor
);


// UPDATE VENDOR

router.put(
"/:id",
protect,
updateVendor
);


// DELETE VENDOR

router.delete(
"/:id",
protect,
deleteVendor
);


module.exports =
router;