import Navbar from "../components/Navbar";

function MainLayout({
  children,
}) {

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Global Background Glow */}
      <div className="fixed top-[-250px] right-[-250px] w-[500px] h-[500px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="fixed bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10 py-8">

        {children}

      </div>

    </div>
  );
}

export default MainLayout;