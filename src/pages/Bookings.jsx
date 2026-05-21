import { useMemo, useState } from "react";

import MainLayout from "../layout/MainLayout";

import TripsTable from "../components/TripsTable";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import TripFilters from "../components/TripFilters";
import BookingModal from "../components/BookingModal";
import FloatingActionButton from "../components/FloatingActionButton";

import useApp from "../hooks/useApp";

import {
  Plus,
  MapPin,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

function Bookings() {

  // Global State
  const {
    trips,
    setTrips,
  } = useApp();

  // Modal
  const [showModal, setShowModal] =
    useState(false);

  // Filters
  const [
    activeFilter,
    setActiveFilter,
  ] = useState("All");

  // Filtered Trips
  const filteredTrips =
    useMemo(() => {

      if (
        activeFilter === "All"
      ) {

        return trips;

      }

      return trips.filter(
        (trip) =>
          trip.tripStatus ===
          activeFilter
      );

    }, [
      activeFilter,
      trips,
    ]);

  // Metrics
  const bookingMetrics =
    useMemo(() => {

      const pendingTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Pending"
        ).length;

      const ongoingTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Ongoing"
        ).length;

      const completedTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Completed"
        ).length;

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

      return {
        pendingTrips,
        ongoingTrips,
        completedTrips,
        totalRevenue,
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

      <PageTransition>

        {/* Floating Button */}
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

        <div className="space-y-8 lg:space-y-10">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-6 py-8 lg:px-10 lg:py-10">

            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-8">

              {/* Left */}
              <div className="max-w-3xl">

                <SectionHeader
                  label="Booking Operations"
                  title="Transport Booking Management"
                  description="Manage customer bookings, operational workflow, driver assignments, trip tracking, invoices and ERP transport operations from one centralized booking system."
                />

              </div>

              {/* Right */}
              <div className="flex flex-wrap items-center gap-4">

                {/* Live Status */}
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10">

                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

                  <div>

                    <p className="text-sm font-medium text-white">

                      ERP Workflow Active

                    </p>

                    <p className="text-xs text-zinc-500 mt-1">

                      Real-time booking operations

                    </p>

                  </div>

                </div>

                {/* Add Button */}
                <button
                  onClick={() =>
                    setShowModal(true)
                  }
                  className="group relative overflow-hidden flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-[0_0_24px_rgba(250,204,21,0.18)] hover:scale-[1.02] transition-all duration-300"
                >

                  <Plus
                    size={18}
                  />

                  <span className="relative z-10">

                    Add Booking

                  </span>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10"></div>

                </button>

              </div>

            </div>

          </section>

          {/* METRICS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Pending */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-orange-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">

                    Pending Bookings

                  </p>

                  <CalendarDays
                    size={18}
                    className="text-orange-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-orange-400 mt-5">

                  {
                    bookingMetrics.pendingTrips
                  }

                </h2>

              </div>

            </div>

            {/* Ongoing */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-yellow-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">

                    Ongoing Trips

                  </p>

                  <MapPin
                    size={18}
                    className="text-yellow-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-yellow-400 mt-5">

                  {
                    bookingMetrics.ongoingTrips
                  }

                </h2>

              </div>

            </div>

            {/* Completed */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">

                    Completed Trips

                  </p>

                  <CalendarDays
                    size={18}
                    className="text-emerald-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-emerald-400 mt-5">

                  {
                    bookingMetrics.completedTrips
                  }

                </h2>

              </div>

            </div>

            {/* Revenue */}
            <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">

                    Booking Revenue

                  </p>

                  <IndianRupee
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <h2 className="text-4xl font-bold text-cyan-400 mt-5">

                  ₹{
                    bookingMetrics.totalRevenue.toLocaleString()
                  }

                </h2>

              </div>

            </div>

          </section>

          {/* FILTERS */}
          <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

                Booking Filters

              </p>

              <h3 className="text-2xl font-bold text-white mt-3">

                Booking Workflow Management

              </h3>

            </div>

            <TripFilters
              activeFilter={
                activeFilter
              }
              setActiveFilter={
                setActiveFilter
              }
            />

          </section>

          {/* TABLE */}
          <section>

            <TripsTable
              trips={
                filteredTrips
              }
              setTrips={
                setTrips
              }
            />

          </section>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Bookings;