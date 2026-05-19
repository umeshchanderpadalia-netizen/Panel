import {
  useMemo,
  useState,
} from "react";

import {
  Eye,
  Pencil,
  Trash2,
  Search,
  Star,
} from "lucide-react";

import DriverDetailsDrawer from "./DriverDetailsDrawer";

import EditDriverModal from "./EditDriverModal";

function DriversTable({
  drivers,
  setDrivers,
}) {

  const [search, setSearch] =
    useState("");

  const [
    selectedDriver,
    setSelectedDriver,
  ] = useState(null);

  const [
    showDrawer,
    setShowDrawer,
  ] = useState(false);

  const [
    showEditModal,
    setShowEditModal,
  ] = useState(false);

  // Search Filter
  const filteredDrivers =
    useMemo(() => {

      return drivers.filter(
        (driver) => {

          const query =
            search.toLowerCase();

          return (

            driver.name
              .toLowerCase()
              .includes(query) ||

            driver.vehicle
              .toLowerCase()
              .includes(query) ||

            driver.vendor
              .toLowerCase()
              .includes(query) ||

            driver.location
              .toLowerCase()
              .includes(query)
          );
        }
      );

    }, [search, drivers]);

  // Delete Driver
  const deleteDriver =
    (id) => {

      const updatedDrivers =
        drivers.filter(
          (driver) =>
            driver.id !== id
        );

      setDrivers(
        updatedDrivers
      );
    };

  // Update Driver
  const updateDriver =
    (updatedDriver) => {

      const updatedDrivers =
        drivers.map((driver) =>
          driver.id ===
          updatedDriver.id
            ? updatedDriver
            : driver
        );

      setDrivers(
        updatedDrivers
      );
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

              Driver Operations

            </p>

            <h2 className="text-3xl font-bold text-white mt-4">

              Driver Management

            </h2>

            <p className="text-zinc-500 mt-3 max-w-2xl leading-relaxed">

              Monitor availability, assignments,
              operational workflow and driver performance.

            </p>

          </div>

          {/* Search */}
          <div className="relative w-full xl:w-[360px]">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search drivers..."
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

        <table className="w-full min-w-[1700px]">

          <thead className="bg-white/[0.03] border-b border-white/10">

            <tr>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Driver
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Phone
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Vehicle
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Vehicle No.
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Vendor
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Location
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Assigned Trips
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Completed Trips
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Rating
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Earnings
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Status
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Availability
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredDrivers.map(
              (
                driver,
                index
              ) => (

                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  {/* Driver */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          driver.avatar
                        }
                        alt={
                          driver.name
                        }
                        className="w-14 h-14 rounded-2xl object-cover border border-white/10"
                      />

                      <div>

                        <p className="text-white font-semibold">
                          {
                            driver.name
                          }
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          {
                            driver.email
                          }
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Phone */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {driver.phone}
                  </td>

                  {/* Vehicle */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {driver.vehicle}
                  </td>

                  {/* Vehicle Number */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      driver.vehicleNumber
                    }
                  </td>

                  {/* Vendor */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {driver.vendor}
                  </td>

                  {/* Location */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {driver.location}
                  </td>

                  {/* Assigned */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      driver.assignedTrips
                    }
                  </td>

                  {/* Completed */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      driver.completedTrips
                    }
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-yellow-400">

                      <Star
                        size={16}
                        fill="currentColor"
                      />

                      <span className="text-sm font-medium">
                        {
                          driver.rating
                        }
                      </span>

                    </div>

                  </td>

                  {/* Earnings */}
                  <td className="px-6 py-5 text-sm font-medium text-white">
                    {
                      driver.earnings
                    }
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${driver.color}`}
                    >

                      {
                        driver.status
                      }

                    </span>

                  </td>

                  {/* Availability */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        driver.availability ===
                        "Online"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >

                      {
                        driver.availability
                      }

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button
                        onClick={() => {

                          setSelectedDriver(
                            driver
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

                          setSelectedDriver(
                            driver
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
                          deleteDriver(
                            driver.id
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

        <DriverDetailsDrawer
          driver={selectedDriver}
          closeDrawer={() =>
            setShowDrawer(false)
          }
        />

      )}

      {/* Edit Modal */}
      {showEditModal && (

        <EditDriverModal
          selectedDriver={
            selectedDriver
          }
          closeModal={() =>
            setShowEditModal(false)
          }
          updateDriver={
            updateDriver
          }
        />

      )}

    </div>
  );
}

export default DriversTable;