import Navbar from "../components/Navbar";

function MainLayout({
  children,
}) {

  return (
    <div className="min-h-screen bg-[#060816] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-8">

        {children}

      </div>

    </div>
  );
}

export default MainLayout;