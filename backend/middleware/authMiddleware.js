const jwt =
require("jsonwebtoken");

const protect =
async(req,res,next)=>{

try{

const authHeader =
req.headers.authorization;

if(!authHeader){

return res.status(401).json({

message:
"No token provided",

});

}


// VERIFY TOKEN

const decoded =
jwt.verify(

authHeader,

process.env.JWT_SECRET

);


// SAVE USER ID

req.userId =
decoded.id;

next();

}catch(error){

console.log(error);

res.status(401).json({

message:
"Invalid token",

});

}

};

module.exports={
protect,
};