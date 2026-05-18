import { useState } from "react";

import { motion } from "framer-motion";

function BookingModal({
  closeModal,
  addTrip,
}) {

  const [customer, setCustomer] = useState("");

  const [destination, setDestination] = useState("");

  const [driver, setDriver] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !customer ||
      !destination ||
      !driver
    )
      return;

    addTrip({
      customer,
      destination,
      driver,
      status: "Ongoing",
      color:
        "text-yellow-400 bg-yellow-500/20",
    });

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative overflow-hidden w-full max-w-lg bg-[#0a0a0a]/95 border border-white/10 rounded-[36px] p-8 backdrop-blur-2xl"
      >

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          {/* Heading */}
          <div className="mb-8">

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
              Booking
            </p>

            <h2 className="text-4xl font-bold text-white mt-3 tracking-tight">
              Add Booking
            </h2>

            <p className="text-zinc-400 mt-3">
              Create and assign a new ride booking.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Customer */}
            <div>

              <label className="text-sm text-zinc-400 block mb-3">
                Customer Name
              </label>

              <input
                type="text"
                placeholder="Enter customer name"
                value={customer}
                onChange={(e) =>
                  setCustomer(e.target.value)
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
              />

            </div>

            {/* Destination */}
            <div>

              <label className="text-sm text-zinc-400 block mb-3">
                Destination
              </label>

              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) =>
                  setDestination(
                    e.target.value
                  )
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
              />

            </div>

            {/* Driver */}
            <div>

              <label className="text-sm text-zinc-400 block mb-3">
                Driver Name
              </label>

              <input
                type="text"
                placeholder="Assign driver"
                value={driver}
                onChange={(e) =>
                  setDriver(e.target.value)
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 transition-all duration-300"
              />

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 hover:bg-white/[0.05] hover:border-yellow-500/20 transition-all duration-300 rounded-2xl py-4 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.02] transition-all duration-300 rounded-2xl py-4 font-semibold text-black shadow-[0_0_25px_rgba(250,204,21,0.18)]"
              >

                Add Booking

              </button>

            </div>

          </form>

        </div>

      </motion.div>

    </div>
  );
}

export default BookingModal;