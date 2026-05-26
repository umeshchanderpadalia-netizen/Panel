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

  // UPDATED HANDLE SUBMIT
  const handleSubmit = async (
    event
  ) => {

    event.preventDefault();

    try {

      const bookingId =
        `BK-${Date.now()}`;

      const invoiceNo =
        `INV-${Date.now()}`;

      const bookingData = {

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
      };

      const response =
        await fetch(
          "http://localhost:5000/api/bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              bookingData
            ),
          }
        );

      const data =
        await response.json();

      addTrip(data.booking);

      closeModal();

    } catch (error) {

      console.log(
        "Failed to create booking",
        error
      );
    }
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

          <div className="relative z-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              <div className={sectionClass}>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

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
                    required
                    className={inputClass}
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
                    required
                    className={inputClass}
                  />

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
                    required
                    className={inputClass}
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
                    required
                    className={inputClass}
                  />

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
                    name="totalExpenses"
                    placeholder="Expenses"
                    value={formData.totalExpenses}
                    onChange={handleChange}
                    className={inputClass}
                  />

                </div>

              </div>

              <div className="flex gap-4">

                <button
                  type="button"
                  onClick={
                    closeModal
                  }
                  className="rounded-2xl border border-white/10 px-8 py-4 text-white"
                >

                  Cancel

                </button>

                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-black"
                >

                  Create ERP Booking

                </button>

              </div>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default BookingModal;