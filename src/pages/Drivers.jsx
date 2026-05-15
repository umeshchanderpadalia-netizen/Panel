import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";
import DriverCard from "../components/DriverCard";
import NotificationPanel from "../components/NotificationPanel";
import PageTransition from "../components/PageTransition";

import drivers from "../data/drivers";

function Drivers() {

  return (
    <MainLayout>

      <PageTransition>

        {/* Header */}
        <div className="mb-12">

          <SectionHeader
            label="Drivers"
            title="Driver Management"
            description="Monitor driver availability, ride activity and operational performance."
          />

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* Drivers */}
          <div className="xl:col-span-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {drivers.map((driver) => (

                <DriverCard
                  key={driver.id}
                  driver={driver}
                />

              ))}

            </div>

          </div>

          {/* Notifications */}
          <div className="xl:col-span-4">

            <NotificationPanel />

          </div>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Drivers;