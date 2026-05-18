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
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 mb-12">

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <SectionHeader
              label="Drivers"
              title="Driver Management"
              description="Monitor driver availability, ride activity and operational performance."
            />

          </div>

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

            <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-1 backdrop-blur-xl">

              <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-400/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                <NotificationPanel />

              </div>

            </div>

          </div>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Drivers;