import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
Tooltip,
CartesianGrid,
} from "recharts";

function RevenueChart({

trips

}){

const totalRevenue=

trips.reduce(

(total,trip)=>

total+

Number(
trip.total
||0
),

0

);

const totalExpenses=

trips.reduce(

(total,trip)=>

total+

Number(
trip.totalExpenses
||0
),

0

);

const totalBalance=

trips.reduce(

(total,trip)=>

total+

Number(
trip.balance
||0
),

0

);

const chartData=[

{

name:"Revenue",

value:
totalRevenue,

},

{

name:"Expenses",

value:
totalExpenses,

},

{

name:"Balance",

value:
totalBalance,

},

];

return(

<div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8">

<h2 className="text-3xl font-bold text-white mb-2">

Booking Analytics

</h2>

<p className="text-zinc-500 mb-8">

Revenue and booking performance overview

</p>

<div className="h-[400px]">

<ResponsiveContainer
width="100%"
height="100%"
>

<AreaChart
data={chartData}
>

<defs>

<linearGradient
id="chartFill"
x1="0"
y1="0"
x2="0"
y2="1"
>

<stop
offset="5%"
stopColor="#facc15"
stopOpacity={0.5}
/>

<stop
offset="95%"
stopColor="#facc15"
stopOpacity={0}
/>

</linearGradient>

</defs>

<CartesianGrid
stroke="rgba(255,255,255,.05)"
strokeDasharray="3 3"
/>

<XAxis
dataKey="name"
tick={{
fill:"#a1a1aa"
}}
axisLine={false}
tickLine={false}
/>

<Tooltip
contentStyle={{
background:"#0a0a0a",
border:"1px solid rgba(255,255,255,.08)",
borderRadius:"15px",
}}
/>

<Area
type="monotone"
dataKey="value"
stroke="#facc15"
strokeWidth={4}
fill="url(#chartFill)"
/>

</AreaChart>

</ResponsiveContainer>

</div>

</div>

);

}

export default RevenueChart;