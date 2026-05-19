import { useState } from "react";

import MainLayout from "../layout/MainLayout";

import TripsTable from "../components/TripsTable";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import TripFilters from "../components/TripFilters";

import tripsData from "../data/trips";

function Bookings() {

  const [trips, setTrips] =
    useState(tripsData);

  const [
    activeFilter,
    setActiveFilter,
  ] = useState("All");

  // Filter Trips
  const filteredTrips =
    activeFilter === "All"

      ? trips

      : trips.filter(
          (trip) =>
            trip.status ===
            activeFilter
        );

  // Stats
  const pendingTrips =
    trips.filter(
      (trip) =>
        trip.status ===
        "Pending"
    ).length;

  const ongoingTrips =
    trips.filter(
      (trip) =>
        trip.status ===
        "Ongoing"
    ).length;

  const completedTrips =
    trips.filter(
      (trip) =>
        trip.status ===
        "Completed"
    ).length;

  const cancelledTrips =
    trips.filter(
      (trip) =>
        trip.status ===
        "Cancelled"
    ).length;

  return (

    <MainLayout>

      <PageTransition>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 mb-8">

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* Left */}
            <div className="max-w-3xl">

              <SectionHeader
                label="Bookings"
                title="Booking Operations Center"
                description="Manage ride bookings, driver assignments, operational workflow and customer transport activity in real time."
              />

            </div>

            {/* Right */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>

                <p className="text-sm font-medium text-white">
                  Operations Active
                </p>

                <p className="text-xs text-zinc-500 mt-1">
                  Live booking workflow running
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <p className="text-sm text-zinc-500">
              Pending Bookings
            </p>

            <h2 className="text-3xl font-bold text-orange-400 mt-3">
              {pendingTrips}
            </h2>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <p className="text-sm text-zinc-500">
              Ongoing Trips
            </p>

            <h2 className="text-3xl font-bold text-yellow-400 mt-3">
              {ongoingTrips}
            </h2>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <p className="text-sm text-zinc-500">
              Completed Rides
            </p>

            <h2 className="text-3xl font-bold text-emerald-400 mt-3">
              {completedTrips}
            </h2>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <p className="text-sm text-zinc-500">
              Cancelled Trips
            </p>

            <h2 className="text-3xl font-bold text-red-400 mt-3">
              {cancelledTrips}
            </h2>

          </div>

        </div>

        {/* Filters */}
        <div className="mb-8">

          <TripFilters
            activeFilter={
              activeFilter
            }
            setActiveFilter={
              setActiveFilter
            }
          />

        </div>

        {/* Table */}
        <TripsTable
          trips={filteredTrips}
          setTrips={setTrips}
        />

      </PageTransition>

    </MainLayout>
  );
}

export default Bookings;
