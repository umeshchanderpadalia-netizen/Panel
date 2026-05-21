import { useMemo, useState } from "react";

import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";
import DriversTable from "../components/DriversTable";
import DriverFilters from "../components/DriverFilters";
import DriverActivity from "../components/DriverActivity";
import PageTransition from "../components/PageTransition";
import LoadingScreen from "../components/LoadingScreen";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import FloatingActionButton from "../components/FloatingActionButton";
import NotificationToast from "../components/NotificationToast";

import useDrivers from "../hooks/useDrivers";
import useApp from "../hooks/useApp";

import {
  IndianRupee,
  TrendingUp,
  Car,
  Users,
  Activity,
  ShieldCheck,
} from "lucide-react";

function Drivers() {

  // Driver Data
  const {
    drivers,
    setDrivers,
    loading,
    error,
    retry,
  } = useDrivers();

  // Trip Data
  const {
    trips,
    notifications,
  } = useApp();

  // Filter State
  const [
    activeFilter,
    setActiveFilter,
  ] = useState("All");

  // Filter Drivers
  const filteredDrivers =
    useMemo(() => {

      if (
        activeFilter === "All"
      ) {

        return drivers;

      }

      return drivers.filter(
        (driver) =>
          driver.status ===
          activeFilter
      );

    }, [
      activeFilter,
      drivers,
    ]);

  // Driver Metrics
  const driverMetrics =
    useMemo(() => {

      const totalDrivers =
        drivers.length;

      const availableDrivers =
        drivers.filter(
          (driver) =>
            driver.status ===
            "Available"
        ).length;

      const onTripDrivers =
        drivers.filter(
          (driver) =>
            driver.status ===
            "On Trip"
        ).length;

      const offlineDrivers =
        drivers.filter(
          (driver) =>
            driver.status ===
            "Offline"
        ).length;

      const completedTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Completed"
        ).length;

      const totalProfit =
        trips.reduce(
          (
            total,
            trip
          ) =>
            total +
            Number(
              trip.profit || 0
            ),
          0
        );

      const averageDriverProfit =
        totalDrivers > 0
          ? Math.round(
              totalProfit /
                totalDrivers
            )
          : 0;

      const activeDrivers =
        availableDrivers +
        onTripDrivers;

      const utilizationRate =
        totalDrivers > 0
          ? Math.round(
              (onTripDrivers /
                totalDrivers) *
                100
            )
          : 0;

      return {
        totalDrivers,
        availableDrivers,
        onTripDrivers,
        offlineDrivers,
        completedTrips,
        averageDriverProfit,
        activeDrivers,
        utilizationRate,
      };

    }, [
      drivers,
      trips,
    ]);

  // Loading State
  if (loading) {

    return (

      <MainLayout>

        <PageTransition>

          <LoadingScreen
            title="Loading ERP Driver Operations"
            description="Preparing fleet analytics, assignment workflow and driver ERP activity..."
          />

        </PageTransition>

      </MainLayout>
    );
  }

  // Error State
  if (error) {

    return (

      <MainLayout>

        <PageTransition>

          <ErrorState
            message={error}
            retry={retry}
          />

        </PageTransition>

      </MainLayout>
    );
  }

  // Empty State
  if (
    !drivers ||
    drivers.length === 0
  ) {

    return (

      <MainLayout>

        <PageTransition>

          <EmptyState
            title="No Drivers Available"
            description="No ERP driver operations data is currently available in the system."
          />

        </PageTransition>

      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <PageTransition>

        {/* Notifications */}
        <NotificationToast
          notifications={
            notifications
          }
        />

        {/* Floating Action */}
        <FloatingActionButton />

        <div className="space-y-8">

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute top-[-140px] right-[-140px] w-[280px] h-[280px] bg-yellow-400/10 blur-[130px] rounded-full"></div>

            <div className="absolute bottom-[-140px] left-[-140px] w-[280px] h-[280px] bg-amber-500/5 blur-[130px] rounded-full"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.05),transparent_45%)]"></div>

            <div className="relative z-10 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-10">

              {/* Left */}
              <div className="max-w-3xl">

                <SectionHeader
                  label="ERP Driver Operations"
                  title="Fleet Command Center"
                  description="Track driver assignments, fleet availability, transport workflow, ERP dispatch operations and live operational performance from one centralized dashboard."
                />

                {/* Status */}
                <div className="flex flex-wrap items-center gap-4 mt-8">

                  <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

                    <div>

                      <p className="text-sm font-medium text-white">

                        ERP Systems Active

                      </p>

                      <p className="text-xs text-zinc-500 mt-1">

                        Driver operations synchronized live.

                      </p>

                    </div>

                  </div>

                  <div className="px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10">

                    <p className="text-sm text-zinc-500">

                      Fleet Utilization

                    </p>

                    <h3 className="text-xl font-bold text-yellow-400 mt-1">

                      {
                        driverMetrics.utilizationRate
                      }%

                    </h3>

                  </div>

                </div>

              </div>

              {/* Filters */}
              <div className="flex flex-col gap-5">

                <DriverFilters
                  activeFilter={
                    activeFilter
                  }
                  setActiveFilter={
                    setActiveFilter
                  }
                />

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                    <p className="text-sm text-zinc-500">

                      Active Drivers

                    </p>

                    <h3 className="text-3xl font-bold text-emerald-400 mt-3">

                      {
                        driverMetrics.activeDrivers
                      }

                    </h3>

                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                    <p className="text-sm text-zinc-500">

                      Total Fleet

                    </p>

                    <h3 className="text-3xl font-bold text-white mt-3">

                      {
                        driverMetrics.totalDrivers
                      }

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Metrics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6">

            {/* Total */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <Users size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  Total Drivers

                </p>

                <h2 className="text-4xl font-bold text-white mt-3">

                  {
                    driverMetrics.totalDrivers
                  }

                </h2>

              </div>

            </div>

            {/* Available */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-emerald-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <ShieldCheck size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  Available

                </p>

                <h2 className="text-4xl font-bold text-emerald-400 mt-3">

                  {
                    driverMetrics.availableDrivers
                  }

                </h2>

              </div>

            </div>

            {/* On Trip */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <Car size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  On Trip

                </p>

                <h2 className="text-4xl font-bold text-yellow-400 mt-3">

                  {
                    driverMetrics.onTripDrivers
                  }

                </h2>

              </div>

            </div>

            {/* Offline */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-red-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-red-500/10 text-red-400 flex items-center justify-center">

                  <Activity size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  Offline

                </p>

                <h2 className="text-4xl font-bold text-red-400 mt-3">

                  {
                    driverMetrics.offlineDrivers
                  }

                </h2>

              </div>

            </div>

            {/* Trips */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-cyan-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                  <TrendingUp size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  Completed Trips

                </p>

                <h2 className="text-4xl font-bold text-cyan-400 mt-3">

                  {
                    driverMetrics.completedTrips
                  }

                </h2>

              </div>

            </div>

            {/* Profit */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-purple-500/10 blur-[90px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-3xl bg-purple-500/10 text-purple-400 flex items-center justify-center">

                  <IndianRupee size={24} />

                </div>

                <p className="text-sm text-zinc-500 mt-6">

                  Avg Profit

                </p>

                <h2 className="text-3xl font-bold text-purple-400 mt-3">

                  ₹{
                    driverMetrics.averageDriverProfit
                  }

                </h2>

              </div>

            </div>

          </section>

          {/* Summary */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Fleet */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl">

              <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <Car size={28} />

                </div>

                <h3 className="text-2xl font-bold text-white mt-6">

                  Fleet Operations

                </h3>

                <p className="text-zinc-500 mt-4 leading-relaxed">

                  Real-time ERP monitoring for dispatch workflow,
                  ride allocation and operational tracking.

                </p>

              </div>

            </div>

            {/* Earnings */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl">

              <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <IndianRupee size={28} />

                </div>

                <h3 className="text-2xl font-bold text-white mt-6">

                  Driver Earnings

                </h3>

                <p className="text-zinc-500 mt-4 leading-relaxed">

                  Monitor productivity, business profitability
                  and ERP financial performance live.

                </p>

              </div>

            </div>

            {/* Performance */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl">

              <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                  <TrendingUp size={28} />

                </div>

                <h3 className="text-2xl font-bold text-white mt-6">

                  ERP Performance

                </h3>

                <p className="text-zinc-500 mt-4 leading-relaxed">

                  Analyze operational efficiency,
                  trip success rate and fleet workflow performance.

                </p>

              </div>

            </div>

          </section>

          {/* Drivers Table */}
          <DriversTable
            drivers={
              filteredDrivers
            }
            setDrivers={
              setDrivers
            }
          />

          {/* Driver Activity */}
          <DriverActivity />

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Drivers;