import { useMemo, useState } from "react";

import MainLayout from "../layout/MainLayout";

import TripsTable from "../components/TripsTable";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import TripFilters from "../components/TripFilters";
import AddBookingModal from "../components/AddBookingModal";
import FloatingActionButton from "../components/FloatingActionButton";

import useApp from "../hooks/useApp";

import {
  Plus,
} from "lucide-react";

function Bookings() {

  const {

    trips,

    addTrip,

  } = useApp();

  const [
    showModal,
    setShowModal,
  ] = useState(false);

  const [
    activeFilter,
    setActiveFilter,
  ] = useState("All");

  const filteredTrips =
    useMemo(() => {

      if (
        activeFilter ===
        "All"
      ) {

        return trips;
      }

      return trips.filter(

        (
          trip
        ) =>

          trip.tripStatus ===
          activeFilter

      );

    }, [

      activeFilter,

      trips,

    ]);

  const bookingMetrics =
    useMemo(() => {

      const pendingTrips =
        trips.filter(

          (
            trip
          ) =>

            trip.tripStatus ===
            "Pending"

        ).length;

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
              trip.totalExpenses || 0
            ),

          0
        );

      const balance =
        trips.reduce(

          (
            total,
            trip
          ) =>

            total +
            Number(
              trip.balance || 0
            ),

          0
        );

      return {

        pendingTrips,

        revenue,

        expenses,

        balance,

      };

    }, [trips]);

  return (

    <MainLayout>

      <PageTransition>

        <FloatingActionButton
          label="Add Booking"
          onClick={() =>
            setShowModal(
              true
            )
          }
        />

        {showModal && (

          <AddBookingModal

            closeModal={() =>
              setShowModal(
                false
              )
            }

            addTrip={
              addTrip
            }

          />

        )}

        <div className="space-y-8">

          <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-8">

            <SectionHeader

              label="Booking Operations"

              title="Transport Booking Management"

              description="Manage bookings and financial operations"

            />

            <div className="mt-6">

              <button

                onClick={() =>
                  setShowModal(
                    true
                  )
                }

                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-semibold text-black"
              >

                <Plus
                  size={18}
                />

                Add Booking

              </button>

            </div>

          </section>

          <TripFilters

            activeFilter={
              activeFilter
            }

            setActiveFilter={
              setActiveFilter
            }

          />

          <section className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-white/10 p-6">

              <p className="text-zinc-500">

                Revenue

              </p>

              <h2 className="mt-4 text-3xl font-bold text-emerald-400">

                ₹
                {
                  bookingMetrics.revenue.toLocaleString()
                }

              </h2>

            </div>

            <div className="rounded-3xl border border-white/10 p-6">

              <p className="text-zinc-500">

                Expenses

              </p>

              <h2 className="mt-4 text-3xl font-bold text-red-400">

                ₹
                {
                  bookingMetrics.expenses.toLocaleString()
                }

              </h2>

            </div>

            <div className="rounded-3xl border border-white/10 p-6">

              <p className="text-zinc-500">

                Balance

              </p>

              <h2 className="mt-4 text-3xl font-bold text-cyan-400">

                ₹
                {
                  bookingMetrics.balance.toLocaleString()
                }

              </h2>

            </div>

            <div className="rounded-3xl border border-white/10 p-6">

              <p className="text-zinc-500">

                Pending

              </p>

              <h2 className="mt-4 text-3xl font-bold text-orange-400">

                {
                  bookingMetrics.pendingTrips
                }

              </h2>

            </div>

          </section>

          <TripsTable

            trips={
              filteredTrips
            }

          />

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Bookings;