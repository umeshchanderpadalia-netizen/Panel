import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";

import VendorsTable from "../components/VendorsTable";

import VendorFilters from "../components/VendorFilters";

import PageTransition from "../components/PageTransition";

import LoadingScreen from "../components/LoadingScreen";

import EmptyState from "../components/EmptyState";

import ErrorState from "../components/ErrorState";

import useVendors from "../hooks/useVendors";

import {
  Building2,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

function Vendors() {

  // Vendor Data
  const {
    vendors,
    setVendors,
    loading,
    error,
    retry,
  } = useVendors();

  // Filter State
  const [
    activeFilter,
    setActiveFilter,
  ] = useState("All");

  // Filter Vendors
  const filteredVendors =
    useMemo(() => {

      if (
        activeFilter === "All"
      ) {

        return vendors;

      }

      return vendors.filter(
        (vendor) =>
          vendor.status ===
          activeFilter
      );

    }, [
      activeFilter,
      vendors,
    ]);

  // Metrics
  const vendorMetrics =
    useMemo(() => {

      const totalVendors =
        vendors.length;

      const activeVendors =
        vendors.filter(
          (vendor) =>
            vendor.status ===
            "Active"
        ).length;

      const busyVendors =
        vendors.filter(
          (vendor) =>
            vendor.status ===
            "Busy"
        ).length;

      const inactiveVendors =
        vendors.filter(
          (vendor) =>
            vendor.status ===
            "Inactive"
        ).length;

      return {
        totalVendors,
        activeVendors,
        busyVendors,
        inactiveVendors,
      };

    }, [vendors]);

  return (

    <MainLayout>

      <PageTransition>

        <div className="space-y-8">

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

              {/* Left Content */}
              <div>

                <SectionHeader
                  label="ERP Vendors"
                  title="Vendor Operations Center"
                  description="Manage vendor partnerships, fleet allocation, settlements, booking workflow and operational performance."
                />

              </div>

              {/* Filters */}
              <VendorFilters
                activeFilter={
                  activeFilter
                }
                setActiveFilter={
                  setActiveFilter
                }
              />

            </div>

          </section>

          {/* Vendor Metrics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Total Vendors */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-400">

                    Total Vendors

                  </p>

                  <Building2
                    size={18}
                    className="text-yellow-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-white mt-5">

                  {
                    vendorMetrics.totalVendors
                  }

                </h2>

              </div>

            </div>

            {/* Active Vendors */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-emerald-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-400">

                    Active Vendors

                  </p>

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-emerald-400 mt-5">

                  {
                    vendorMetrics.activeVendors
                  }

                </h2>

              </div>

            </div>

            {/* Busy Vendors */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-400">

                    Busy Vendors

                  </p>

                  <Clock3
                    size={18}
                    className="text-yellow-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-yellow-400 mt-5">

                  {
                    vendorMetrics.busyVendors
                  }

                </h2>

              </div>

            </div>

            {/* Inactive Vendors */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-red-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-400">

                    Inactive Vendors

                  </p>

                  <XCircle
                    size={18}
                    className="text-red-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-red-400 mt-5">

                  {
                    vendorMetrics.inactiveVendors
                  }

                </h2>

              </div>

            </div>

          </section>

          {/* Vendor Content */}
          <section>

            {loading ? (

              <LoadingScreen
                title="Loading Vendor Operations"
                description="Preparing vendor partnerships, fleet operations and settlement workflows..."
              />

            ) : error ? (

              <ErrorState
                message={error}
                retry={retry}
              />

            ) : !vendors ||
              vendors.length === 0 ? (

              <EmptyState
                title="No Vendors Available"
                description="No vendor operational data is currently available in the platform."
              />

            ) : (

              <VendorsTable
                vendors={
                  filteredVendors
                }
                setVendors={
                  setVendors
                }
              />

            )}

          </section>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Vendors;