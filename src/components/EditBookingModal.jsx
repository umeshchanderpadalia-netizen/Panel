import { useState } from "react";

import { motion } from "framer-motion";

import calculateBookingTotals from "../utils/calculateBookingTotals";

function EditBookingModal({
  selectedTrip,
  closeModal,
  updateTrip,
}) {

  const [
    formData,
    setFormData,
  ] = useState({
    ...selectedTrip,
  });

  const handleChange =
    (e) => {

      const {
        name,
        value,
      } = e.target;

      setFormData(
        (prev) => ({

          ...prev,

          [name]:
            value,
        })
      );
    };

  const totals =
    calculateBookingTotals(
      formData
    );

  const handleSubmit =
    (e) => {

      e.preventDefault();

      updateTrip({

        ...formData,

        ...totals,

      });

      closeModal();
    };

  return (

    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6">

      <motion.div
        initial={{
          opacity:0,
          scale:0.95
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        className="w-full max-w-3xl rounded-[35px] border border-white/10 bg-[#0a0a0a] p-8"
      >

        <h2 className="text-3xl font-bold text-white mb-8">

          Edit Booking

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-5">

            <input
              name="customer"
              value={formData.customer || ""}
              onChange={handleChange}
              placeholder="Customer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

            <input
              name="pickup"
              value={formData.pickup || ""}
              onChange={handleChange}
              placeholder="Pickup"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

            <input
              name="drop"
              value={formData.drop || ""}
              onChange={handleChange}
              placeholder="Drop"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

            <input
              name="baseAmount"
              value={formData.baseAmount || ""}
              onChange={handleChange}
              placeholder="Base Amount"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

            <input
              name="vendorRate"
              value={formData.vendorRate || ""}
              onChange={handleChange}
              placeholder="Vendor Rate"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white"
            />

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white/[0.03] p-5 text-white">

              Total ₹{totals.total}
            </div>

            <div className="rounded-2xl bg-white/[0.03] p-5 text-white">

              Expenses ₹{totals.totalExpenses}
            </div>

            <div className="rounded-2xl bg-white/[0.03] p-5 text-white">

              Balance ₹{totals.balance}
            </div>

          </div>

          <div className="flex gap-4">

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-2xl border border-white/10 py-4 text-white"
            >

              Cancel

            </button>

            <button
              type="submit"
              className="flex-1 rounded-2xl bg-yellow-400 py-4 font-bold text-black"
            >

              Save Changes

            </button>

          </div>

        </form>

      </motion.div>

    </div>
  );
}

export default EditBookingModal;