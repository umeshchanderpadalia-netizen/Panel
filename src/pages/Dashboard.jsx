import {
  useState,
} from "react";

import MainLayout from "../layout/MainLayout";

import RevenueChart from "../components/RevenueChart";
import PerformancePanel from "../components/PerformancePanel";
import TripsTable from "../components/TripsTable";
import Loader from "../components/Loader";
import BookingModal from "../components/BookingModal";
import RecentActivity from "../components/RecentActivity";
import FloatingActionButton from "../components/FloatingActionButton";
import NotificationToast from "../components/NotificationToast";

import LiveStats from "../components/LiveStats";
import InsightPanel from "../components/InsightPanel";
import DriverActivity from "../components/DriverActivity";

import useApp from "../hooks/useApp";

function Dashboard() {

  const [loading] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const {
    trips,
    setTrips,
    notifications,
  } = useApp();

  // ERP Metrics
  const totalRevenue =
    trips.reduce(
      (
        total,
        trip
      ) =>
        total +
        Number(
          trip.total || 0
        ),
      0
    );

  const totalExpenses =
    trips.reduce(
      (
        total,
        trip
      ) =>
        total +
        Number(
          trip.totalExpenses ||
            0
        ),
      0
    );

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

  const pendingPayments =
    trips.filter(
      (trip) =>
        trip.paymentStatus !==
        "Paid"
    ).length;

  const completedTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Completed"
    ).length;

  const ongoingTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Ongoing"
    ).length;

  // Add Trip
  const addTrip = (
    newTrip
  ) => {

    const tripWithId = {
      ...newTrip,
      id: Date.now(),
    };

    setTrips([
      tripWithId,
      ...trips,
    ]);
  };

  return (

    <MainLayout>

      {/* Notifications */}
      <NotificationToast
        notifications={
          notifications
        }
      />

      {/* Floating Action */}
      <FloatingActionButton
        onClick={() =>
          setShowModal(true)
        }
      />

      {/* Booking Modal */}
      {showModal && (

        <BookingModal
          closeModal={() =>
            setShowModal(false)
          }
          addTrip={addTrip}
        />

      )}

      {/* Dashboard Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 mb-8">

        {/* Background Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[110px] rounded-full"></div>

        <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-amber-500/5 blur-[110px] rounded-full"></div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

          {/* Left */}
          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold mb-4">

              ERP Transport Intelligence

            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">

              ERP Business
              <br />

              <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">

                Command Center

              </span>

            </h1>

            <p className="text-zinc-400 mt-6 text-base lg:text-lg max-w-2xl leading-relaxed">

              Monitor bookings, finances, vendor operations,
              driver activity, expenses, profit analysis and
              transport business performance from one centralized
              ERP platform.

            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <button
              onClick={() =>
                setShowModal(true)
              }
              className="group relative overflow-hidden px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(250,204,21,0.20)]"
            >

              <span className="relative z-10">
                + Add Booking
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10"></div>

            </button>

            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>

                <p className="text-sm font-medium text-white">
                  ERP Systems Active
                </p>

                <p className="text-xs text-zinc-500 mt-1">
                  ERP operations active and financial systems synchronized.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ERP Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {/* Revenue */}
        <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

          <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-emerald-500/10 blur-[90px] rounded-full"></div>

          <div className="relative z-10">

            <p className="text-sm text-zinc-400">

              Total Revenue

            </p>

            <h2 className="text-4xl font-bold text-emerald-400 mt-4">

              ₹{
                totalRevenue.toLocaleString()
              }

            </h2>

          </div>

        </div>

        {/* Expenses */}
        <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

          <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-red-500/10 blur-[90px] rounded-full"></div>

          <div className="relative z-10">

            <p className="text-sm text-zinc-400">

              Total Expenses

            </p>

            <h2 className="text-4xl font-bold text-red-400 mt-4">

              ₹{
                totalExpenses.toLocaleString()
              }

            </h2>

          </div>

        </div>

        {/* Profit */}
        <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

          <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-500/10 blur-[90px] rounded-full"></div>

          <div className="relative z-10">

            <p className="text-sm text-zinc-400">

              Net Profit

            </p>

            <h2 className="text-4xl font-bold text-yellow-400 mt-4">

              ₹{
                totalProfit.toLocaleString()
              }

            </h2>

          </div>

        </div>

        {/* Pending */}
        <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

          <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-cyan-500/10 blur-[90px] rounded-full"></div>

          <div className="relative z-10">

            <p className="text-sm text-zinc-400">

              Pending Payments

            </p>

            <h2 className="text-4xl font-bold text-cyan-400 mt-4">

              {pendingPayments}

            </h2>

          </div>

        </div>

      </div>

      {/* Loading */}
      {loading ? (

        <Loader />

      ) : (

        <div className="space-y-6 animate-[fadeIn_0.5s_ease]">

          {/* Stats */}
          <LiveStats />

          {/* ERP Operations Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Completed */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-emerald-500/10 blur-[70px] rounded-full"></div>

              <div className="relative z-10">

                <p className="text-sm text-zinc-400">

                  Completed Trips

                </p>

                <h3 className="text-3xl font-bold text-emerald-400 mt-4">

                  {completedTrips}

                </h3>

              </div>

            </div>

            {/* Ongoing */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-yellow-500/10 blur-[70px] rounded-full"></div>

              <div className="relative z-10">

                <p className="text-sm text-zinc-400">

                  Ongoing Trips

                </p>

                <h3 className="text-3xl font-bold text-yellow-400 mt-4">

                  {ongoingTrips}

                </h3>

              </div>

            </div>

            {/* Bookings */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-blue-500/10 blur-[70px] rounded-full"></div>

              <div className="relative z-10">

                <p className="text-sm text-zinc-400">

                  Total Bookings

                </p>

                <h3 className="text-3xl font-bold text-blue-400 mt-4">

                  {trips.length}

                </h3>

              </div>

            </div>

          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Left */}
            <div className="xl:col-span-8 space-y-6">

              {/* Revenue Analytics */}
              <RevenueChart
                trips={trips}
              />

              {/* Trips Table */}
              <TripsTable
                trips={trips}
                setTrips={
                  setTrips
                }
              />

            </div>

            {/* Right */}
            <div className="xl:col-span-4 space-y-6">

              {/* Performance */}
              <PerformancePanel
                trips={trips}
              />

              {/* Activity */}
              <RecentActivity
                trips={trips}
              />

              {/* Insights */}
              <InsightPanel />

            </div>

          </div>

          {/* Driver Activity */}
          <DriverActivity />

        </div>

      )}

    </MainLayout>
  );
}

export default Dashboard;