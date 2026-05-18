import {
  useMemo,
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

  // Dynamic Stats
  useMemo(() => {

    return trips.length;

  }, [trips]);

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

      {/* Header */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-12 mb-10">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold mb-5">
              Real-Time Operations
            </p>

            <h2 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

              Cab Management
              <br />

              <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Dashboard
              </span>

            </h2>

            <p className="text-zinc-400 mt-6 text-base lg:text-lg max-w-2xl leading-relaxed">
              Monitor ride activity, customer operations,
              live analytics and booking performance in
              real time with intelligent tracking systems.
            </p>

          </div>

          {/* Add Booking */}
          <button
            onClick={() =>
              setShowModal(true)
            }
            className="group relative overflow-hidden w-fit px-8 py-4 rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold transition-all duration-300 hover:scale-[1.03] shadow-[0_0_35px_rgba(250,204,21,0.22)]"
          >

            <span className="relative z-10">
              + Add Booking
            </span>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10"></div>

          </button>

        </div>

      </div>

      {/* Loading */}
      {loading ? (

        <Loader />

      ) : (

        <div className="space-y-6 animate-[fadeIn_0.5s_ease]">

          {/* Live Stats */}
          <LiveStats />

          {/* Main Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Left */}
            <div className="xl:col-span-8 space-y-6">

              {/* Analytics */}
              <RevenueChart
                trips={trips}
              />

              {/* Trips */}
              <TripsTable
                trips={trips}
                setTrips={
                  setTrips
                }
              />

            </div>

            {/* Right */}
            <div className="xl:col-span-4 space-y-6">

              <PerformancePanel
                trips={trips}
              />

              <RecentActivity
                trips={trips}
              />

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