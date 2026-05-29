const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{

bookingId:{
type:String,
required:true,
unique:true,
trim:true,
index:true,
},

invoiceNo:{
type:String,
default:"",
},

customer:{
type:String,
required:true,
trim:true,
index:true,
},

phone:{
type:String,
required:true,
trim:true,
index:true,
},

email:{
type:String,
default:"",
},

pickup:{
type:String,
required:true,
trim:true,
index:true,
},

drop:{
type:String,
required:true,
trim:true,
index:true,
},

date:{
type:String,
default:"",
},

tripType:{
type:String,
enum:[
"One Way",
"Round Trip",
"Airport",
],
default:"One Way",
},

driver:{
type:
mongoose.Schema.Types.ObjectId,
ref:"Driver",
default:null,
},

vendor:{
type:
mongoose.Schema.Types.ObjectId,
ref:"Vendor",
default:null,
},

vehicle:{
type:String,
default:"",
},

total:{
type:Number,
required:true,
default:0,
},

totalExpenses:{
type:Number,
default:0,
},

profit:{
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

tripStatus:{
type:String,
enum:[
"Pending",
"Driver Assigned",
"Confirmed",
"Completed",
"Cancelled",
],
default:"Pending",
index:true,
},


// =====================
// SOFT DELETE
// =====================

isDeleted:{
type:Boolean,
default:false,
index:true,
},


// =====================
// ACTIVITY LOGS
// =====================

activityLogs:[

{

action:{
type:String,
default:"",
},

message:{
type:String,
default:"",
},

createdAt:{
type:Date,
default:Date.now,
},

},

],

},

{
timestamps:true,
}

);


// INDEXES

bookingSchema.index({
customer:1,
phone:1,
});

bookingSchema.index({
tripStatus:1,
createdAt:-1,
});

module.exports = mongoose.model(
"Booking",
bookingSchema
);