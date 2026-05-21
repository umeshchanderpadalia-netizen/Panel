import { useState } from "react";

import { motion } from "framer-motion";

import CityAutocomplete from "./CityAutocomplete";

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

      paymentStatus:
        selectedTrip.paymentStatus ||
        "Pending",

      tripStatus:
        selectedTrip.tripStatus ||
        "Pending",

      bookingStatus:
        selectedTrip.bookingStatus ||
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

    updateTrip({
      ...selectedTrip,
      ...formData,
      color:
        getStatusColor(
          formData.tripStatus
        ),
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

        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          <div className="mb-10">

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Booking Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">

              Edit Booking

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl">

              Manage booking workflow, customer transport activity,
              assignments and operational trip management.

            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-10"
          >

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Customer Information

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="customer"
                  required
                  placeholder="Customer Name"
                  value={
                    formData.customer
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

              </div>

            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Trip Information

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <CityAutocomplete
                  label="Pickup Location"
                  placeholder="Search pickup city..."
                  value={formData.pickup}
                  onChange={(value) =>
                    setFormData({
                      ...formData,
                      pickup: value,
                    })
                  }
                />

                <CityAutocomplete
                  label="Destination"
                  placeholder="Search destination city..."
                  value={formData.drop}
                  onChange={(value) =>
                    setFormData({
                      ...formData,
                      drop: value,
                    })
                  }
                />

                <div>

                  <label className="block text-sm text-zinc-400 mb-3">

                    Trip Date

                  </label>

                  <input
                    type="date"
                    name="date"
                    value={
                      formData.date
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                  />

                </div>

                <div>

                  <label className="block text-sm text-zinc-400 mb-3">

                    Trip Type

                  </label>

                  <select
                    name="tripType"
                    value={
                      formData.tripType
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
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

            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Assignment

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="text"
                  name="driver"
                  required
                  placeholder="Driver"
                  value={
                    formData.driver
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <select
                  name="vehicle"
                  value={
                    formData.vehicle
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                >

                  <option>
                    Sedan
                  </option>

                  <option>
                    SUV
                  </option>

                  <option>
                    Innova
                  </option>

                  <option>
                    Crysta
                  </option>

                  <option>
                    Hatchback
                  </option>

                  <option>
                    Tempo Traveller
                  </option>

                </select>

                <input
                  type="text"
                  name="vendor"
                  required
                  placeholder="Vendor"
                  value={
                    formData.vendor
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

              </div>

            </div>

          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default EditBookingModal;