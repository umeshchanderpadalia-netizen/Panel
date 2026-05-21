import {
  useMemo,
  useState,
} from "react";

import {
  Eye,
  Pencil,
  Trash2,
  Search,
  Users,
  Sparkles,
  Wallet,
  Car,
} from "lucide-react";

import VendorDetailsDrawer from "./VendorDetailsDrawer";

import EditVendorModal from "./EditVendorModal";

function VendorsTable({
  vendors,
  setVendors,
}) {

  const [search, setSearch] =
    useState("");

  const [
    selectedVendor,
    setSelectedVendor,
  ] = useState(null);

  const [
    showDrawer,
    setShowDrawer,
  ] = useState(false);

  const [
    showEditModal,
    setShowEditModal,
  ] = useState(false);

  // Search
  const filteredVendors =
    useMemo(() => {

      return vendors.filter(
        (vendor) => {

          const query =
            search.toLowerCase();

          return (

            vendor.company
              .toLowerCase()
              .includes(query) ||

            vendor.owner
              .toLowerCase()
              .includes(query) ||

            vendor.location
              .toLowerCase()
              .includes(query)
          );
        }
      );

    }, [search, vendors]);

  // Delete
  const deleteVendor =
    (id) => {

      const updatedVendors =
        vendors.filter(
          (vendor) =>
            vendor.id !== id
        );

      setVendors(
        updatedVendors
      );
    };

  // Update
  const updateVendor =
    (updatedVendor) => {

      const updatedVendors =
        vendors.map((vendor) =>
          vendor.id ===
          updatedVendor.id
            ? updatedVendor
            : vendor
        );

      setVendors(
        updatedVendors
      );
    };

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[38px] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[240px] h-[240px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 p-6 lg:p-8 border-b border-white/10">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>

            <div className="flex items-center gap-2">

              <Sparkles
                size={14}
                className="text-yellow-400"
              />

              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                Vendor Operations

              </p>

            </div>

            <h2 className="text-3xl font-bold text-white mt-4">

              Vendor Management

            </h2>

            <p className="text-zinc-500 mt-3 max-w-2xl leading-relaxed">

              Manage fleet partners, payment workflow,
              operational analytics and driver allocation.

            </p>

          </div>

          {/* Search */}
          <div className="relative w-full xl:w-[380px]">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search vendors..."
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

        <table className="w-full min-w-[1800px]">

          <thead className="bg-white/[0.03] border-b border-white/10">

            <tr>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Vendor
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Owner
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Phone
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Location
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Drivers
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Active Drivers
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Trips
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Revenue
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Pending
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Payment
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Status
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredVendors.map(
              (
                vendor,
                index
              ) => (

                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  {/* Vendor */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="relative">

                        <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>

                        <img
                          src={
                            vendor.avatar
                          }
                          alt={
                            vendor.company
                          }
                          className="relative w-14 h-14 rounded-2xl object-cover border border-white/10"
                        />

                      </div>

                      <div>

                        <p className="text-white font-semibold">
                          {
                            vendor.company
                          }
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          {
                            vendor.email
                          }
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Owner */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {vendor.owner}
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {vendor.phone}
                  </td>

                  {/* Location */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {vendor.location}
                  </td>

                  {/* Drivers */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-zinc-300">

                      <Users
                        size={16}
                        className="text-cyan-400"
                      />

                      {
                        vendor.totalDrivers
                      }

                    </div>

                  </td>

                  {/* Active */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-emerald-400 font-medium">

                      <Car
                        size={16}
                      />

                      {
                        vendor.activeDrivers
                      }

                    </div>

                  </td>

                  {/* Trips */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      vendor.assignedTrips
                    }
                  </td>

                  {/* Revenue */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-white font-semibold">

                      <Wallet
                        size={16}
                        className="text-yellow-400"
                      />

                      {
                        vendor.monthlyRevenue
                      }

                    </div>

                  </td>

                  {/* Pending */}
                  <td className="px-6 py-5 text-sm text-yellow-400 font-medium">
                    {
                      vendor.pendingPayments
                    }
                  </td>

                  {/* Payment */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${
                        vendor.paymentStatus ===
                        "Paid"

                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

                          : vendor.paymentStatus ===
                            "Pending"

                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"

                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >

                      {
                        vendor.paymentStatus
                      }

                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${vendor.color}`}
                    >

                      {
                        vendor.status
                      }

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button
                        onClick={() => {

                          setSelectedVendor(
                            vendor
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

                          setSelectedVendor(
                            vendor
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
                          deleteVendor(
                            vendor.id
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

        <VendorDetailsDrawer
          vendor={selectedVendor}
          closeDrawer={() =>
            setShowDrawer(false)
          }
        />

      )}

      {/* Edit */}
      {showEditModal && (

        <EditVendorModal
          selectedVendor={
            selectedVendor
          }
          closeModal={() =>
            setShowEditModal(false)
          }
          updateVendor={
            updateVendor
          }
        />

      )}

    </div>
  );
}

export default VendorsTable;