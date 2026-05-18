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

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 mb-12">

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <SectionHeader
              label="Bookings"
              title="Ride Bookings"
              description="Manage all customer ride bookings and operational trip activity."
            />

          </div>

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