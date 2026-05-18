import {
  useMemo,
  useState,
} from "react";

import {
  Pencil,
  Trash2,
  Search,
  Download,
  MapPin,
  Car,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import EditTripModal from "./EditTripModal";
import DeleteModal from "./DeleteModal";
import EmptyState from "./EmptyState";
import BookingDetailsDrawer from "./BookingDetailsDrawer";

function TripsTable({
  trips,
  setTrips,
}) {

  const [search, setSearch] =
    useState("");

  const [selectedTrip, setSelectedTrip] =
    useState(null);

  const [editModal, setEditModal] =
    useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  // Filter Trips
  const filteredTrips =
    useMemo(() => {

      return trips.filter(
        (trip) =>
          trip.customer
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          trip.destination
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          trip.driver
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [search, trips]);

  // Open Drawer
  const openDrawer = (
    trip
  ) => {

    setSelectedTrip(trip);

    setDrawerOpen(true);
  };

  // Open Edit
  const handleEdit = (
    trip
  ) => {

    setSelectedTrip(trip);

    setEditModal(true);
  };

  // Save Edit
  const saveTrip = (
    updatedTrip
  ) => {

    const updatedTrips =
      trips.map((trip) =>
        trip.id ===
        updatedTrip.id
          ? updatedTrip
          : trip
      );

    setTrips(updatedTrips);
  };

  // Open Delete
  const handleDelete = (
    trip
  ) => {

    setSelectedTrip(trip);

    setDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete =
    () => {

      const updatedTrips =
        trips.filter(
          (trip) =>
            trip.id !==
            selectedTrip.id
        );

      setTrips(updatedTrips);

      setDeleteModal(false);
    };

  return (
    <>
      {/* Edit Modal */}
      {editModal && (
        <EditTripModal
          trip={selectedTrip}
          closeModal={() =>
            setEditModal(false)
          }
          saveTrip={saveTrip}
        />
      )}

      {/* Delete Modal */}
      {deleteModal && (
        <DeleteModal
          closeModal={() =>
            setDeleteModal(false)
          }
          confirmDelete={
            confirmDelete
          }
        />
      )}

      {/* Booking Drawer */}
      {drawerOpen && (
        <BookingDetailsDrawer
          trip={selectedTrip}
          closeDrawer={() =>
            setDrawerOpen(false)
          }
        />
      )}

      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] p-7 lg:p-9 backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-10">

            {/* Left */}
            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
                Bookings
              </p>

              <h2 className="text-4xl font-bold mt-3 tracking-tight text-white">
                Ride Management
              </h2>

              <p className="text-zinc-500 mt-3 max-w-xl">
                Manage customer rides, drivers and operational booking activity.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Search */}
              <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 w-full sm:w-[320px] hover:border-yellow-500/20 transition-all duration-300">

                <Search
                  size={18}
                  className="text-yellow-400"
                />

                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none w-full text-sm text-white placeholder:text-zinc-500"
                />

              </div>

              {/* Export */}
              <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium">

                <Download size={18} />

                Export

              </button>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

            {/* Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">
                    Total Bookings
                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">
                    {trips.length}
                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <Car size={24} />

                </div>

              </div>

            </div>

            {/* Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">
                    Active Trips
                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">
                    {
                      trips.filter(
                        (trip) =>
                          trip.status ===
                          "Ongoing"
                      ).length
                    }
                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <MapPin size={24} />

                </div>

              </div>

            </div>

            {/* Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">
                    Search Results
                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">
                    {filteredTrips.length}
                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

                  <Search size={24} />

                </div>

              </div>

            </div>

          </div>

          {/* Empty State */}
          {filteredTrips.length === 0 ? (

            <EmptyState
              title="No bookings found"
              description="Try adjusting your search or filters to find matching booking records."
            />

          ) : (

            /* Table */
            <div className="overflow-x-auto rounded-[28px] border border-white/5">

              <table className="w-full min-w-[900px]">

                <thead className="bg-white/[0.03] sticky top-0">

                  <tr className="text-left border-b border-white/5">

                    <th className="px-6 py-5 text-zinc-500 font-medium">
                      Customer
                    </th>

                    <th className="px-6 py-5 text-zinc-500 font-medium">
                      Destination
                    </th>

                    <th className="px-6 py-5 text-zinc-500 font-medium">
                      Driver
                    </th>

                    <th className="px-6 py-5 text-zinc-500 font-medium">
                      Status
                    </th>

                    <th className="px-6 py-5 text-zinc-500 font-medium text-right">
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
                        key={
                          trip.id ||
                          index
                        }
                        onClick={() =>
                          openDrawer(trip)
                        }
                        className="border-b border-white/5 hover:bg-yellow-500/[0.03] transition-all duration-300 cursor-pointer"
                      >

                        {/* Customer */}
                        <td className="px-6 py-6">

                          <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold">

                              {
                                trip.customer?.charAt(
                                  0
                                )
                              }

                            </div>

                            <div>

                              <p className="font-semibold text-white">
                                {
                                  trip.customer
                                }
                              </p>

                              <p className="text-sm text-zinc-500 mt-1">
                                Booking ID #
                                {index + 1001}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* Destination */}
                        <td className="px-6 py-6 text-zinc-300">
                          {
                            trip.destination
                          }
                        </td>

                        {/* Driver */}
                        <td className="px-6 py-6 text-zinc-300">
                          {trip.driver}
                        </td>

                        {/* Status */}
                        <td className="px-6 py-6">

                          <StatusBadge
                            status={
                              trip.status
                            }
                          />

                        </td>

                        {/* Actions */}
                        <td className="px-6 py-6">

                          <div className="flex items-center justify-end gap-3">

                            {/* Edit */}
                            <button
                              onClick={(e) => {

                                e.stopPropagation();

                                handleEdit(
                                  trip
                                );
                              }}
                              className="w-11 h-11 rounded-2xl bg-yellow-500/10 text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.08)]"
                            >

                              <Pencil
                                size={18}
                              />

                            </button>

                            {/* Delete */}
                            <button
                              onClick={(e) => {

                                e.stopPropagation();

                                handleDelete(
                                  trip
                                );
                              }}
                              className="w-11 h-11 rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                            >

                              <Trash2
                                size={18}
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

          )}

        </div>

      </div>

    </>
  );
}

export default TripsTable;