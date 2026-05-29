const mongoose =
require("mongoose");

const vendorSchema =
new mongoose.Schema(

{

vendorId:{
type:String,
required:true,
unique:true,
trim:true,
},

vendorName:{
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

companyName:{
type:String,
default:"",
trim:true,
},

gstNumber:{
type:String,
default:"",
trim:true,
},

address:{
type:String,
default:"",
},

city:{
type:String,
default:"",
},

state:{
type:String,
default:"",
},

totalTrips:{
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

totalEarnings:{
type:Number,
default:0,
},

pendingAmount:{
type:Number,
default:0,
},

paymentStatus:{
type:String,
enum:[
"Pending",
"Paid",
"Partial",
],
default:"Pending",
},

status:{
type:String,
enum:[
"Active",
"Inactive",
"Blacklisted",
],
default:"Active",
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
"Vendor",
vendorSchema
);