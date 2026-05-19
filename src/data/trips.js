const trips = [

  {
    bookingId: "BK-1001",

    invoiceNo:
      "INV-2026-001",

    date:
      "19 May 2026",

    time:
      "09:30 AM",

    customer:
      "Rohan Mehta",

    phone:
      "+91 9876543210",

    email:
      "rohan@gmail.com",

    pickup:
      "Rajouri Garden",

    drop:
      "IGI Airport",

    tripType:
      "Airport Transfer",

    vehicle:
      "Toyota Innova",

    vendor:
      "Delhi Taxi Service",

    driver:
      "Rahul Sharma",

    driverPhone:
      "+91 9871112233",

    days: 1,

    kms: 32,

    amount: 1250,

    gst: 225,

    tds: 50,

    otherCharges: 0,

    total:
      1475,

    receivedAmount:
      1475,

    vendorRate:
      850,

    fuelExpense:
      200,

    driverDA:
      150,

    otherExpenses:
      0,

    totalExpenses:
      1200,

    profit:
      275,

    paymentGateway:
      "Razorpay",

    paymentStatus:
      "Paid",

    invoiceStatus:
      "Generated",

    vendorStatus:
      "Paid",

    tripStatus:
      "Completed",

    bookingStatus:
      "Closed",

    shared:
      false,

    comment:
      "Trip completed successfully.",

    color:
      "text-emerald-400 bg-emerald-500/20",
  },

  {
    bookingId: "BK-1002",

    invoiceNo:
      "INV-2026-002",

    date:
      "19 May 2026",

    time:
      "11:45 AM",

    customer:
      "Anjali Verma",

    phone:
      "+91 9812345678",

    email:
      "anjali@gmail.com",

    pickup:
      "Dwarka Sector 21",

    drop:
      "Cyber Hub Gurgaon",

    tripType:
      "One Way",

    vehicle:
      "Hyundai Creta",

    vendor:
      "Royal Cab Partners",

    driver:
      "Aman Verma",

    driverPhone:
      "+91 9811112222",

    days: 1,

    kms: 24,

    amount: 890,

    gst: 160,

    tds: 0,

    otherCharges: 50,

    total:
      1100,

    receivedAmount:
      0,

    vendorRate:
      650,

    fuelExpense:
      180,

    driverDA:
      100,

    otherExpenses:
      50,

    totalExpenses:
      980,

    profit:
      120,

    paymentGateway:
      "Pending",

    paymentStatus:
      "Pending",

    invoiceStatus:
      "Pending",

    vendorStatus:
      "Pending",

    tripStatus:
      "Ongoing",

    bookingStatus:
      "Confirmed",

    shared:
      true,

    comment:
      "Customer requested early pickup.",

    color:
      "text-yellow-400 bg-yellow-500/20",
  },

  {
    bookingId: "BK-1003",

    invoiceNo:
      "INV-2026-003",

    date:
      "18 May 2026",

    time:
      "02:00 PM",

    customer:
      "Priya Kapoor",

    phone:
      "+91 9823456781",

    email:
      "priya@gmail.com",

    pickup:
      "Connaught Place",

    drop:
      "Noida Sector 62",

    tripType:
      "Round Trip",

    vehicle:
      "Honda City",

    vendor:
      "City Ride Travels",

    driver:
      "Mohit Singh",

    driverPhone:
      "+91 9898989898",

    days: 1,

    kms: 48,

    amount: 1620,

    gst: 290,

    tds: 75,

    otherCharges:
      100,

    total:
      2010,

    receivedAmount:
      1000,

    vendorRate:
      1100,

    fuelExpense:
      320,

    driverDA:
      150,

    otherExpenses:
      80,

    totalExpenses:
      1650,

    profit:
      360,

    paymentGateway:
      "Paytm",

    paymentStatus:
      "Partial",

    invoiceStatus:
      "Generated",

    vendorStatus:
      "Pending",

    tripStatus:
      "Driver Assigned",

    bookingStatus:
      "Confirmed",

    shared:
      false,

    comment:
      "Awaiting remaining payment.",

    color:
      "text-blue-400 bg-blue-500/20",
  },
];

export default trips;