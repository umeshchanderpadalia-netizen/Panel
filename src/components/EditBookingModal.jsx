import { useState } from "react";

import { motion } from "framer-motion";

function EditBookingModal({
  closeModal,
  selectedTrip,
  updateTrip,
}) {

  const [formData, setFormData] =
    useState({

      customer:
        selectedTrip.customer || "",

      phone:
        selectedTrip.phone || "",

      pickup:
        selectedTrip.pickup || "",

      drop:
        selectedTrip.drop || "",

      date:
        selectedTrip.date || "",

      tripType:
        selectedTrip.tripType ||
        "One Way",

      driver:
        selectedTrip.driver || "",

      vehicle:
        selectedTrip.vehicle || "",

      vendor:
        selectedTrip.vendor || "",

      total:
        selectedTrip.total || 0,

      gst:
        selectedTrip.gst || 0,

      tds:
        selectedTrip.tds || 0,

      vendorRate:
        selectedTrip.vendorRate || 0,

      totalExpenses:
        selectedTrip.totalExpenses || 0,

      profit:
        selectedTrip.profit || 0,

      paymentStatus:
        selectedTrip.paymentStatus ||
        "Pending",

      tripStatus:
        selectedTrip.tripStatus ||
        "Pending",

      invoiceStatus:
        selectedTrip.invoiceStatus ||
        "Pending",

      bookingStatus:
        selectedTrip.bookingStatus ||
        "Pending",

      vendorStatus:
        selectedTrip.vendorStatus ||
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

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    let color = "";

    if (
      formData.tripStatus ===
      "Completed"
    ) {

      color =
        "text-emerald-400 bg-emerald-500/20";
    }

    else if (
      formData.tripStatus ===
      "Cancelled"
    ) {

      color =
        "text-red-400 bg-red-500/20";
    }

    else if (
      formData.tripStatus ===
      "Confirmed"
    ) {

      color =
        "text-cyan-400 bg-cyan-500/20";
    }

    else if (
      formData.tripStatus ===
      "Driver Assigned"
    ) {

      color =
        "text-blue-400 bg-blue-500/20";
    }

    else if (
      formData.tripStatus ===
      "Pending"
    ) {

      color =
        "text-orange-400 bg-orange-500/20";
    }

    else {

      color =
        "text-yellow-400 bg-yellow-500/20";
    }

    updateTrip({
      ...selectedTrip,
      ...formData,
      color,
    });

    closeModal();
  };

  return (

    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-2xl px-6 py-10 overflow-y-auto">

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
        className="relative overflow-hidden w-full max-w-5xl bg-[#0a0a0a]/95 border border-white/10 rounded-3xl p-8 lg:p-10"
      >

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="mb-10">

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Booking Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">

              Edit Booking

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl">

              Manage operations, assignments,
              financial workflow and ERP status management.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-10"
          >

            {/* Customer */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Customer Information

              </h3>

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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

              </div>

            </div>

            {/* Trip */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Trip Information

              </h3>

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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <input
                  type="text"
                  name="date"
                  placeholder="Trip Date"
                  value={
                    formData.date
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <select
                  name="tripType"
                  value={
                    formData.tripType
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
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

            {/* Assignment */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Assignment

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="text"
                  name="driver"
                  placeholder="Driver"
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

              <h3 className="text-2xl font-bold text-white mb-7">

                ERP Financial Management

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

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

            {/* ERP Status */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                ERP Status System

              </h3>

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
            <div className="flex gap-4">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 rounded-2xl py-4 text-white hover:bg-white/[0.03] transition-all duration-300"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl py-4 font-semibold text-black hover:scale-[1.01] transition-all duration-300"
              >

                Save ERP Changes

              </button>

            </div>

          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default EditBookingModal;