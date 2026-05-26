import { useNavigate } from "react-router-dom";

export default function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
      <div
        className="bg-[#0e0e0e] text-[#e7e5e4] antialiased overflow-x-hidden min-h-screen"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* TopNavBar */}
        <nav
          className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 sm:h-20 bg-[#0e0e0e]/40 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }}
        >
          <div className="flex items-center gap-6 md:gap-12">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-xl sm:text-2xl font-bold tracking-tighter text-white bg-transparent border-none cursor-pointer p-0"
            >
              Constrag
            </button>
            <div className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => navigate("/archtivity")}
                className="text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm font-medium"
              >
                Archtivity
              </button>
              <button
                onClick={() => navigate("/toolkit")}
                className="text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm font-medium"
              >
                Toolkit
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span
                className="material-symbols-outlined text-white/40"
                style={{ fontSize: "1rem" }}
              >
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm text-white/80 w-32 lg:w-48 placeholder:text-white/20 outline-none ml-2"
                placeholder="Search resources..."
                type="text"
              />
            </div>
            <button
              className="text-[#00407d] px-4 sm:px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #a7c8ff, #004788)",
                color: "#00407d",
              }}
            >
              <span className="text-[#003060] font-bold">Go Pro</span>
            </button>
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2 text-white/60 hover:bg-white/10 rounded-full transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                  notifications
                </span>
              </button>
              <button className="p-2 text-white/60 hover:bg-white/10 rounded-full transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                  account_circle
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main
          className="relative min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-24"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(72, 72, 72, 0.05) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        >
          {/* Hero Section */}
          <header className="max-w-4xl mb-12 sm:mb-20">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Define the{" "}
              <span className="text-[#a7c8ff] italic">Atmosphere </span>  of
              Tomorrow.
            </h1>
            <p
              className="text-[#acabaa] text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed"
            >
              Choose your workspace. Curate architectural inspiration or build
              precise technical masterpieces with our professional suite.
            </p>
          </header>

          {/* Mode Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Archtivity Card */}
            <div className="group relative flex flex-col bg-[#1a1919] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-[#2c2c2c] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] to-transparent z-10"></div>
                <div className="flex gap-4 p-6 sm:p-8 relative z-0 h-full">
                  <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOp3446VxYfYcZttexQxCmVGp2Lz9q3Jf6XBNmJ-FVny6bubQY_Yga5mwAPd1nqEg9MzEhxX9IFPKRtsov2g7BK_hYmQ2fbi36iXf2Tx7_6SqCmePa2pq2A3AX0v2D6LOUrhTVbDq9hJLcMRfrLysBhOckDPODUE1lTvSoMwJZ3MYjecVxq1T8dr7XGw8GHXjwo6ZoSlT5Wyy7_yXWNC2rNDAhLKAv3vdu_BkFALllW0Axe11Xlj-GfSskQuBr5VQE7pJ_IqFdQA"
                      alt="high-end modern skyscraper with sharp geometric glass facets against a deep blue dusk sky"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-4">
                    <div className="h-3/5 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 delay-75 group-hover:translate-y-4">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpkkKDIiSm92G_U6Ye5WuUByFLiyoiC7BVvdqWLaVlhsiEX_w5EkUALeHV-Z-Ul5r7WzjYILbTLjrGqeMzlE910_GncFKs-RQuRdQxUrnOsY_0yfsyj-dCp2Ga2Op55SwEj1HoC2ypMePggxdnJt9rhyleDiOQdvL-InQ1Dx53K903SMhk96OnlwHPS_-RtkR2Y6qpGNNUjgy5whsIpDSIIRBRM_MSCo4wx1K7NTbi7N5OOi2V-ioCot71qe0EHy8Zh4ZACdQHw"
                        alt="minimalist concrete residential architecture with large floor-to-ceiling windows and warm interior lighting"
                      />
                    </div>
                    <div className="h-2/5 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 delay-150 group-hover:-translate-y-2">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARj6yUOoNmzJ6RtcjK3cYrY2IkWHcOqs4HUVhAilnmNu6M3thZfgBQdddxLKkTU-Drg1RmFjsoPmZYsDk7tWjeUOSuEdMeRnHLsSGyHV-CK-l-NVfNtRVPxwUo2qPS0Bbb5b6tUdBxYeNk2CBlrv1ET2GorGSxtJ7EW8IAG3Cwsd4bC0J013ip2ynnrnRzOP4y-CmTYeImwdHH1JKWWEA7XhgQqd6XeWcUCxyNgRZtaQdRP3zeONBVFce6lscUbFUOGD6XYVG7yQ"
                        alt="abstract architectural detail of white curved stairs in a brightly lit museum gallery"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 pt-4 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="bg-[#a7c8ff]/10 text-[#a7c8ff] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    >
                      Community
                    </span>
                    <span className="text-white/20 text-xs tracking-widest uppercase">
                      Inspiration
                    </span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Archtivity
                  </h2>
                  <p className="text-[#acabaa] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Explore a curated feed of global architectural trends,
                    participate in design challenges, and connect with
                    visionaries.
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1919] overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbD5cK-jIb3-vcd-SOVjkP1FkV0Vu_1jXjeY1AWnyJwWacfo1icqCods54ReNfL1W6yp4GDI8OOGww0E_vlecXc6APUdeiUYOSlf4RInhf4bJUD-DBo10djTSFQE-W6I-Hu-V5JUiCdajUiFOCD_ihJWGCGN6prvXQLz3gJ8UxBuHIUyFcNGNGtPd1hmQk_SdGBsGay9aJEZPslfPabPejJCyN-2ale6ajvqSrcXST8foDWilkgI8Ao-PXj58JkvvoJ1xCHz25mA"
                        alt="portrait of a male architect"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1919] overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwE3KhQvVrz72p2J2QtOkl8Zok2oeuR6dLhO7Rs_2Iv1VRgMtNp73WG8zYbOyFFB-d3Kf9kOSjIkfjJ3xcukTs17tMfExzWenr4kAkothRrQcxTBS5nvjEqXmKikmyMA_p4TN_HfeYJj4MQNzJpnyR9fI1Kyc_DvOWjym3qBhLiuGpFWqT1qVrmjuj79akK2uysfC33fYWrf1o9i5-lx-2XNnQIiWKyGhiQ66a3uQUnLqJey-4-w3CjBsqI1Q4zjw5Kb2Mqi5azw"
                        alt="smiling female designer"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a1919] bg-[#2c2c2c] flex items-center justify-center text-[10px] text-white/60">
                      +12k
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/archtivity")}
                    className="flex items-center gap-2 text-[#a7c8ff] font-bold hover:gap-4 transition-all duration-300 bg-transparent border-none cursor-pointer"
                  >
                    Enter Gallery{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Toolkit Card */}
            <div className="group relative flex flex-col bg-[#1a1919] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-[#2c2c2c] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="aspect-[16/10] bg-[#131313] flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-10 left-10 w-64 h-64 border border-[#a7c8ff]/20 rounded-full"></div>
                  <div className="absolute -bottom-10 -right-10 w-96 h-96 border border-[#a7c8ff]/10 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-20 w-3/4">
                  <div className="bg-[#262626]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-transform duration-500 group-hover:-translate-y-3">
                    <span
                      className="material-symbols-outlined text-[#a7c8ff]"
                      style={{ fontSize: "2rem" }}
                    >
                      smart_toy
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      AI Design
                    </span>
                  </div>
                  <div className="bg-[#262626]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-transform duration-500 group-hover:translate-y-3">
                    <span
                      className="material-symbols-outlined text-[#a7c8ff]"
                      style={{ fontSize: "2rem" }}
                    >
                      map
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Site Analysis
                    </span>
                  </div>
                  <div className="bg-[#262626]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-transform duration-500 group-hover:translate-y-3">
                    <span
                      className="material-symbols-outlined text-[#a7c8ff]"
                      style={{ fontSize: "2rem" }}
                    >
                      3d_rotation
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Real-time Renders
                    </span>
                  </div>
                  <div className="bg-[#262626]/60 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-transform duration-500 group-hover:-translate-y-3">
                    <span
                      className="material-symbols-outlined text-[#a7c8ff]"
                      style={{ fontSize: "2rem" }}
                    >
                      inventory_2
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      BIM Library
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 pt-4 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#a7c8ff]/10 text-[#a7c8ff] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      PRO SUITE
                    </span>
                    <span className="text-white/20 text-xs tracking-widest uppercase">
                      Production
                    </span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Toolkit
                  </h2>
                  <p className="text-[#acabaa] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Professional-grade tools for drafting, rendering, and
                    analysis. Empower your workflow with integrated AI and global
                    datasets.
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex gap-2 flex-wrap">
                    <div className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold text-white/40">
                      REVIT
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold text-white/40">
                      ARCHICAD
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold text-white/40">
                      RHINO
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/toolkit")}
                    className="bg-white text-[#0e0e0e] px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-[#a7c8ff] hover:text-[#00407d] transition-all duration-300 whitespace-nowrap"
                  >
                    Launch Studio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats / Secondary Bento */}
          <section className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#131313] p-6 sm:p-8 rounded-lg flex flex-col gap-2">
              <span
                className="text-[#a7c8ff] text-3xl font-bold"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                2.4k
              </span>
              <span
                className="text-[#acabaa] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Active Projects
              </span>
            </div>
            <div className="bg-[#131313] p-6 sm:p-8 rounded-lg flex flex-col gap-2">
              <span
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                18
              </span>
              <span
                className="text-[#acabaa] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AI Modules Updated
              </span>
            </div>
            <div className="bg-[#131313] p-6 sm:p-8 rounded-lg flex flex-col gap-2">
              <span
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                98%
              </span>
              <span
                className="text-[#acabaa] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Render Uptime
              </span>
            </div>
          </section>
        </main>

        {/* Floating Bottom Bar - Mobile Only */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-[3rem] bg-[#1a1919]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-around items-center py-3 px-6 z-50">
          <button className="flex flex-col items-center justify-center bg-[#a7c8ff] text-[#004788] rounded-full w-12 h-12">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button className="flex flex-col items-center justify-center text-white/40">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="flex flex-col items-center justify-center text-white/40">
            <span className="material-symbols-outlined">draw</span>
          </button>
          <button className="flex flex-col items-center justify-center text-white/40">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </div>
  );
}
