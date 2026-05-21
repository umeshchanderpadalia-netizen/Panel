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
  Sparkles,
  CalendarDays,
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

  const deleteTrip =
    (bookingId) => {

      const updatedTrips =
        trips.filter(
          (trip) =>
            trip.bookingId !==
            bookingId
        );

      setTrips(updatedTrips);
    };

  const updateTrip =
    (updatedTrip) => {

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

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[38px] backdrop-blur-3xl">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-140px] w-[280px] h-[280px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-140px] left-[-140px] w-[280px] h-[280px] bg-amber-500/5 blur-[140px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 p-7 lg:p-8 border-b border-white/10">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

          {/* Left */}
          <div>

            <div className="flex items-center gap-3">

              <Sparkles
                size={15}
                className="text-yellow-400"
              />

              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                ERP Booking Operations

              </p>

            </div>

            <h2 className="text-4xl font-bold text-white mt-5 tracking-tight">

              Booking Management

            </h2>

            <p className="text-zinc-500 mt-5 max-w-3xl leading-relaxed">

              Monitor business operations, trip assignments,
              vendor workflow, invoices, financial performance
              and live transport activities.

            </p>

          </div>

          {/* Search */}
          <div className="relative w-full xl:w-[430px]">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search bookings, vendors, drivers..."
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
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-500/10">

        <table className="w-full min-w-[2100px]">

          <thead className="bg-white/[0.03] border-b border-white/10">

            <tr>

              {[
                "Booking",
                "Customer",
                "Route",
                "Vendor",
                "Driver",
                "Revenue",
                "Expenses",
                "Profit",
                "Invoice",
                "Payment",
                "Trip Status",
                "Actions",
              ].map(
                (
                  heading,
                  index
                ) => (

                  <th
                    key={index}
                    className="text-left px-6 py-5 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 whitespace-nowrap"
                  >

                    {heading}

                  </th>
                )
              )}

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
                  className="group border-b border-white/5 hover:bg-white/[0.025] transition-all duration-300"
                >

                  {/* Booking */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-white font-semibold">

                        {
                          trip.bookingId
                        }

                      </p>

                      <div className="flex items-center gap-2 mt-2">

                        <CalendarDays
                          size={12}
                          className="text-zinc-500"
                        />

                        <p className="text-xs text-zinc-500">

                          {
                            trip.date
                          }

                        </p>

                      </div>

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

                      <p className="text-xs text-zinc-500 mt-2">

                        {
                          trip.phone
                        }

                      </p>

                    </div>

                  </td>

                  {/* Route */}
                  <td className="px-6 py-5">

                    <div>

                      <p className="text-sm text-zinc-200">

                        {
                          trip.pickup
                        }

                      </p>

                      <p className="text-xs text-zinc-500 mt-2">

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

                      <p className="text-xs text-zinc-500 mt-2">

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

                      <p className="text-xs text-zinc-500 mt-2">

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
                        size={15}
                      />

                      ₹{
                        trip.total
                      }

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

                      <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

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
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${
                        trip.paymentStatus ===
                        "Paid"

                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

                          : trip.paymentStatus ===
                            "Partial"

                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"

                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}
                    >

                      {
                        trip.paymentStatus
                      }

                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${trip.color}`}
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

      {/* Edit */}
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