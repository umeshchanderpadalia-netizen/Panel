const Vendor =
require("../models/Vendor");


// GET ALL VENDORS

const getVendors =
async(req,res)=>{

try{

const vendors =
await Vendor.find().sort({
createdAt:-1,
});

res.status(200).json(
vendors
);

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to fetch vendors",

error:
error.message,

});

}

};


// CREATE VENDOR

const createVendor =
async(req,res)=>{

try{

const vendor =
new Vendor(req.body);

await vendor.save();

res.status(201).json({

message:
"Vendor created successfully",

vendor,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to create vendor",

error:
error.message,

});

}

};


// UPDATE VENDOR

const updateVendor =
async(req,res)=>{

try{

const { id } =
req.params;

const updatedVendor =
await Vendor.findByIdAndUpdate(

id,

req.body,

{
new:true,
}

);

res.status(200).json({

message:
"Vendor updated successfully",

vendor:
updatedVendor,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to update vendor",

error:
error.message,

});

}

};


// DELETE VENDOR

const deleteVendor =
async(req,res)=>{

try{

const { id } =
req.params;

await Vendor.findByIdAndDelete(
id
);

res.status(200).json({

message:
"Vendor deleted successfully",

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to delete vendor",

error:
error.message,

});

}

};


module.exports = {

getVendors,

createVendor,

updateVendor,

deleteVendor,

};