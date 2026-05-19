import { useState } from "react";

import { motion } from "framer-motion";

function EditTripModal({
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

      rideDate:
        selectedTrip.rideDate || "",

      bookingType:
        selectedTrip.bookingType ||
        "One Way",

      driver:
        selectedTrip.driver || "",

      vehicle:
        selectedTrip.vehicle || "",

      vendor:
        selectedTrip.vendor || "",

      fare:
        selectedTrip.fare || "",

      paymentStatus:
        selectedTrip.paymentStatus ||
        "Pending",

      status:
        selectedTrip.status ||
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
          formData.status
        ),
    });

    closeModal();
  };

  return (

    <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/85 backdrop-blur-2xl px-6 py-10 overflow-y-auto">

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
        className="relative overflow-hidden w-full max-w-5xl bg-[#090909]/95 border border-white/10 rounded-[36px] p-8 lg:p-10"
      >

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="mb-10">

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              Trip Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">

              Edit Trip

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl">

              Update trip workflow, assignments,
              payment information and operational activity.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
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
                  placeholder="Pickup"
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
                  placeholder="Drop"
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
                  name="rideDate"
                  placeholder="Ride Date"
                  value={
                    formData.rideDate
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <select
                  name="bookingType"
                  value={
                    formData.bookingType
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

            {/* Assignment & Operations */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {/* Assignment */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

                <h3 className="text-2xl font-bold text-white mb-7">

                  Assignment

                </h3>

                <div className="space-y-5">

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

              {/* Operations */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

                <h3 className="text-2xl font-bold text-white mb-7">

                  Operations

                </h3>

                <div className="space-y-5">

                  <input
                    type="text"
                    name="fare"
                    placeholder="Fare"
                    value={
                      formData.fare
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  />

                  <select
                    name="paymentStatus"
                    value={
                      formData.paymentStatus
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                  >

                    <option>
                      Pending
                    </option>

                    <option>
                      Paid
                    </option>

                    <option>
                      Partial
                    </option>

                  </select>

                  <select
                    name="status"
                    value={
                      formData.status
                    }
                    onChange={
                      handleChange
                    }
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

                </div>

              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-4">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 rounded-2xl py-4 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl py-4 font-semibold text-black"
              >

                Save Changes

              </button>

            </div>

          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default EditTripModal;