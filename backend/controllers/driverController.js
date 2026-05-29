const Driver =
require("../models/Driver");


// GET ALL DRIVERS

const getDrivers =
async(req,res)=>{

try{

const drivers =
await Driver.find()

.populate(
"vendor"
)

.sort({
createdAt:-1,
});

res.status(200).json(
drivers
);

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to fetch drivers",

error:
error.message,

});

}

};


// CREATE DRIVER

const createDriver =
async(req,res)=>{

try{

const driver =
new Driver(req.body);

await driver.save();

res.status(201).json({

message:
"Driver created successfully",

driver,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to create driver",

error:
error.message,

});

}

};


// UPDATE DRIVER

const updateDriver =
async(req,res)=>{

try{

const { id } =
req.params;

const updatedDriver =
await Driver.findByIdAndUpdate(

id,

req.body,

{
new:true,
}

)

.populate("vendor");


res.status(200).json({

message:
"Driver updated successfully",

driver:
updatedDriver,

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to update driver",

error:
error.message,

});

}

};


// DELETE DRIVER

const deleteDriver =
async(req,res)=>{

try{

const { id } =
req.params;

await Driver.findByIdAndDelete(
id
);

res.status(200).json({

message:
"Driver deleted successfully",

});

}catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to delete driver",

error:
error.message,

});

}

};


module.exports={

getDrivers,

createDriver,

updateDriver,

deleteDriver,

};