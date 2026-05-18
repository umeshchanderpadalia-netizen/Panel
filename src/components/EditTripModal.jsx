import {
  useState,
} from "react";

import {
  X,
  Save,
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
    <div className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-2xl flex items-center justify-center px-6">

      <div className="relative overflow-hidden w-full max-w-2xl bg-[#090909]/95 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl shadow-[0_0_90px_rgba(0,0,0,0.45)]">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="flex items-start justify-between mb-12">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
                Booking
              </p>

              <h2 className="text-5xl font-bold mt-4 tracking-tight text-white">
                Edit Ride
              </h2>

              <p className="text-zinc-500 mt-4 max-w-lg">
                Update ride details, assigned driver and booking status.
              </p>

            </div>

            <button
              onClick={closeModal}
              className="w-12 h-12 rounded-2xl hover:bg-white/[0.05] hover:border hover:border-yellow-500/20 flex items-center justify-center transition-all duration-300"
            >

              <X
                size={18}
                className="text-zinc-400"
              />

            </button>

          </div>

          {/* Form */}
          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-7"
          >

            {/* Customer */}
            <div>

              <label className="block text-sm text-zinc-400 mb-3">
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
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] transition-all duration-300"
              />

            </div>

            {/* Destination */}
            <div>

              <label className="block text-sm text-zinc-400 mb-3">
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
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] transition-all duration-300"
              />

            </div>

            {/* Driver */}
            <div>

              <label className="block text-sm text-zinc-400 mb-3">
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
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] transition-all duration-300"
              />

            </div>

            {/* Status */}
            <div>

              <label className="block text-sm text-zinc-400 mb-3">
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
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] transition-all duration-300"
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
            <div className="flex gap-4 pt-6">

              <button
                type="button"
                onClick={
                  closeModal
                }
                className="flex-1 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-yellow-500/20 transition-all duration-300 text-white"
              >

                Cancel

              </button>

              <button
                type="submit"
                className="group relative overflow-hidden flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.02] transition-all duration-300 font-semibold text-black shadow-[0_0_25px_rgba(250,204,21,0.18)]"
              >

                {/* Shine */}
                <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

                <span className="relative z-10 flex items-center justify-center gap-2">

                  <Save size={18} />

                  Save Changes

                </span>

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditTripModal;