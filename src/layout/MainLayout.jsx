import Navbar from "../components/Navbar";

function MainLayout({
  children,
}) {

  return (

    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Primary Glow */}
      <div className="fixed top-[-220px] right-[-220px] w-[420px] h-[420px] bg-yellow-400/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="fixed bottom-[-220px] left-[-220px] w-[420px] h-[420px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Center Ambient Glow */}
      <div className="fixed top-[30%] left-[40%] w-[320px] h-[320px] bg-yellow-500/[0.03] blur-[140px] rounded-full pointer-events-none"></div>

      {/* Grid Texture */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Radial Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.06),transparent_38%)] pointer-events-none"></div>

      {/* Blur Overlay */}
      <div className="fixed inset-0 backdrop-[blur(1px)] pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Wrapper */}
      <main className="relative z-10 w-full">

        {/* Container */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8">

          {/* Content Wrapper */}
          <div className="relative">

            {children}

          </div>

        </div>

      </main>

    </div>
  );
}

export default MainLayout;