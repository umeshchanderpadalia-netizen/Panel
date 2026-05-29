import API_BASE_URL
from "../config/api";

const API_URL =
`${API_BASE_URL}/auth`;


// LOGIN

export async function loginApi({

email,

password,

}){

try{

const response=
await fetch(

`${API_URL}/login`,

{

method:"POST",

headers:{
"Content-Type":
"application/json",
},

body:
JSON.stringify({

email,

password,

}),

}

);

const data=
await response.json();

if(!response.ok){

return{

success:false,

message:
data.message ||
"Login failed",

};

}


// SAVE TOKEN

localStorage.setItem(

"cab-token",

data.token

);


// SAVE USER

localStorage.setItem(

"cab-user",

JSON.stringify(
data.user
)

);


return{

success:true,

user:data.user,

token:data.token,

};

}catch(error){

console.log(error);

return{

success:false,

message:
"Server connection failed",

};

}

}


// LOGOUT

export async function logoutApi(){

localStorage.removeItem(
"cab-token"
);

localStorage.removeItem(
"cab-user"
);

return{
success:true,
};

}