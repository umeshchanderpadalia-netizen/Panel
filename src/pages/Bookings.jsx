import MainLayout from "../layout/MainLayout";

import TripsTable from "../components/TripsTable";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";

import tripsData from "../data/trips";

import { useState } from "react";

function Bookings() {

  const [trips, setTrips] =
    useState(tripsData);

  return (
    <MainLayout>

      <PageTransition>

        {/* Header */}
        <div className="mb-12">

          <SectionHeader
            label="Bookings"
            title="Ride Bookings"
            description="Manage all customer ride bookings and operational trip activity."
          />

        </div>

        {/* Table */}
        <TripsTable
          trips={trips}
          setTrips={setTrips}
        />

      </PageTransition>

    </MainLayout>
  );
}

export default Bookings;