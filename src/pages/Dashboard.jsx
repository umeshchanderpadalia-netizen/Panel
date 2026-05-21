import { useMemo, useState } from "react";

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

  const [showModal, setShowModal] =
    useState(false);

  const [loading] =
    useState(false);

  const {
    trips,
    setTrips,
    notifications,
  } = useApp();

  // Dashboard Metrics
  const dashboardMetrics =
    useMemo(() => {

      const revenue =
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

      const expenses =
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

      const profit =
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

      return {
        revenue,
        expenses,
        profit,
        pendingPayments,
        totalBookings:
          trips.length,
      };

    }, [trips]);

  // Add Booking
  const handleAddTrip = (
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
          addTrip={
            handleAddTrip
          }
        />

      )}

      {/* Loading */}
      {loading ? (

        <Loader />

      ) : (

        <div className="space-y-8 lg:space-y-10 animate-[fadeIn_0.5s_ease]">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-6 py-8 lg:px-10 lg:py-10">

            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-10">

              {/* Left */}
              <div className="max-w-4xl">

                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                  ERP Operations Dashboard

                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mt-5">

                  Business
                  {" "}

                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">

                    Command Center

                  </span>

                </h1>

                <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-3xl mt-6">

                  Monitor transport bookings, operational activity,
                  vendor workflow, financial performance, trip analytics,
                  driver operations and payment systems from one centralized ERP platform.

                </p>

              </div>

              {/* Right */}
              <div className="grid grid-cols-2 gap-4 w-full 2xl:w-auto">

                {/* Revenue */}
                <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-emerald-500/10 blur-[80px] rounded-full"></div>

                  <div className="relative z-10">

                    <p className="text-sm text-zinc-500">

                      Revenue

                    </p>

                    <h3 className="text-3xl font-bold text-emerald-400 mt-4">

                      ₹{
                        dashboardMetrics.revenue.toLocaleString()
                      }

                    </h3>

                  </div>

                </div>

                {/* Profit */}
                <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-yellow-500/10 blur-[80px] rounded-full"></div>

                  <div className="relative z-10">

                    <p className="text-sm text-zinc-500">

                      Profit

                    </p>

                    <h3 className="text-3xl font-bold text-yellow-400 mt-4">

                      ₹{
                        dashboardMetrics.profit.toLocaleString()
                      }

                    </h3>

                  </div>

                </div>

                {/* Expenses */}
                <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-red-500/10 blur-[80px] rounded-full"></div>

                  <div className="relative z-10">

                    <p className="text-sm text-zinc-500">

                      Expenses

                    </p>

                    <h3 className="text-3xl font-bold text-red-400 mt-4">

                      ₹{
                        dashboardMetrics.expenses.toLocaleString()
                      }

                    </h3>

                  </div>

                </div>

                {/* Pending */}
                <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-cyan-500/10 blur-[80px] rounded-full"></div>

                  <div className="relative z-10">

                    <p className="text-sm text-zinc-500">

                      Pending

                    </p>

                    <h3 className="text-3xl font-bold text-cyan-400 mt-4">

                      {
                        dashboardMetrics.pendingPayments
                      }

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* LIVE STATS */}
          <LiveStats />

          {/* CHART + INSIGHTS */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Chart */}
            <div className="xl:col-span-8">

              <RevenueChart
                trips={trips}
              />

            </div>

            {/* Insights */}
            <div className="xl:col-span-4">

              <InsightPanel />

            </div>

          </section>

          {/* PERFORMANCE + ACTIVITY */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Performance */}
            <div className="xl:col-span-4">

              <PerformancePanel
                trips={trips}
              />

            </div>

            {/* Activity */}
            <div className="xl:col-span-8">

              <RecentActivity
                trips={trips}
              />

            </div>

          </section>

          {/* BOOKINGS TABLE */}
          <section>

            <TripsTable
              trips={trips}
              setTrips={setTrips}
            />

          </section>

          {/* DRIVER ACTIVITY */}
          <section>

            <DriverActivity />

          </section>

        </div>

      )}

    </MainLayout>
  );
}

export default Dashboard;