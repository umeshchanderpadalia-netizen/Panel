import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import CityAutocomplete from "./CityAutocomplete";

const statusColors = {
  Pending:
    "text-orange-400 bg-orange-500/20",

  Confirmed:
    "text-cyan-400 bg-cyan-500/20",

  "Driver Assigned":
    "text-blue-400 bg-blue-500/20",

  Ongoing:
    "text-yellow-400 bg-yellow-500/20",

  Completed:
    "text-emerald-400 bg-emerald-500/20",

  Cancelled:
    "text-red-400 bg-red-500/20",
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-yellow-400/30 focus:bg-white/[0.06]";

const sectionClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-7";

function AddBookingModal({
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

      vehicle:
        "Sedan",

      driver: "",

      vendor: "",

      total: "",

      paymentStatus:
        "Pending",

      tripStatus:
        "Pending",

      comments: "",
    });

  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (
    field,
    value
  ) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const totalAmount =
    useMemo(() => {

      if (!formData.total) {

        return "₹0";
      }

      return `₹${Number(
        formData.total
      ).toLocaleString(
        "en-IN"
      )}`;

    }, [formData.total]);

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    const newTrip = {

      id:
        Date.now(),

      customer:
        formData.customer,

      phone:
        formData.phone,

      pickup:
        formData.pickup,

      drop:
        formData.drop,

      rideDate:
        formData.date,

      bookingType:
        formData.tripType,

      driver:
        formData.driver,

      vehicle:
        formData.vehicle,

      vendor:
        formData.vendor,

      fare:
        totalAmount,

      paymentStatus:
        formData.paymentStatus,

      status:
        formData.tripStatus,

      comments:
        formData.comments,

      color:
        statusColors[
          formData.tripStatus
        ] ||
        statusColors.Pending,
    };

    addTrip(newTrip);

    closeModal();
  };

  return (

    <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/85 px-6 py-10 backdrop-blur-2xl">

      <div className="flex min-h-full items-center justify-center">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.28,
          }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[34px] border border-white/10 bg-[#0a0a0a]/95 p-8 lg:p-10"
        >

          {/* Glow Effects */}
          <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px]"></div>

          <div className="absolute bottom-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-[120px]"></div>

          <div className="relative z-10">

            {/* Header */}
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
                  ERP Booking Operations
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                  Add Booking
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
                  Create customer rides, manage trip operations and assign transport workflow instantly.
                </p>

              </div>

              {/* Live Status */}
              <div className="rounded-2xl border border-yellow-500/15 bg-yellow-500/10 px-5 py-4">

                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Current Status
                </p>

                <div
                  className={`mt-3 inline-flex rounded-full px-4 py-2 text-sm font-medium ${statusColors[formData.tripStatus]}`}
                >

                  {formData.tripStatus}

                </div>

              </div>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* Customer Section */}
              <div className={sectionClass}>

                <div className="mb-7 flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      Customer Information
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      Passenger identity and contact details.
                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <input
                    type="text"
                    name="customer"
                    placeholder="Customer Name"
                    value={formData.customer}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                </div>

              </div>

              {/* Trip Section */}
              <div className={sectionClass}>

                <h3 className="text-2xl font-bold text-white">
                  Trip Information
                </h3>

                <p className="mt-2 mb-7 text-sm text-zinc-500">
                  Configure route, schedule and ride category.
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <CityAutocomplete
                    label="Pickup Location"
                    placeholder="Search pickup city..."
                    value={formData.pickup}
                    onChange={(value) =>
                      handleLocationChange(
                        "pickup",
                        value
                      )
                    }
                  />

                  <CityAutocomplete
                    label="Destination"
                    placeholder="Search destination city..."
                    value={formData.drop}
                    onChange={(value) =>
                      handleLocationChange(
                        "drop",
                        value
                      )
                    }
                  />

                  <div>

                    <label className="mb-3 block text-sm text-zinc-400">
                      Trip Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-sm text-zinc-400">
                      Trip Type
                    </label>

                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleChange}
                      className={inputClass}
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

              {/* Assignment */}
              <div className={sectionClass}>

                <h3 className="text-2xl font-bold text-white">
                  Assignment
                </h3>

                <p className="mt-2 mb-7 text-sm text-zinc-500">
                  Assign driver, vendor and vehicle category.
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                  <input
                    type="text"
                    name="driver"
                    placeholder="Driver Name"
                    value={formData.driver}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className={inputClass}
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
                    placeholder="Vendor Name"
                    value={formData.vendor}
                    onChange={handleChange}
                    className={inputClass}
                  />

                </div>

              </div>

              {/* Payment */}
              <div className={sectionClass}>

                <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      Payment Information
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      Fare amount and payment tracking.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Estimated Fare
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-yellow-400">
                      {totalAmount}
                    </h4>

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <input
                    type="number"
                    name="total"
                    placeholder="Trip Amount"
                    value={formData.total}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    className={inputClass}
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

                </div>

              </div>

              {/* Status */}
              <div className={sectionClass}>

                <h3 className="text-2xl font-bold text-white">
                  Booking Status
                </h3>

                <p className="mt-2 mb-7 text-sm text-zinc-500">
                  Manage ride progress and operation notes.
                </p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <select
                    name="tripStatus"
                    value={formData.tripStatus}
                    onChange={handleChange}
                    className={inputClass}
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

                  <textarea
                    name="comments"
                    placeholder="Operational comments..."
                    value={formData.comments}
                    onChange={handleChange}
                    rows={1}
                    className={`${inputClass} resize-none`}
                  />

                </div>

              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 rounded-2xl border border-white/10 py-4 text-white transition-all duration-300 hover:bg-white/[0.04]"
                >

                  Cancel

                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                >

                  Create Booking

                </button>

              </div>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default AddBookingModal;