function getAuthHeaders(){

const token=
localStorage.getItem(
"cab-token"
);


// AUTO LOGOUT IF TOKEN MISSING

if(!token){

localStorage.removeItem(
"cab-user"
);

window.location.href=
"/login";

return{};
}


return{

"Content-Type":
"application/json",

Authorization:
token,

};

}

export default
getAuthHeaders;