import API_BASE_URL
from "../config/api";

import getAuthHeaders
from "../utils/getAuthHeaders";

const API_URL =
`${API_BASE_URL}/bookings`;


// GET BOOKINGS

export async function getTrips(){

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


// CREATE BOOKING

export async function createTrip(
trip
){

try{

const response=
await fetch(API_URL,{

method:"POST",

headers:
getAuthHeaders(),

body:
JSON.stringify(trip),

});

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// UPDATE BOOKING

export async function updateTrip(
id,
trip
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
JSON.stringify(trip),

}

);

return await response.json();

}catch(error){

console.log(error);

return null;

}

}


// DELETE BOOKING

export async function deleteTrip(
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