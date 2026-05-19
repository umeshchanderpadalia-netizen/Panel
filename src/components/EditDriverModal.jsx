import { useState } from "react";

import { motion } from "framer-motion";

function EditDriverModal({
  selectedDriver,
  closeModal,
  updateDriver,
}) {

  const [formData, setFormData] =
    useState({
      name:
        selectedDriver.name || "",

      phone:
        selectedDriver.phone || "",

      email:
        selectedDriver.email || "",

      vehicle:
        selectedDriver.vehicle || "",

      vehicleNumber:
        selectedDriver.vehicleNumber ||
        "",

      vehicleType:
        selectedDriver.vehicleType ||
        "",

      vendor:
        selectedDriver.vendor || "",

      location:
        selectedDriver.location ||
        "",

      status:
        selectedDriver.status ||
        "Available",

      availability:
        selectedDriver.availability ||
        "Online",

      assignedTrips:
        selectedDriver.assignedTrips ||
        0,

      completedTrips:
        selectedDriver.completedTrips ||
        0,

      cancelledTrips:
        selectedDriver.cancelledTrips ||
        0,

      rating:
        selectedDriver.rating || 0,

      earnings:
        selectedDriver.earnings ||
        "₹0",

      joiningDate:
        selectedDriver.joiningDate ||
        "",

      licenseNumber:
        selectedDriver.licenseNumber ||
        "",
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

        case "Available":

          return "text-emerald-400 bg-emerald-500/20";

        case "On Trip":

          return "text-yellow-400 bg-yellow-500/20";

        case "Offline":

          return "text-red-400 bg-red-500/20";

        case "Inactive":

          return "text-zinc-400 bg-zinc-500/20";

        default:

          return "text-cyan-400 bg-cyan-500/20";
      }
    };

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    updateDriver({
      ...selectedDriver,
      ...formData,
      color:
        getStatusColor(
          formData.status
        ),
    });

    closeModal();
  };

  return (

    <div className="fixed inset-0 z-[160] flex items-center justify-center bg-black/80 backdrop-blur-xl px-6 py-10 overflow-y-auto">

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

              Driver Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">

              Edit Driver

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl">

              Update driver details, assignments,
              operational status and transport workflow.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Driver Information */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Driver Information

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Driver Name"
                  value={
                    formData.name
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

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Current Location"
                  value={
                    formData.location
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

              </div>

            </div>

            {/* Vehicle & Vendor */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Vehicle & Vendor

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                  name="vehicleNumber"
                  placeholder="Vehicle Number"
                  value={
                    formData.vehicleNumber
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <input
                  type="text"
                  name="vehicleType"
                  placeholder="Vehicle Type"
                  value={
                    formData.vehicleType
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

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
                    Available
                  </option>

                  <option>
                    On Trip
                  </option>

                  <option>
                    Offline
                  </option>

                  <option>
                    Inactive
                  </option>

                </select>

                <select
                  name="availability"
                  value={
                    formData.availability
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white"
                >

                  <option>
                    Online
                  </option>

                  <option>
                    Offline
                  </option>

                </select>

                <input
                  type="text"
                  name="earnings"
                  placeholder="Monthly Earnings"
                  value={
                    formData.earnings
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

              </div>

            </div>

            {/* Stats */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Performance Metrics

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="number"
                  name="assignedTrips"
                  placeholder="Assigned Trips"
                  value={
                    formData.assignedTrips
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <input
                  type="number"
                  name="completedTrips"
                  placeholder="Completed Trips"
                  value={
                    formData.completedTrips
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  placeholder="Rating"
                  value={
                    formData.rating
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white"
                />

              </div>

            </div>

            {/* Footer */}
            <div className="flex gap-4 pt-2">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 hover:bg-white/[0.04] transition-all duration-300 rounded-2xl py-4 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.01] transition-all duration-300 rounded-2xl py-4 font-semibold text-black shadow-[0_0_25px_rgba(250,204,21,0.18)]"
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

export default EditDriverModal;