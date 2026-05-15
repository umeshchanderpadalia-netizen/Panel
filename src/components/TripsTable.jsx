import {
  useMemo,
  useState,
} from "react";

import {
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import EditTripModal from "./EditTripModal";
import DeleteModal from "./DeleteModal";

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

      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 lg:p-9 backdrop-blur-xl">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Trips
              </p>

              <h2 className="text-4xl font-bold mt-3 tracking-tight text-white">
                Recent Bookings
              </h2>

            </div>

            {/* Search */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 w-full max-w-md">

              <Search
                size={18}
                className="text-slate-500"
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
                className="bg-transparent outline-none w-full text-sm text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px]">

              <thead>

                <tr className="text-left border-b border-white/10">

                  <th className="pb-5 text-slate-500 font-medium">
                    Customer
                  </th>

                  <th className="pb-5 text-slate-500 font-medium">
                    Destination
                  </th>

                  <th className="pb-5 text-slate-500 font-medium">
                    Driver
                  </th>

                  <th className="pb-5 text-slate-500 font-medium">
                    Status
                  </th>

                  <th className="pb-5 text-slate-500 font-medium text-right">
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
                      className="border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300"
                    >

                      <td className="py-6 font-medium text-white">
                        {
                          trip.customer
                        }
                      </td>

                      <td className="py-6 text-slate-400">
                        {
                          trip.destination
                        }
                      </td>

                      <td className="py-6 text-slate-400">
                        {trip.driver}
                      </td>

                      <td className="py-6">

                        <StatusBadge
                          status={
                            trip.status
                          }
                        />

                      </td>

                      {/* Actions */}
                      <td className="py-6">

                        <div className="flex items-center justify-end gap-3">

                          {/* Edit */}
                          <button
                            onClick={() =>
                              handleEdit(
                                trip
                              )
                            }
                            className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                          >

                            <Pencil
                              size={18}
                            />

                          </button>

                          {/* Delete */}
                          <button
                            onClick={() =>
                              handleDelete(
                                trip
                              )
                            }
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

        </div>

      </div>
    </>
  );
}

export default TripsTable;