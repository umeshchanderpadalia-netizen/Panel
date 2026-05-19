import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";

import DriversTable from "../components/DriversTable";

import DriverFilters from "../components/DriverFilters";

import DriverActivity from "../components/DriverActivity";

import PageTransition from "../components/PageTransition";

import LoadingScreen from "../components/LoadingScreen";

import EmptyState from "../components/EmptyState";

import ErrorState from "../components/ErrorState";

import useDrivers from "../hooks/useDrivers";

import useApp from "../hooks/useApp";

import {
  IndianRupee,
  TrendingUp,
  Car,
  Users,
} from "lucide-react";

function Drivers() {

  const {
    drivers,
    setDrivers,
    loading,
    error,
    retry,
  } = useDrivers();

  const {
    trips,
  } = useApp();

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

  // Metrics
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

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 mb-10">

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* Left */}
            <div>

              <SectionHeader
                label="ERP Drivers"
                title="Driver Operations Center"
                description="Monitor fleet assignments, driver availability, ERP trip workflow, transport operations and performance analytics in real time."
              />

            </div>

            {/* Filters */}
            <DriverFilters
              activeFilter={
                activeFilter
              }
              setActiveFilter={
                setActiveFilter
              }
            />

          </div>

        </div>

        {/* ERP Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 mb-8">

          {/* Total */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                Total Drivers

              </p>

              <h2 className="text-4xl font-bold text-white mt-4">

                {totalDrivers}

              </h2>

            </div>

          </div>

          {/* Available */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-emerald-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                Available

              </p>

              <h2 className="text-4xl font-bold text-emerald-400 mt-4">

                {
                  availableDrivers
                }

              </h2>

            </div>

          </div>

          {/* On Trip */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                On Trip

              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-4">

                {
                  onTripDrivers
                }

              </h2>

            </div>

          </div>

          {/* Offline */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-red-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                Offline

              </p>

              <h2 className="text-4xl font-bold text-red-400 mt-4">

                {
                  offlineDrivers
                }

              </h2>

            </div>

          </div>

          {/* Completed Trips */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-cyan-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                Completed Trips

              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-4">

                {
                  completedTrips
                }

              </h2>

            </div>

          </div>

          {/* Avg Profit */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-purple-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-sm text-zinc-400">

                Avg Profit

              </p>

              <h2 className="text-3xl font-bold text-purple-400 mt-4">

                ₹{
                  averageDriverProfit
                }

              </h2>

            </div>

          </div>

        </div>

        {/* ERP Summary */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

          {/* Operations */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-7">

            <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <Car
                  size={24}
                />

              </div>

              <h3 className="text-2xl font-bold text-white mt-6">

                Fleet Operations

              </h3>

              <p className="text-zinc-500 mt-4 leading-relaxed">

                Real-time ERP monitoring for dispatch workflow,
                driver assignments and transport operations.

              </p>

            </div>

          </div>

          {/* Earnings */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-7">

            <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-3xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                <IndianRupee
                  size={24}
                />

              </div>

              <h3 className="text-2xl font-bold text-white mt-6">

                Driver Earnings

              </h3>

              <p className="text-zinc-500 mt-4 leading-relaxed">

                Monitor profitability, driver productivity
                and operational financial performance.

              </p>

            </div>

          </div>

          {/* Performance */}
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-7">

            <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                <TrendingUp
                  size={24}
                />

              </div>

              <h3 className="text-2xl font-bold text-white mt-6">

                ERP Performance

              </h3>

              <p className="text-zinc-500 mt-4 leading-relaxed">

                Analyze operational efficiency,
                trip success rates and ERP activity workflow.

              </p>

            </div>

          </div>

        </div>

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
        <div className="mt-8">

          <DriverActivity />

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Drivers;