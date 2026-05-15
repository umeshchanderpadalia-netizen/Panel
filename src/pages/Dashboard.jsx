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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
            Cab Management
            <br />
            Dashboard
          </h2>

          <p className="text-slate-400 mt-5 text-base lg:text-lg max-w-2xl">
            Monitor ride activity, customer operations,
            live analytics and booking performance in
            real time.
          </p>

        </div>

        {/* Add Booking */}
        <button
          onClick={() =>
            setShowModal(true)
          }
          className="w-fit px-7 py-4 rounded-3xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-semibold hover:scale-[1.03] shadow-lg shadow-blue-500/20"
        >

          + Add Booking

        </button>

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