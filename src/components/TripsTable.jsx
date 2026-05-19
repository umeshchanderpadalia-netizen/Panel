import {
  useMemo,
  useState,
} from "react";

import {
  Eye,
  Pencil,
  Trash2,
  Search,
  IndianRupee,
  Receipt,
} from "lucide-react";

import EditBookingModal from "./EditBookingModal";
import BookingDetailsDrawer from "./BookingDetailsDrawer";

function TripsTable({
  trips,
  setTrips,
}) {

  const [search, setSearch] =
    useState("");

  const [
    selectedTrip,
    setSelectedTrip,
  ] = useState(null);

  const [
    showEditModal,
    setShowEditModal,
  ] = useState(false);

  const [
    showDrawer,
    setShowDrawer,
  ] = useState(false);

  // Search Filter
  const filteredTrips =
    useMemo(() => {

      return trips.filter(
        (trip) => {

          const query =
            search.toLowerCase();

          return (

            trip.bookingId
              ?.toLowerCase()
              .includes(query) ||

            trip.invoiceNo
              ?.toLowerCase()
              .includes(query) ||

            trip.customer
              ?.toLowerCase()
              .includes(query) ||

            trip.driver
              ?.toLowerCase()
              .includes(query) ||

            trip.vendor
              ?.toLowerCase()
              .includes(query) ||

            trip.pickup
              ?.toLowerCase()
              .includes(query) ||

            trip.drop
              ?.toLowerCase()
              .includes(query)
          );
        }
      );

    }, [search, trips]);

  // Delete Trip
  const deleteTrip = (
    bookingId
  ) => {

    const updatedTrips =
      trips.filter(
        (trip) =>
          trip.bookingId !==
          bookingId
      );

    setTrips(updatedTrips);
  };

  // Update Trip
  const updateTrip = (
    updatedTrip
  ) => {

    const updatedTrips =
      trips.map((trip) =>
        trip.bookingId ===
        updatedTrip.bookingId
          ? updatedTrip
          : trip
      );

    setTrips(updatedTrips);
  };

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[36px] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[240px] h-[240px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 p-6 lg:p-8 border-b border-white/10">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Booking Operations

            </p>

            <h2 className="text-3xl font-bold text-white mt-4">

              Booking Management

            </h2>

            <p className="text-zinc-500 mt-3 max-w-2xl leading-relaxed">

              Monitor operations, vendor assignments,
              payment workflow, invoices, business revenue,
              profitability and transport ERP activities.

            </p>

          </div>

          {/* Search */}
          <div className="relative w-full xl:w-[420px]">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search bookings, invoices, vendors..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-yellow-500/40 transition-all duration-300"
            />

          </div>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[2100px]">

          <thead className="bg-white/[0.03] border-b border-white/10">

            <tr>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Booking

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Customer

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Route

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Vendor

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Driver

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Revenue

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Expenses

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Profit

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Invoice

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Payment

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Trip Status

              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {filteredTrips.map(
              (
                trip,
                index
              ) => (

                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  {/* Booking */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-white font-semibold">

                        {
                          trip.bookingId
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        {
                          trip.invoiceNo
                        }

                      </p>

                    </div>

                  </td>

                  {/* Customer */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-white font-medium">

                        {
                          trip.customer
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        {
                          trip.phone
                        }

                      </p>

                    </div>

                  </td>

                  {/* Route */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-sm text-zinc-300">

                        {
                          trip.pickup
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        ↓ {
                          trip.drop
                        }

                      </p>

                    </div>

                  </td>

                  {/* Vendor */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-sm text-white">

                        {
                          trip.vendor
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        Vendor Rate:
                        {" "}
                        ₹{
                          trip.vendorRate
                        }

                      </p>

                    </div>

                  </td>

                  {/* Driver */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-sm text-white">

                        {
                          trip.driver
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        {
                          trip.vehicle
                        }

                      </p>

                    </div>

                  </td>

                  {/* Revenue */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">

                      <IndianRupee
                        size={16}
                      />

                      ₹{trip.total}

                    </div>

                  </td>

                  {/* Expenses */}
                  <td className="px-6 py-5">

                    <p className="text-red-400 font-semibold">

                      ₹{
                        trip.totalExpenses
                      }

                    </p>

                  </td>

                  {/* Profit */}
                  <td className="px-6 py-5">

                    <p className="text-emerald-400 font-semibold">

                      ₹{
                        trip.profit
                      }

                    </p>

                  </td>

                  {/* Invoice */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                        <Receipt
                          size={18}
                        />

                      </div>

                      <div>

                        <p className="text-sm text-white">

                          {
                            trip.invoiceStatus
                          }

                        </p>

                        <p className="text-xs text-zinc-500 mt-1">

                          {
                            trip.invoiceNo
                          }

                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Payment */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        trip.paymentStatus ===
                        "Paid"
                          ? "bg-emerald-500/15 text-emerald-400"

                          : trip.paymentStatus ===
                            "Partial"
                          ? "bg-blue-500/15 text-blue-400"

                          : "bg-yellow-500/15 text-yellow-400"
                      }`}
                    >

                      {
                        trip.paymentStatus
                      }

                    </span>

                  </td>

                  {/* Trip Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${trip.color}`}
                    >

                      {
                        trip.tripStatus
                      }

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button
                        onClick={() => {

                          setSelectedTrip(
                            trip
                          );

                          setShowDrawer(
                            true
                          );
                        }}
                        className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 hover:bg-yellow-500/10 flex items-center justify-center transition-all duration-300"
                      >

                        <Eye
                          size={18}
                          className="text-zinc-300"
                        />

                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => {

                          setSelectedTrip(
                            trip
                          );

                          setShowEditModal(
                            true
                          );
                        }}
                        className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/20 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300"
                      >

                        <Pencil
                          size={18}
                          className="text-zinc-300"
                        />

                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          deleteTrip(
                            trip.bookingId
                          )
                        }
                        className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/20 hover:bg-red-500/10 flex items-center justify-center transition-all duration-300"
                      >

                        <Trash2
                          size={18}
                          className="text-zinc-300"
                        />

                      </button>

                    </div>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* Drawer */}
      {showDrawer && (

        <BookingDetailsDrawer
          trip={selectedTrip}
          closeDrawer={() =>
            setShowDrawer(false)
          }
        />

      )}

      {/* Edit Modal */}
      {showEditModal && (

        <EditBookingModal
          selectedTrip={
            selectedTrip
          }
          closeModal={() =>
            setShowEditModal(false)
          }
          updateTrip={
            updateTrip
          }
        />

      )}

    </div>
  );
}

export default TripsTable;