import {
  useMemo,
  useState,
} from "react";

import {
  Eye,
  Pencil,
  Trash2,
  Search,
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

  // Search Filter
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

  // Delete Vendor
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

  // Update Vendor
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

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[36px] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[240px] h-[240px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 p-6 lg:p-8 border-b border-white/10">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              Vendor Operations

            </p>

            <h2 className="text-3xl font-bold text-white mt-4">

              Vendor Management

            </h2>

            <p className="text-zinc-500 mt-3 max-w-2xl leading-relaxed">

              Manage fleet partners, operational workflow,
              driver allocation and payment activity.

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

        <table className="w-full min-w-[1700px]">

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
                Assigned Trips
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Revenue
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                Pending Payments
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

                      <img
                        src={
                          vendor.avatar
                        }
                        alt={
                          vendor.company
                        }
                        className="w-14 h-14 rounded-2xl object-cover border border-white/10"
                      />

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
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      vendor.totalDrivers
                    }
                  </td>

                  {/* Active Drivers */}
                  <td className="px-6 py-5 text-sm text-emerald-400">
                    {
                      vendor.activeDrivers
                    }
                  </td>

                  {/* Assigned Trips */}
                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {
                      vendor.assignedTrips
                    }
                  </td>

                  {/* Revenue */}
                  <td className="px-6 py-5 text-sm font-medium text-white">
                    {
                      vendor.monthlyRevenue
                    }
                  </td>

                  {/* Pending */}
                  <td className="px-6 py-5 text-sm text-yellow-400">
                    {
                      vendor.pendingPayments
                    }
                  </td>

                  {/* Payment Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        vendor.paymentStatus ===
                        "Paid"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : vendor.paymentStatus ===
                            "Pending"
                          ? "bg-yellow-500/15 text-yellow-400"
                          : "bg-red-500/15 text-red-400"
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
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${vendor.color}`}
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

      {/* Edit Modal */}
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