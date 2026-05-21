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
  Users,
  Activity,
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

  // =========================
  // Search Filter
  // =========================
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

  // =========================
  // Stats
  // =========================
  const onlineDrivers =
    drivers.filter(
      (driver) =>
        driver.availability ===
        "Online"
    ).length;

  const activeTrips =
    drivers.reduce(
      (
        total,
        driver
      ) =>
        total +
        driver.assignedTrips,
      0
    );

  // =========================
  // Delete Driver
  // =========================
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

  // =========================
  // Update Driver
  // =========================
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

    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-140px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-[140px]"></div>

      <div className="absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-amber-500/[0.05] blur-[140px]"></div>

      {/* Header */}
      <div className="relative z-10 border-b border-white/10 p-6 lg:p-8">

        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

          {/* Left */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

              Driver Operations

            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">

              Driver Management

            </h2>

            <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">

              Monitor driver availability, assignments,
              fleet workflow and operational performance.

            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 xl:items-end">

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
                className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-14 pr-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30 focus:bg-white/[0.03]"
              />

            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3">

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-4 py-3">

                <Users
                  size={16}
                  className="text-emerald-400"
                />

                <div>

                  <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400">

                    Online

                  </p>

                  <h4 className="text-sm font-semibold text-white">

                    {
                      onlineDrivers
                    }{" "}
                    Drivers

                  </h4>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/10 bg-yellow-500/10 px-4 py-3">

                <Activity
                  size={16}
                  className="text-yellow-400"
                />

                <div>

                  <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-400">

                    Active

                  </p>

                  <h4 className="text-sm font-semibold text-white">

                    {
                      activeTrips
                    }{" "}
                    Trips

                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[1700px]">

          <thead className="border-b border-white/10 bg-white/[0.03]">

            <tr>

              {[
                "Driver",
                "Phone",
                "Vehicle",
                "Vehicle No.",
                "Vendor",
                "Location",
                "Assigned Trips",
                "Completed Trips",
                "Rating",
                "Earnings",
                "Status",
                "Availability",
                "Actions",
              ].map(
                (
                  heading,
                  index
                ) => (

                  <th
                    key={index}
                    className="px-6 py-5 text-left text-sm font-semibold text-zinc-400"
                  >

                    {heading}

                  </th>
                )
              )}

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
                  className="group border-b border-white/[0.05] transition-all duration-300 hover:bg-white/[0.02]"
                >

                  {/* Driver */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="relative">

                        <img
                          src={
                            driver.avatar
                          }
                          alt={
                            driver.name
                          }
                          className="h-14 w-14 rounded-2xl border border-white/10 object-cover"
                        />

                        <div
                          className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#090909] ${
                            driver.availability ===
                            "Online"
                              ? "bg-emerald-400"
                              : "bg-red-400"
                          }`}
                        ></div>

                      </div>

                      <div>

                        <p className="font-semibold text-white">

                          {
                            driver.name
                          }

                        </p>

                        <p className="mt-1 text-xs text-zinc-500">

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
                  <td className="px-6 py-5">

                    <div className="inline-flex rounded-xl border border-yellow-500/10 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">

                      {
                        driver.assignedTrips
                      }

                    </div>

                  </td>

                  {/* Completed */}
                  <td className="px-6 py-5">

                    <div className="inline-flex rounded-xl border border-emerald-500/10 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">

                      {
                        driver.completedTrips
                      }

                    </div>

                  </td>

                  {/* Rating */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-yellow-400">

                      <Star
                        size={16}
                        fill="currentColor"
                      />

                      <span className="text-sm font-semibold">

                        {
                          driver.rating
                        }

                      </span>

                    </div>

                  </td>

                  {/* Earnings */}
                  <td className="px-6 py-5 text-sm font-semibold text-white">

                    {
                      driver.earnings
                    }

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${driver.color}`}
                    >

                      {
                        driver.status
                      }

                    </span>

                  </td>

                  {/* Availability */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${
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
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/10"
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
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/10"
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
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/10"
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

      {/* Empty State */}
      {filteredDrivers.length ===
        0 && (

        <div className="flex flex-col items-center justify-center px-6 py-24 text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-[28px] border border-yellow-500/10 bg-yellow-500/10">

            <Search
              size={28}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">

            No Drivers Found

          </h3>

          <p className="mt-3 max-w-md text-zinc-500">

            Try searching with a different driver,
            vehicle, vendor or location keyword.

          </p>

        </div>

      )}

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