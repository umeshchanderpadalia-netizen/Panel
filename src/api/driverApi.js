import API_BASE_URL
from "../config/api";

import getAuthHeaders
from "../utils/getAuthHeaders";

const API_URL =
`${API_BASE_URL}/drivers`;


// GET DRIVERS

export async function getDrivers(){

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


// CREATE DRIVER

export async function createDriver(
driver
){

try{

const response=
await fetch(API_URL,{

method:"POST",

headers:
getAuthHeaders(),

body:
JSON.stringify(driver),

});

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// UPDATE DRIVER

export async function updateDriver(
id,
driver
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
JSON.stringify(driver),

}

);

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// DELETE DRIVER

export async function deleteDriver(
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