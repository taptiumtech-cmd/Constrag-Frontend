import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-background text-on-background selection:bg-electric-blue selection:text-white overflow-x-hidden max-w-full"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(192,192,192,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,192,192,0.05) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@300;400&family=JetBrains+Mono:wght@400;500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .glass-card {
          background: rgba(38, 38, 41, 0.4);
          backdrop-filter: blur(32px);
          border: 1px solid rgba(192, 192, 192, 0.1);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(23, 89, 255, 0.3);
        }
      `}</style>

      {/* TopNavBar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-[80px] py-4 lg:py-6 max-w-[1440px] mx-auto backdrop-blur-xl border-b"
        style={{
          background: "rgba(192,192,192,0.1)",
          borderColor: "rgba(192,192,192,0.1)",
        }}
      >
        <div
          className="font-bold tracking-tighter text-white text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] shrink-0"
          style={{ fontFamily: "Manrope" }}
        >
          Archtivity
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-white border-b border-white pb-1 hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
            href="#"
          >
            Platform
          </a>
          <a
            className="text-[#c4c7c8] hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
            href="#"
          >
            Showcase
          </a>
          <a
            className="text-[#c4c7c8] hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
            href="#"
          >
            Community
          </a>
          <a
            className="text-[#c4c7c8] hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
            href="#"
          >
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <button
            className="bg-[#F5F5F5] text-[#1A1A1A] px-4 sm:px-6 py-2 rounded-sm active:scale-95 transition-transform whitespace-nowrap"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-[80px]">
        <div className="absolute inset-0 z-0">
          <img
            alt="Cinematic Architectural Render"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFTXYFo6MDUUkfmXNMQm7uA5ZSQqJzlHUNMwgbJA0jR3C3YEXsen78fO6ut7QzS020RHXlLESvvDdsWWq48txWosPqjJ7JdOFm_pTlcg7j1hXXroSY7M3MO46g9LNpe0BOM0PqWZtlin-6B4OM86Zp4Pdy67cZmHuc7xixKbCJDRmz7ewkuBNEeS7VFbBr0v6blAWQ5lTaIxKytO5oc9OOXydHYJEH6PV67mSyMMnQQ52SIsR-xFMZ10t-X10FuRqol5I8WAk5wg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[900px] w-full min-w-0">
          <h1
            className="text-white mb-6 sm:mb-8 tracking-tighter text-[36px] leading-[40px] sm:text-[48px] sm:leading-[52px] md:text-[64px] md:leading-[70px] lg:text-[96px] lg:leading-[100px] lg:tracking-[-0.04em] font-extrabold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            The Creative{" "}
            <span className="text-[#1759FF]">Operating System</span> For
            Construction.
          </h1>
          <p
            className="text-[#c4c7c8] max-w-[600px] mb-8 sm:mb-12 text-base sm:text-lg lg:text-[20px] lg:leading-[32px] font-light"
            style={{
              fontFamily: "Inter",
            }}
          >
            A unified ecosystem designed for the modern architect. Curate,
            collaborate, and construct with AI-driven precision and a community
            of visionaries.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 w-full max-w-full">
            <button
              className="bg-[#F5F5F5] text-[#1A1A1A] px-8 sm:px-10 py-4 rounded-sm hover:bg-white transition-all w-full sm:w-auto max-w-full"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
            <button
              className="border text-[#F5F5F5] px-8 sm:px-10 py-4 rounded-sm hover:border-[#1759FF] transition-all flex items-center justify-center gap-2 w-full sm:w-auto max-w-full"
              style={{
                borderColor: "rgba(192,192,192,0.3)",
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
              onClick={() => navigate("/login")}
            >
              Explore Platform{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        {/* Floating UI Cards */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-[500px]">
          <div
            className="glass-card p-6 rounded-lg rotate-3 translate-x-20 mb-6"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-[#1759FF]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 400,
                }}
              >
                AI_GEN_MODULE_01
              </span>
            </div>
            <div className="h-40 bg-[#262629]/50 rounded-sm mb-4"></div>
            <div
              className="flex justify-between text-[#C0C0C0]/50"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              <span>ANALYZING VOLUMES...</span>
              <span>89% COMPLETE</span>
            </div>
          </div>
          <div
            className="glass-card p-6 rounded-lg -rotate-6"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-[#1759FF]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                group
              </span>
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 400,
                }}
              >
                SPATIAL_COLLAB_v2
              </span>
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C0C0C0] border border-[#1A1A1A]"></div>
              <div className="w-8 h-8 rounded-full bg-[#262629] border border-[#1A1A1A]"></div>
              <div className="w-8 h-8 rounded-full bg-[#1759FF] border border-[#1A1A1A] flex items-center justify-center text-[10px] font-bold">
                +12
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ecosystem Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px]">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <span
            className="text-[#1759FF] mb-4 block"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            ARCHITECTURE UNIFIED
          </span>
          <h2
            className="text-white text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.02em] font-bold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            The Archtivity Ecosystem
          </h2>
        </div>
        <div className="relative flex justify-center items-center min-h-[320px] h-[min(85vw,480px)] sm:min-h-[400px] sm:h-[min(75vw,520px)] md:h-[560px] lg:h-[600px] w-full max-w-full overflow-hidden">
          {/* Central Core */}
          <div
            className="z-20 w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(23,89,255,0.4)",
            }}
          >
            <div className="text-center">
              <span
                className="material-symbols-outlined text-4xl text-white mb-2 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                token
              </span>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                CORE OS
              </div>
            </div>
          </div>
          {/* Orbiting circle */}
          <div
            className="absolute w-[min(90vw,280px)] h-[min(90vw,280px)] sm:w-[min(85vw,380px)] sm:h-[min(85vw,380px)] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full"
            style={{ border: "1px solid rgba(192,192,192,0.05)" }}
          ></div>
          {/* AI ENGINE */}
          <div className="absolute top-0 sm:-top-10 left-1/2 -translate-x-1/2 text-center group transition-transform hover:scale-110">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-2 mx-auto"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(192,192,192,0.1)",
              }}
            >
              <span
                className="material-symbols-outlined text-[#C0C0C0]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              AI ENGINE
            </div>
          </div>
          {/* PORTFOLIOS */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 text-center group transition-transform hover:scale-110">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-2 mx-auto"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(192,192,192,0.1)",
              }}
            >
              <span
                className="material-symbols-outlined text-[#C0C0C0]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                gallery_thumbnail
              </span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              PORTFOLIOS
            </div>
          </div>
          {/* COMMUNITY */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center group transition-transform hover:scale-110">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-2 mx-auto"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(192,192,192,0.1)",
              }}
            >
              <span
                className="material-symbols-outlined text-[#C0C0C0]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                diversity_3
              </span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              COMMUNITY
            </div>
          </div>
          {/* HIRING */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-center group transition-transform hover:scale-110">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-2 mx-auto"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(192,192,192,0.1)",
              }}
            >
              <span
                className="material-symbols-outlined text-[#C0C0C0]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                work
              </span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              HIRING
            </div>
          </div>
          {/* Decorative Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            viewBox="0 0 1000 600"
          >
            <line
              stroke="white"
              strokeDasharray="4 4"
              strokeWidth="0.5"
              x1="500"
              x2="500"
              y1="300"
              y2="50"
            ></line>
            <line
              stroke="white"
              strokeDasharray="4 4"
              strokeWidth="0.5"
              x1="500"
              x2="750"
              y1="300"
              y2="300"
            ></line>
            <line
              stroke="white"
              strokeDasharray="4 4"
              strokeWidth="0.5"
              x1="500"
              x2="500"
              y1="300"
              y2="550"
            ></line>
            <line
              stroke="white"
              strokeDasharray="4 4"
              strokeWidth="0.5"
              x1="500"
              x2="250"
              y1="300"
              y2="300"
            ></line>
          </svg>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px] bg-[#0e0e0e]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Assistant */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm hover:border-[#1759FF] transition-colors duration-500 cursor-pointer max-w-full"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div className="mb-12">
              <span className="material-symbols-outlined text-[#1759FF] text-4xl">
                auto_awesome
              </span>
            </div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              AI Assistant
            </h3>
            <p
              className="text-[#c4c7c8]"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              Generative site analysis, spatial optimization, and thermal
              modeling in seconds, not weeks.
            </p>
            <div
              className="mt-8 pt-6 flex items-center gap-2 text-[#1759FF]"
              style={{
                borderTop: "1px solid rgba(192,192,192,0.05)",
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
              }}
            >
              INIT_MODULE_01{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </div>
          </div>
          {/* Portfolio Showcase */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm hover:border-[#1759FF] transition-colors duration-500 cursor-pointer max-w-full"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div className="mb-12">
              <span className="material-symbols-outlined text-[#1759FF] text-4xl">
                view_quilt
              </span>
            </div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              Portfolio Showcase
            </h3>
            <p
              className="text-[#c4c7c8]"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              Stunning, high-fidelity digital galleries designed specifically
              for architectural narratives.
            </p>
            <div
              className="mt-8 pt-6 flex items-center gap-2 text-[#1759FF]"
              style={{
                borderTop: "1px solid rgba(192,192,192,0.05)",
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
              }}
            >
              INIT_MODULE_02{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </div>
          </div>
          {/* Global Community */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm hover:border-[#1759FF] transition-colors duration-500 cursor-pointer max-w-full"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div className="mb-12">
              <span className="material-symbols-outlined text-[#1759FF] text-4xl">
                hub
              </span>
            </div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "Manrope",
                fontSize: "24px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              Global Community
            </h3>
            <p
              className="text-[#c4c7c8]"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              Connect with world-leading firms and independent visionaries in a
              professional niche network.
            </p>
            <div
              className="mt-8 pt-6 flex items-center gap-2 text-[#1759FF]"
              style={{
                borderTop: "1px solid rgba(192,192,192,0.05)",
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
              }}
            >
              INIT_MODULE_03{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px]">
        <div className="px-4 sm:px-6 md:px-10 lg:px-[80px] mb-20">
          <h2
            className="text-white max-w-xl text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.02em] font-bold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            Visionary Portfolios
          </h2>
          <div
            className="w-full mt-8"
            style={{
              height: "1px",
              background: "rgba(192,192,192,0.1)",
            }}
          ></div>
        </div>
        <div className="grid grid-cols-12 gap-6 px-4 sm:px-6 md:px-10 lg:px-[80px]">
          <div className="col-span-12 md:col-span-8 h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group relative max-w-full">
            <img
              alt="Minimalist Architecture"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUhB1VaI51ydPzn55cMgwlOa_UtI1pGUhWbZcGwc_AlMOBsnw3bqalDTo5FDaue0cK0kWJQiauxO-XBV8GCoC-VVSP2uMVLHg4xsChDmcQoJ_Z0IrlDwQjJIvELGkXlUnUN50tEY-gZis-FNM5pI9VhqpyXHMU7yveBfYJcoI9Gft54pJkwy-LhgQojePRluFQ-k2fW-ibBgPMt6td1iYr8dOWSnQxYKKMt6R_7DIhHuj6MHwp9dtJ88uFeTcC2tYNU4xfKjTgA"
            />
            <div
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 p-4 sm:p-6 max-w-[calc(100%-2rem)]"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
              }}
            >
              <div
                className="text-[#C0C0C0] mb-2"
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                OSLO, NORWAY
              </div>
              <div
                className="text-white"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "24px",
                  lineHeight: "48px",
                  fontWeight: 600,
                }}
              >
                The Nordic Monolith
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6">
            <div className="overflow-hidden relative h-full">
              <img
                alt="Office Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Y6DV0Woi6ap657ajKcq3oEADvQXoNJ-h07oFxI5KkwaHbP-wrTdflM4r-v2HZUz3Me-a0Q11OUPLMtZZlsH8j-H0PBEiGPn2xETrf6JystWZmrBvTZJM5E7NL8pAd_7v8KHblppcPgKEFUdvSUBNBGpTkIcqDKmj8F-DxuRDWksHjwmwSk_nvAmc7Dxgkmu8fEcyAITGqoVo436F_03hXwCCIB6OZKIDneFZIOMpG6rWn0Rfxf4YsCR9OYjq5EVa2txaptFaQw"
              />
            </div>
            <div className="overflow-hidden relative h-full">
              <img
                alt="Blueprint Design"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJvrp8sf1UwMPM1sPthQ-vER76Z2wBrbttZy4sNH1rB4-KJCovFeUQV-Sw_JwTjjcctqOqo-xAQxfGqD0sdxj7qO1GBZXktVh0AuNSGSfDXswoRO3RIftSsUgE02N5daEM20fZbq-pyhVMY5I659zjLIy2C8cd-L5PlDhLTMKYgKxcrgwJEOQju-NOdluQgduywcsMmtQ-j-QH5xHBhVlbcKKXWo7g_L6JgDyeHfGu7qb0ysu-HuizfCSUSn_vTxl9fcSqSJVygg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI + Community Collaborative Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center max-w-full">
          <div>
            <span
              className="text-[#1759FF] mb-4 block"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              SYNTHETIC COLLABORATION
            </span>
            <h2
              className="text-white mb-8 text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] font-semibold break-words"
              style={{
                fontFamily: "Manrope",
              }}
            >
              Architects &amp; AI in Shared Spatial Environments
            </h2>
            <p
              className="text-[#c4c7c8] mb-8 text-base sm:text-lg lg:text-[20px] lg:leading-[32px] font-light"
              style={{
                fontFamily: "Inter",
              }}
            >
              Break the barrier between prompt and production. Our spatial
              engine allows teams to iterate on generative models in a
              real-time, 3D collaborative canvas.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#1759FF]">
                  stream
                </span>
                <div>
                  <div
                    className="text-white"
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 400,
                    }}
                  >
                    Real-time Node Mesh
                  </div>
                  <div
                    className="text-[#c4c7c8] text-sm"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    Visualize AI decision-making live on your site models.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#1759FF]">
                  forum
                </span>
                <div>
                  <div
                    className="text-white"
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 400,
                    }}
                  >
                    Contextual Feedback
                  </div>
                  <div
                    className="text-[#c4c7c8] text-sm"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    Tag specific coordinates with prompts or human critiques.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "rgba(23,89,255,0.1)",
                filter: "blur(120px)",
              }}
            ></div>
            <div
              className="relative aspect-square rounded-full flex items-center justify-center p-12 overflow-hidden"
              style={{
                background: "rgba(38, 38, 41, 0.4)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(192,192,192,0.1)",
              }}
            >
              <img
                alt="AI Collaboration"
                className="w-full h-full object-cover opacity-50 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPXanajkhiuhN6-uWX2SKuxVJOiaiPelVHTitii7onP_93MiaHFtlh1CSJ0IPljTPOSVaTmGtblEEH_5rNqTSkkS-UnLtoog2RiUQvaLTFZN60Af5_mmqcIJFWLBNPW9i4xi1D96b6QIzbwkbDQuxMyfazYuvtBqUETdMh_cryAI3EFVyrQRmePBZxCRoGDNm-9cHiDyefxoV5ayTRYLo2Uvff1IOGVIVePTD5SmarqEJWir8Tu94jmwYzlaMUCYTaFNIzwAI_g"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mobile Mockups */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] bg-[#201f1f] overflow-hidden">
        <div className="px-4 sm:px-6 md:px-10 lg:px-[80px] text-center mb-20">
          <h2
            className="text-white text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] font-semibold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            The Studio in Your Pocket
          </h2>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-full px-4 sm:px-6 md:px-10 lg:px-0 overflow-hidden">
          {/* Light Mode Mockup */}
          <div className="w-full max-w-[300px] h-[min(600px,70vh)] sm:h-[600px] bg-[#F5F5F5] rounded-[40px] border-[8px] border-[#262629] relative shadow-2xl shrink-0 scale-90 md:scale-100 mx-auto">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#262629] rounded-full"></div>
            <div className="p-8 text-[#1A1A1A] h-full flex flex-col pt-12">
              <div
                className="mb-4"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Feed
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-[#C0C0C0]/20 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-[#C0C0C0]/30 rounded"></div>
                <div className="h-4 w-1/2 bg-[#C0C0C0]/30 rounded"></div>
              </div>
              <div
                className="mt-auto flex justify-between px-4 py-4"
                style={{ borderTop: "1px solid rgba(192,192,192,0.2)" }}
              >
                <span className="material-symbols-outlined">home</span>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">add_box</span>
                <span className="material-symbols-outlined">person</span>
              </div>
            </div>
          </div>
          {/* Dark Mode Mockup (Active) */}
          <div
            className="w-full max-w-[300px] h-[min(600px,70vh)] sm:h-[600px] bg-[#1A1A1A] rounded-[40px] border-[8px] border-[#262629] relative shrink-0 z-10 mx-auto"
            style={{ boxShadow: "0 0 50px rgba(23,89,255,0.2)" }}
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#262629] rounded-full"></div>
            <div className="p-8 text-[#F5F5F5] h-full flex flex-col pt-12">
              <div className="flex justify-between items-center mb-6">
                <div
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  AI Co-pilot
                </div>
                <span className="material-symbols-outlined text-[#1759FF]">
                  bolt
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div
                  className="p-4 rounded-xl text-xs"
                  style={{
                    background: "rgba(38, 38, 41, 0.4)",
                    backdropFilter: "blur(32px)",
                    border: "1px solid rgba(23,89,255,0.3)",
                    fontFamily: "JetBrains Mono",
                    fontSize: "12px",
                  }}
                >
                  "Optimize window placement for maximum solar gain on East
                  facade."
                </div>
                <div
                  className="p-4 rounded-xl text-xs"
                  style={{
                    background: "rgba(23,89,255,0.2)",
                    borderLeft: "2px solid #1759FF",
                    fontFamily: "JetBrains Mono",
                    fontSize: "12px",
                  }}
                >
                  Analyzing... Spatial geometry suggests 12% increase in
                  efficiency with 15deg rotation.
                </div>
              </div>
              <div className="h-10 bg-[#262629] rounded-full flex items-center px-4 mb-4">
                <span className="text-[10px] text-[#C0C0C0]">
                  Type a command...
                </span>
              </div>
            </div>
          </div>
          {/* Light Mode Mockup 2 */}
          <div className="w-full max-w-[300px] h-[min(600px,70vh)] sm:h-[600px] bg-[#F5F5F5] rounded-[40px] border-[8px] border-[#262629] relative shadow-2xl shrink-0 scale-90 md:scale-100 mx-auto">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#262629] rounded-full"></div>
            <div className="p-8 text-[#1A1A1A] h-full flex flex-col pt-12">
              <div
                className="mb-4"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Profile
              </div>
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-[#C0C0C0]/30 rounded-full mb-2"></div>
                <div className="font-bold">Studio.Avant</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-[#C0C0C0]/10 rounded"></div>
                <div className="aspect-square bg-[#C0C0C0]/10 rounded"></div>
                <div className="aspect-square bg-[#C0C0C0]/10 rounded"></div>
                <div className="aspect-square bg-[#C0C0C0]/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px]">
        <div className="text-center mb-20">
          <h2
            className="text-white text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.02em] font-bold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            Tiered For Every Scale
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Student */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm flex flex-col max-w-full min-w-0"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div
              className="text-[#C0C0C0] mb-4"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              STUDENT
            </div>
            <div
              className="text-white mb-8"
              style={{
                fontFamily: "Manrope",
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              $0{" "}
              <span className="text-sm font-normal text-[#C0C0C0]">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Portfolio hosting
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Basic AI tools
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Community access
              </li>
            </ul>
            <button
              className="w-full py-3 font-label-caps text-label-caps hover:border-white transition-colors"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                border: "1px solid rgba(192,192,192,0.2)",
              }}
            >
              JOIN FREE
            </button>
          </div>
          {/* Creator (Popular) */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm flex flex-col relative max-w-full min-w-0"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(23,89,255,0.3)",
            }}
          >
            <div
              className="absolute top-0 right-0 bg-[#1759FF] text-white px-3 py-1"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              POPULAR
            </div>
            <div
              className="text-[#1759FF] mb-4"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              CREATOR
            </div>
            <div
              className="text-white mb-8"
              style={{
                fontFamily: "Manrope",
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              $29{" "}
              <span className="text-sm font-normal text-[#C0C0C0]">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Unlimited AI queries
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Custom domains
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Advanced rendering
              </li>
            </ul>
            <button
              className="w-full py-3 bg-[#F5F5F5] text-[#1A1A1A]"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
              onClick={() => navigate("/login")}
            >
              GET STARTED
            </button>
          </div>
          {/* Studio */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm flex flex-col max-w-full min-w-0"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div
              className="text-[#C0C0C0] mb-4"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              STUDIO
            </div>
            <div
              className="text-white mb-8"
              style={{
                fontFamily: "Manrope",
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              $149{" "}
              <span className="text-sm font-normal text-[#C0C0C0]">/mo</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Team collaboration
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                API access
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Branding control
              </li>
            </ul>
            <button
              className="w-full py-3 hover:border-white transition-colors"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                border: "1px solid rgba(192,192,192,0.2)",
              }}
            >
              CONTACT SALES
            </button>
          </div>
          {/* Enterprise */}
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-sm flex flex-col max-w-full min-w-0"
            style={{
              background: "rgba(38, 38, 41, 0.4)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(192,192,192,0.1)",
            }}
          >
            <div
              className="text-[#C0C0C0] mb-4"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              ENTERPRISE
            </div>
            <div
              className="text-white mb-8"
              style={{
                fontFamily: "Manrope",
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
            >
              CUSTOM
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Custom AI training
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                Dedicated support
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C0C0C0]">
                <span className="material-symbols-outlined text-sm text-[#1759FF]">
                  check
                </span>{" "}
                On-prem deployment
              </li>
            </ul>
            <button
              className="w-full py-3 hover:border-white transition-colors"
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                border: "1px solid rgba(192,192,192,0.2)",
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px] text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Future Architecture"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkIF5oKPHh2DsX6VgP8FDriTMRv21z1ebIVquCVDqUq2Pk3Svcx7YDeSeReywh7NAJkr3t8gYgQ4extatZ4FH_3jreZiw0P3lj2enyx3rWAnJ5qxIA4uxvr0ed2-9RlfU2eEyDfR--hAFBY4p_ZOw31eZMUkJuFMJDpS_mRJTQxRzH1JAqdmAfjWqZlL5VMVyqvQK4HS3KUF12oP9BJk1C_VI2EU04mEafUW1LhIygLWJIPooOQplTAho7m2bwJwk96iUiKQ8l6w"
          />
        </div>
        <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 max-w-full">
          <h2
            className="text-white mb-6 sm:mb-8 text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.02em] font-bold break-words"
            style={{
              fontFamily: "Manrope",
            }}
          >
            Built For The Future
            <br />
            Of Architecture.
          </h2>
          <button
            className="bg-[#1759FF] text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-sm hover:scale-105 transition-all text-sm sm:text-xl lg:text-[40px] lg:leading-[48px] font-semibold max-w-full w-full sm:w-auto inline-block"
            style={{
              fontFamily: "JetBrains Mono",
              boxShadow: "0 0 30px rgba(23,89,255,0.4)",
            }}
            onClick={() => navigate("/signup")}
          >
            Join the Movement
          </button>
          <div
            className="mt-12 text-[#C0C0C0]/50 uppercase tracking-widest text-xs"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            EST. 2024 / ARCHTIVITY_OS_v1.0
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full py-16 sm:py-24 md:py-32 lg:py-[160px] px-4 sm:px-6 md:px-10 lg:px-[80px] grid grid-cols-12 gap-6 sm:gap-8 bg-[#0e0e0e] max-w-full"
        style={{ borderTop: "1px solid rgba(192,192,192,0.05)" }}
      >
        <div className="col-span-12 md:col-span-4">
          <div
            className="font-bold text-white mb-6 text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px]"
            style={{
              fontFamily: "Manrope",
            }}
          >
            Archtivity
          </div>
          <p
            className="text-[#c4c7c8] max-w-[300px]"
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            © 2024 Archtivity. Built for the architectural avant-garde.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 space-y-4 min-w-0">
          <div
            className="text-white mb-6"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            PLATFORM
          </div>
          {["AI Engine", "Portfolios", "Showcase"].map((item) => (
            <a
              key={item}
              className="block text-[#c4c7c8] hover:text-[#1759FF] hover:translate-x-1 transition-all duration-200"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 space-y-4 min-w-0">
          <div
            className="text-white mb-6"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            COMPANY
          </div>
          {["About", "Community", "Careers"].map((item) => (
            <a
              key={item}
              className="block text-[#c4c7c8] hover:text-[#1759FF] hover:translate-x-1 transition-all duration-200"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 space-y-4 min-w-0">
          <div
            className="text-white mb-6"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            LEGAL
          </div>
          {["Privacy", "Terms", "Security"].map((item) => (
            <a
              key={item}
              className="block text-[#c4c7c8] hover:text-[#1759FF] hover:translate-x-1 transition-all duration-200"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 space-y-4 min-w-0">
          <div
            className="text-white mb-6"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            SOCIAL
          </div>
          {["Instagram", "LinkedIn", "X / Twitter"].map((item) => (
            <a
              key={item}
              className="block text-[#c4c7c8] hover:text-[#1759FF] hover:translate-x-1 transition-all duration-200"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
