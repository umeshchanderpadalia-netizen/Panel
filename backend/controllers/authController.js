const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

const User =
require("../models/User");


// LOGIN USER

const loginUser =
async(req,res)=>{

try{

const {
email,
password,
} = req.body;


// CHECK EMAIL

const user =
await User.findOne({

email:
email.toLowerCase(),

});


if(!user){

return res.status(404).json({

message:
"User not found",

});

}


// CHECK PASSWORD

const isMatch =
await bcrypt.compare(

password,

user.password

);


if(!isMatch){

return res.status(400).json({

message:
"Invalid credentials",

});

}


// CREATE TOKEN

const token =
jwt.sign(

{
id:user._id,
},

process.env.JWT_SECRET,

{
expiresIn:"7d",
}

);


// SUCCESS

res.status(200).json({

success:true,

message:
"Login successful",

token,

user:{

id:user._id,

name:user.name,

email:user.email,

role:user.role,

},

});

}catch(error){

console.log(
"LOGIN ERROR:",
error
);

res.status(500).json({

success:false,

message:
"Server error",

});

}

};


module.exports={
loginUser,
};