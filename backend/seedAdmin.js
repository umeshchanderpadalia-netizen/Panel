const mongoose =
require("mongoose");

const bcrypt =
require("bcryptjs");

require("dotenv").config();

const User =
require("./models/User");


// CONNECT DATABASE

mongoose.connect(
process.env.MONGO_URI
)

.then(()=>{

console.log(
"MongoDB Connected"
);

createAdmin();

})

.catch((error)=>{

console.log(error);

});


// CREATE ADMIN

async function createAdmin(){

try{

const existingUser =
await User.findOne({

email:
"admin@getmecab.com",

});


if(existingUser){

console.log(
"Admin already exists"
);

process.exit();

}


// HASH PASSWORD

const hashedPassword =
await bcrypt.hash(

"admin123",

10

);


// CREATE USER

const admin =
new User({

name:
"Deepanshu",

email:
"admin@getmecab.com",

password:
hashedPassword,

role:
"Admin",

});


await admin.save();

console.log(
"Admin created successfully"
);

process.exit();

}catch(error){

console.log(error);

process.exit();

}

}