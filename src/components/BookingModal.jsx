import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import {
  Car,
  User,
  IndianRupee,
  MapPin,
  ShieldCheck,
  Receipt,
} from "lucide-react";

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

      vehicle: "Sedan",

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
    event
  ) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const estimatedProfit =
    useMemo(() => {

      const revenue =
        Number(
          formData.total
        ) || 0;

      const expenses =
        Number(
          formData.totalExpenses
        ) || 0;

      const gst =
        Number(
          formData.gst
        ) || 0;

      const tds =
        Number(
          formData.tds
        ) || 0;

      return (
        revenue -
        expenses -
        gst -
        tds
      );

    }, [
      formData.total,
      formData.totalExpenses,
      formData.gst,
      formData.tds,
    ]);

  const handleSubmit = (
    event
  ) => {

    event.preventDefault();

    const bookingId =
      `BK-${Date.now()}`;

    const invoiceNo =
      `INV-${Date.now()}`;

    addTrip({

      bookingId,

      invoiceNo,

      ...formData,

      profit:
        estimatedProfit,

      receivedAmount: 0,

      paymentGateway:
        "Pending",

      shared: false,

      comment:
        "ERP booking created successfully.",

      color:
        getStatusColor(
          formData.tripStatus
        ),
    });

    closeModal();
  };

  const sectionClass =
    "rounded-[30px] border border-white/10 bg-white/[0.03] p-7";

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500 focus:bg-white/[0.06]";

  const labelClass =
    "mb-3 block text-sm font-medium text-zinc-400";

  return (

    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/85 px-6 py-10 backdrop-blur-2xl">

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
            duration: 0.3,
          }}
          className="relative w-full max-w-6xl overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]/95 p-8 backdrop-blur-3xl lg:p-10"
        >

          {/* Glow */}
          <div className="absolute right-[-140px] top-[-140px] h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-[150px]"></div>

          <div className="absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-amber-500/10 blur-[130px]"></div>

          <div className="relative z-10">

            {/* Header */}
            <div className="mb-10">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                ERP Booking Operations

              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">

                Create ERP Booking

              </h2>

              <p className="mt-4 max-w-3xl leading-relaxed text-zinc-500">

                Create bookings, assign vendors and drivers,
                manage operational workflow and generate
                premium ERP-ready booking records.

              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* Customer */}
              <div className={sectionClass}>

                <div className="mb-7 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">

                    <User size={24} />

                  </div>

                  <div>

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                      Customer Information
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Customer Details
                    </h3>

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div>

                    <label className={labelClass}>
                      Customer Name
                    </label>

                    <input
                      type="text"
                      name="customer"
                      placeholder="Enter customer name"
                      value={
                        formData.customer
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label className={labelClass}>
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      placeholder="+91 98XXXXXXXX"
                      value={
                        formData.phone
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className={inputClass}
                    />

                  </div>

                </div>

              </div>

              {/* Trip */}
              <div className={sectionClass}>

                <div className="mb-7 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                    <MapPin size={24} />

                  </div>

                  <div>

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                      Trip Information
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Ride Details
                    </h3>

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div>

                    <label className={labelClass}>
                      Pickup Location
                    </label>

                    <input
                      type="text"
                      name="pickup"
                      placeholder="Pickup city or address"
                      value={
                        formData.pickup
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label className={labelClass}>
                      Drop Location
                    </label>

                    <input
                      type="text"
                      name="drop"
                      placeholder="Destination city or address"
                      value={
                        formData.drop
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label className={labelClass}>
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
                      required
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label className={labelClass}>
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

              {/* Assignment + Finance */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                {/* Assignment */}
                <div className={sectionClass}>

                  <div className="mb-7 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">

                      <Car size={24} />

                    </div>

                    <div>

                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                        Assignment
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Driver & Vendor
                      </h3>

                    </div>

                  </div>

                  <div className="space-y-5">

                    <div>

                      <label className={labelClass}>
                        Driver Name
                      </label>

                      <input
                        type="text"
                        name="driver"
                        placeholder="Assigned driver"
                        value={
                          formData.driver
                        }
                        onChange={
                          handleChange
                        }
                        className={inputClass}
                      />

                    </div>

                    <div>

                      <label className={labelClass}>
                        Vehicle
                      </label>

                      <select
                        name="vehicle"
                        value={
                          formData.vehicle
                        }
                        onChange={
                          handleChange
                        }
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

                    </div>

                    <div>

                      <label className={labelClass}>
                        Vendor
                      </label>

                      <input
                        type="text"
                        name="vendor"
                        placeholder="Vendor company"
                        value={
                          formData.vendor
                        }
                        onChange={
                          handleChange
                        }
                        className={inputClass}
                      />

                    </div>

                  </div>

                </div>

                {/* Finance */}
                <div className={sectionClass}>

                  <div className="mb-7 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">

                      <IndianRupee
                        size={24}
                      />

                    </div>

                    <div>

                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                        ERP Finance
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Financial Management
                      </h3>

                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <input
                      type="number"
                      name="total"
                      placeholder="Revenue"
                      value={formData.total}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      type="number"
                      name="gst"
                      placeholder="GST"
                      value={formData.gst}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      type="number"
                      name="tds"
                      placeholder="TDS"
                      value={formData.tds}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      type="number"
                      name="vendorRate"
                      placeholder="Vendor Rate"
                      value={formData.vendorRate}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <input
                      type="number"
                      name="totalExpenses"
                      placeholder="Total Expenses"
                      value={formData.totalExpenses}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">

                      <p className="text-sm text-emerald-300">
                        Estimated Profit
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">

                        ₹
                        {estimatedProfit.toLocaleString(
                          "en-IN"
                        )}

                      </h3>

                    </div>

                  </div>

                </div>

              </div>

              {/* Status */}
              <div className={sectionClass}>

                <div className="mb-7 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                    <ShieldCheck
                      size={24}
                    />

                  </div>

                  <div>

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                      ERP Workflow
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Status Management
                    </h3>

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <select
                    name="tripStatus"
                    value={
                      formData.tripStatus
                    }
                    onChange={
                      handleChange
                    }
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

                  <select
                    name="paymentStatus"
                    value={
                      formData.paymentStatus
                    }
                    onChange={
                      handleChange
                    }
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

                  <select
                    name="invoiceStatus"
                    value={
                      formData.invoiceStatus
                    }
                    onChange={
                      handleChange
                    }
                    className={inputClass}
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
                    value={
                      formData.bookingStatus
                    }
                    onChange={
                      handleChange
                    }
                    className={inputClass}
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

              {/* Footer */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

                  <Receipt
                    size={18}
                    className="text-yellow-400"
                  />

                  <p className="text-sm text-zinc-400">
                    ERP invoice and booking IDs will be generated automatically.
                  </p>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row">

                  <button
                    type="button"
                    onClick={
                      closeModal
                    }
                    className="rounded-2xl border border-white/10 px-8 py-4 text-white transition-all duration-300 hover:bg-white/[0.05]"
                  >

                    Cancel

                  </button>

                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.18)] transition-all duration-300 hover:scale-[1.01]"
                  >

                    Create ERP Booking

                  </button>

                </div>

              </div>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default BookingModal;