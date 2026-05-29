const mongoose =
require("mongoose");

const driverSchema =
new mongoose.Schema(

{

driverId:{
type:String,
required:true,
unique:true,
trim:true,
},

name:{
type:String,
required:true,
trim:true,
},

phone:{
type:String,
required:true,
unique:true,
trim:true,
},

email:{
type:String,
default:"",
trim:true,
},

licenseNumber:{
type:String,
default:"",
trim:true,
},

vehicleType:{
type:String,
enum:[
"Sedan",
"SUV",
"Hatchback",
"Innova",
"Tempo Traveller",
"",
],
default:"",
},

vehicleNumber:{
type:String,
default:"",
trim:true,
},

vendor:{

type:
mongoose.Schema.Types.ObjectId,

ref:
"Vendor",

default:null,

},

currentLocation:{
type:String,
default:"",
},

status:{
type:String,
enum:[
"Available",
"On Trip",
"Offline",
],
default:"Offline",
},

availability:{
type:String,
enum:[
"Available",
"Busy",
"Offline",
],
default:"Offline",
},

assignedTrips:{
type:Number,
default:0,
},

completedTrips:{
type:Number,
default:0,
},

cancelledTrips:{
type:Number,
default:0,
},

rating:{
type:Number,
default:0,
min:0,
max:5,
},

earnings:{
type:Number,
default:0,
},

joiningDate:{
type:String,
default:"",
},

comments:{
type:String,
default:"",
},

},

{
timestamps:true,
}

);

module.exports=
mongoose.model(
"Driver",
driverSchema
);