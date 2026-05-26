const routes = {

"Delhi-Jaipur":280,
"Delhi-Agra":230,
"Delhi-Chandigarh":245,
"Delhi-Haridwar":220,

"Mumbai-Pune":150,
"Mumbai-Nashik":166,

"Jaipur-Udaipur":395,
"Jaipur-Ajmer":135,

"Lucknow-Kanpur":90,

"Bangalore-Mysore":145,
"Chennai-Bangalore":345,

"Hyderabad-Vijayawada":275,
"Ahmedabad-Surat":265,

};

function calculateDistance(
pickup,
drop
){

if(
!pickup ||
!drop
){

return 0;

}

const directRoute=
`${pickup}-${drop}`;

const reverseRoute=
`${drop}-${pickup}`;

return(

routes[
directRoute
]

||

routes[
reverseRoute
]

||

0

);

}

export default calculateDistance;