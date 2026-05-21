import { useState } from "react";

import { motion } from "framer-motion";

function EditVendorModal({
  selectedVendor,
  closeModal,
  updateVendor,
}) {

  const [formData, setFormData] =
    useState({
      company:
        selectedVendor.company ||
        "",

      owner:
        selectedVendor.owner ||
        "",

      phone:
        selectedVendor.phone ||
        "",

      email:
        selectedVendor.email ||
        "",

      location:
        selectedVendor.location ||
        "",

      totalDrivers:
        selectedVendor.totalDrivers ||
        0,

      activeDrivers:
        selectedVendor.activeDrivers ||
        0,

      assignedTrips:
        selectedVendor.assignedTrips ||
        0,

      completedTrips:
        selectedVendor.completedTrips ||
        0,

      cancelledTrips:
        selectedVendor.cancelledTrips ||
        0,

      monthlyRevenue:
        selectedVendor.monthlyRevenue ||
        "₹0",

      pendingPayments:
        selectedVendor.pendingPayments ||
        "₹0",

      paymentStatus:
        selectedVendor.paymentStatus ||
        "Pending",

      status:
        selectedVendor.status ||
        "Active",

      partnershipDate:
        selectedVendor.partnershipDate ||
        "",

      gstNumber:
        selectedVendor.gstNumber ||
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

        case "Active":

          return "text-emerald-400 bg-emerald-500/20";

        case "Busy":

          return "text-yellow-400 bg-yellow-500/20";

        case "Inactive":

          return "text-zinc-400 bg-zinc-500/20";

        case "Blacklisted":

          return "text-red-400 bg-red-500/20";

        default:

          return "text-cyan-400 bg-cyan-500/20";
      }
    };

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    updateVendor({
      ...selectedVendor,
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

              Vendor Operations

            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">

              Edit Vendor

            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl">

              Update vendor operations, payment workflow,
              fleet management and partnership activity.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Vendor Information */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Vendor Information

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company Name"
                  value={
                    formData.company
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="text"
                  name="owner"
                  required
                  placeholder="Owner Name"
                  value={
                    formData.owner
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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Location"
                  value={
                    formData.location
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="text"
                  name="gstNumber"
                  placeholder="GST Number"
                  value={
                    formData.gstNumber
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

              </div>

            </div>

            {/* Fleet Operations */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Fleet Operations

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="number"
                  name="totalDrivers"
                  placeholder="Total Drivers"
                  value={
                    formData.totalDrivers
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="number"
                  name="activeDrivers"
                  placeholder="Active Drivers"
                  value={
                    formData.activeDrivers
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

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
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

              </div>

            </div>

            {/* Revenue */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Revenue & Payments

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="text"
                  name="monthlyRevenue"
                  placeholder="Monthly Revenue"
                  value={
                    formData.monthlyRevenue
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <input
                  type="text"
                  name="pendingPayments"
                  placeholder="Pending Payments"
                  value={
                    formData.pendingPayments
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                />

                <select
                  name="paymentStatus"
                  value={
                    formData.paymentStatus
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                >

                  <option>
                    Paid
                  </option>

                  <option>
                    Pending
                  </option>

                  <option>
                    Overdue
                  </option>

                </select>

              </div>

            </div>

            {/* Status */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold text-white mb-7">

                Operational Status

              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <select
                  name="status"
                  value={
                    formData.status
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
                >

                  <option>
                    Active
                  </option>

                  <option>
                    Busy
                  </option>

                  <option>
                    Inactive
                  </option>

                  <option>
                    Blacklisted
                  </option>

                </select>

                <input
                  type="date"
                  name="partnershipDate"
                  value={
                    formData.partnershipDate
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400/30"
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

export default EditVendorModal;