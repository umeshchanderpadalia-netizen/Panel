function TripAmountSummary({

total=0,
expenses=0,
balance=0,
afterTds=0

}){

return(

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-3xl border border-white/10 p-5">

<p className="text-zinc-500">

Total

</p>

<h2 className="text-2xl font-bold text-emerald-400 mt-3">

₹{total}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-5">

<p className="text-zinc-500">

Expenses

</p>

<h2 className="text-2xl font-bold text-red-400 mt-3">

₹{expenses}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-5">

<p className="text-zinc-500">

After TDS

</p>

<h2 className="text-2xl font-bold text-yellow-400 mt-3">

₹{afterTds}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-5">

<p className="text-zinc-500">

Balance

</p>

<h2 className="text-2xl font-bold text-cyan-400 mt-3">

₹{balance}

</h2>

</div>

</div>

);

}

export default TripAmountSummary;