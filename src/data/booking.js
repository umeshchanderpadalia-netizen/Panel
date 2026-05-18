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

  return (
    <MainLayout>

      <PageTransition>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

          <SectionHeader
            label="Bookings"
            title="Ride Bookings"
            description="Manage customer ride bookings, monitor trip activity and track operational performance in real time."
          />

          {/* Filters */}
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