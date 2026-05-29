import API_BASE_URL
from "../config/api";

import getAuthHeaders
from "../utils/getAuthHeaders";

const API_URL =
`${API_BASE_URL}/vendors`;


// GET VENDORS

export async function getVendors(){

try{

const response=
await fetch(API_URL,{

headers:
getAuthHeaders(),

});

return await response.json();

}catch(error){

console.log(error);

return [];

}

}


// CREATE VENDOR

export async function createVendor(
vendor
){

try{

const response=
await fetch(API_URL,{

method:"POST",

headers:
getAuthHeaders(),

body:
JSON.stringify(vendor),

});

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// UPDATE VENDOR

export async function updateVendor(
id,
vendor
){

try{

const response=
await fetch(

`${API_URL}/${id}`,

{

method:"PUT",

headers:
getAuthHeaders(),

body:
JSON.stringify(vendor),

}

);

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// DELETE VENDOR

export async function deleteVendor(
id
){

try{

const response=
await fetch(

`${API_URL}/${id}`,

{

method:"DELETE",

headers:
getAuthHeaders(),

}

);

return await response.json();

}catch(error){

console.log(error);

return null;

}

}