import { useState } from "react";

import { motion } from "framer-motion";

function BookingModal({
  closeModal,
  addTrip,
}) {

  const [formData, setFormData] =
    useState({

      customer: "",

      phone: "",

      pickup: "",

      drop: "",

      date: "",

      tripType:
        "One Way",

      driver: "",

      vehicle: "",

      vendor: "",

      total: 0,

      gst: 0,

      tds: 0,

      vendorRate: 0,

      totalExpenses: 0,

      profit: 0,

      paymentStatus:
        "Pending",

      invoiceStatus:
        "Pending",

      bookingStatus:
        "Pending",

      vendorStatus:
        "Pending",

      tripStatus:
        "Pending",
    });

  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const getStatusColor =
    (status) => {

      switch (status) {

        case "Completed":

          return "text-emerald-400 bg-emerald-500/20";

        case "Cancelled":

          return "text-red-400 bg-red-500/20";

        case "Confirmed":

          return "text-cyan-400 bg-cyan-500/20";

        case "Driver Assigned":

          return "text-blue-400 bg-blue-500/20";

        case "Pending":

          return "text-orange-400 bg-orange-500/20";

        default:

          return "text-yellow-400 bg-yellow-500/20";
      }
    };

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    const bookingId =
      `BK-${Date.now()}`;

    const invoiceNo =
      `INV-${Date.now()}`;

    addTrip({

      bookingId,

      invoiceNo,

      ...formData,

      receivedAmount: 0,

      paymentGateway:
        "Pending",

      shared: false,

      comment:
        "ERP booking created.",

      color:
        getStatusColor(
          formData.tripStatus
        ),
    });

    closeModal();
  };

  return (

    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-2xl px-6 py-10 overflow-y-auto">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative overflow-hidden w-full max-w-6xl bg-[#090909]/95 border border-white/10 rounded-[36px] p-8 lg:p-10 backdrop-blur-3xl"
      >

        {/* Glow */}
        <div className="absolute top-[-140px] right-[-140px] w-[280px] h-[280px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="mb-10">

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Booking Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">

              Create ERP Booking

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed">

              Create bookings, assign vendors and drivers,
              manage financial workflow and generate ERP-ready records.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Customer */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <div className="mb-7">

                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-medium">

                  Customer Information

                </p>

                <h3 className="text-2xl font-bold text-white mt-3">

                  Customer Details

                </h3>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="customer"
                  placeholder="Customer Name"
                  value={
                    formData.customer
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                />

              </div>

            </div>

            {/* Trip Information */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <div className="mb-7">

                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-medium">

                  Trip Information

                </p>

                <h3 className="text-2xl font-bold text-white mt-3">

                  Ride Details

                </h3>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Location"
                  value={
                    formData.pickup
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                />

                <input
                  type="text"
                  name="drop"
                  placeholder="Drop Location"
                  value={
                    formData.drop
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                />

                <input
                  type="date"
                  name="date"
                  value={
                    formData.date
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                />

                <select
                  name="tripType"
                  value={
                    formData.tripType
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
                >

                  <option>
                    One Way
                  </option>

                  <option>
                    Round Trip
                  </option>

                  <option>
                    Airport Transfer
                  </option>

                  <option>
                    Outstation
                  </option>

                </select>

              </div>

            </div>

            {/* Assignment & Finance */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {/* Assignment */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

                <div className="mb-7">

                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-medium">

                    Assignment

                  </p>

                  <h3 className="text-2xl font-bold text-white mt-3">

                    Driver & Vendor

                  </h3>

                </div>

                <div className="space-y-5">

                  <input
                    type="text"
                    name="driver"
                    placeholder="Assigned Driver"
                    value={
                      formData.driver
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Vehicle"
                    value={
                      formData.vehicle
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="text"
                    name="vendor"
                    placeholder="Vendor"
                    value={
                      formData.vendor
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                </div>

              </div>

              {/* ERP Finance */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

                <div className="mb-7">

                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-medium">

                    ERP Finance

                  </p>

                  <h3 className="text-2xl font-bold text-white mt-3">

                    Financial Management

                  </h3>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="number"
                    name="total"
                    placeholder="Revenue"
                    value={formData.total}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="number"
                    name="gst"
                    placeholder="GST"
                    value={formData.gst}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="number"
                    name="tds"
                    placeholder="TDS"
                    value={formData.tds}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="number"
                    name="vendorRate"
                    placeholder="Vendor Rate"
                    value={formData.vendorRate}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="number"
                    name="totalExpenses"
                    placeholder="Total Expenses"
                    value={formData.totalExpenses}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <input
                    type="number"
                    name="profit"
                    placeholder="Profit"
                    value={formData.profit}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                </div>

              </div>

            </div>

            {/* ERP Status */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <div className="mb-7">

                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-medium">

                  ERP Workflow

                </p>

                <h3 className="text-2xl font-bold text-white mt-3">

                  Status Management

                </h3>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <select
                  name="tripStatus"
                  value={formData.tripStatus}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Confirmed
                  </option>

                  <option>
                    Driver Assigned
                  </option>

                  <option>
                    Ongoing
                  </option>

                  <option>
                    Completed
                  </option>

                  <option>
                    Cancelled
                  </option>

                </select>

                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Partial
                  </option>

                  <option>
                    Paid
                  </option>

                </select>

                <select
                  name="invoiceStatus"
                  value={formData.invoiceStatus}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Generated
                  </option>

                  <option>
                    Sent
                  </option>

                </select>

                <select
                  name="bookingStatus"
                  value={formData.bookingStatus}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Confirmed
                  </option>

                  <option>
                    Closed
                  </option>

                </select>

              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 hover:bg-white/[0.05] transition-all duration-300 rounded-2xl py-4 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.01] transition-all duration-300 rounded-2xl py-4 font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
              >

                Create ERP Booking

              </button>

            </div>

          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default BookingModal;