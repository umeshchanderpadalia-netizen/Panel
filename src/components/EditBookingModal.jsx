import { useState } from "react";

import { motion } from "framer-motion";

function EditBookingModal({
  closeModal,
  selectedTrip,
  updateTrip,
}) {

  const [customer, setCustomer] = useState(
    selectedTrip.customer
  );

  const [destination, setDestination] = useState(
    selectedTrip.destination
  );

  const [driver, setDriver] = useState(
    selectedTrip.driver
  );

  const [status, setStatus] = useState(
    selectedTrip.status
  );

  const handleSubmit = (e) => {

    e.preventDefault();

    let color = "";

    if (status === "Completed") {
      color =
        "text-green-400 bg-green-500/20";
    }

    if (status === "Ongoing") {
      color =
        "text-yellow-400 bg-yellow-500/20";
    }

    if (status === "Cancelled") {
      color =
        "text-red-400 bg-red-500/20";
    }

    updateTrip({
      ...selectedTrip,
      customer,
      destination,
      driver,
      status,
      color,
    });

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-md px-6">

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
        className="relative overflow-hidden w-full max-w-lg bg-[#0b1220]/95 border border-white/10 rounded-[36px] p-8 backdrop-blur-2xl"
      >

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          {/* Heading */}
          <div className="mb-8">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Booking
            </p>

            <h2 className="text-4xl font-bold text-white mt-3 tracking-tight">
              Edit Booking
            </h2>

            <p className="text-slate-400 mt-3">
              Update ride details and booking status.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Customer */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">
                Customer Name
              </label>

              <input
                type="text"
                value={customer}
                onChange={(e) =>
                  setCustomer(
                    e.target.value
                  )
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Destination */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">
                Destination
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) =>
                  setDestination(
                    e.target.value
                  )
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Driver */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">
                Driver Name
              </label>

              <input
                type="text"
                value={driver}
                onChange={(e) =>
                  setDriver(
                    e.target.value
                  )
                }
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Status */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">
                Ride Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
                className="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all duration-300"
              >

                <option value="Ongoing">
                  Ongoing
                </option>

                <option value="Completed">
                  Completed
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>

              </select>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">

              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/10 hover:bg-white/[0.05] transition-all duration-300 rounded-2xl py-4 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-2xl py-4 font-semibold text-white shadow-lg shadow-blue-500/20"
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

export default EditBookingModal;