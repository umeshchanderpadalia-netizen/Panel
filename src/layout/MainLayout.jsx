import Navbar from "../components/Navbar";

function MainLayout({
  children,
}) {

  return (

    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed top-[-220px] right-[-220px] w-[420px] h-[420px] bg-yellow-400/8 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="fixed bottom-[-220px] left-[-220px] w-[420px] h-[420px] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Secondary Glow */}
      <div className="fixed top-[30%] left-[40%] w-[300px] h-[300px] bg-yellow-500/[0.03] blur-[140px] rounded-full pointer-events-none"></div>

      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.04),transparent_40%)] pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 w-full">

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8">

          {children}

        </div>

      </main>

    </div>
  );
}

export default MainLayout;