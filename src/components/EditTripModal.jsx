import {
  useState,
} from "react";

import {
  X,
} from "lucide-react";

function EditTripModal({
  closeModal,
  trip,
  saveTrip,
}) {

  const [formData, setFormData] =
    useState({
      customer:
        trip.customer || "",
      destination:
        trip.destination || "",
      driver:
        trip.driver || "",
      status:
        trip.status || "Ongoing",
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

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    saveTrip({
      ...trip,
      ...formData,
    });

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center px-6">

      <div className="relative overflow-hidden w-full max-w-2xl bg-[#0b1220]/95 border border-white/10 rounded-[36px] p-8 backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Booking
              </p>

              <h2 className="text-4xl font-bold mt-3 tracking-tight">
                Edit Ride
              </h2>

            </div>

            <button
              onClick={closeModal}
              className="w-12 h-12 rounded-2xl hover:bg-white/[0.05] flex items-center justify-center transition"
            >

              <X size={18} />

            </button>

          </div>

          {/* Form */}
          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-6"
          >

            {/* Customer */}
            <div>

              <label className="block text-sm text-slate-400 mb-3">
                Customer Name
              </label>

              <input
                type="text"
                name="customer"
                value={
                  formData.customer
                }
                onChange={
                  handleChange
                }
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Destination */}
            <div>

              <label className="block text-sm text-slate-400 mb-3">
                Destination
              </label>

              <input
                type="text"
                name="destination"
                value={
                  formData.destination
                }
                onChange={
                  handleChange
                }
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Driver */}
            <div>

              <label className="block text-sm text-slate-400 mb-3">
                Driver
              </label>

              <input
                type="text"
                name="driver"
                value={
                  formData.driver
                }
                onChange={
                  handleChange
                }
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* Status */}
            <div>

              <label className="block text-sm text-slate-400 mb-3">
                Status
              </label>

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 outline-none focus:border-blue-500 transition-all duration-300"
              >

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

            {/* Actions */}
            <div className="flex gap-4 pt-4">

              <button
                type="button"
                onClick={
                  closeModal
                }
                className="flex-1 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-all duration-300"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="flex-1 px-6 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-semibold"
              >

                Save Changes

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditTripModal;