function calculateBookingTotals({

baseAmount = 0,
gst = 0,
tds = 0,
vendorRate = 0,
paidAmount = 0,

}) {

const amount =
Number(baseAmount) || 0;

const expense =
Number(vendorRate) || 0;

const paid =
Number(paidAmount) || 0;


// GST amount

const gstAmount =

amount *
Number(gst);


// Amount after GST

const afterGst =

amount +
gstAmount;


// TDS amount

const tdsAmount =

afterGst *
Number(tds);


// Amount after TDS

const afterTds =

afterGst -
tdsAmount;


// Total amount

const total =

afterTds +
expense;


// Remaining balance

const balance =

total -
paid;


return {

gstAmount:
gstAmount.toFixed(0),

tdsAmount:
tdsAmount.toFixed(0),

afterGst:
afterGst.toFixed(0),

afterTds:
afterTds.toFixed(0),

totalExpenses:
expense.toFixed(0),

total:
total.toFixed(0),

balance:
balance.toFixed(0),

};

}

export default calculateBookingTotals;