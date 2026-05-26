import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─── Material Symbols font injection ──────────────────────────────────────── */
const materialSymbolsStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    user-select: none;
  }
  .blueprint-grid {
    background-image: radial-gradient(circle, #484848 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.05;
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  body { overflow-x: hidden; }
`;

/* ─── Icon helper ────────────────────────────────────────────────────────── */
interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}
const Icon: React.FC<IconProps> = ({ name, className = "", fill = false, style }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      ...style,
    }}
  >
    {name}
  </span>
);

/* ─── Filter chip data ────────────────────────────────────────────────────── */
const FILTERS = ["Trending", "Parametric", "Sustainable", "Residential", "Brutalism"];

/* ─── ArchtivityHome ─────────────────────────────────────────────────────── */
const ArchtivityHome: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Trending");

  return (
    <>
      {/* Inject styles */}
      <style>{materialSymbolsStyle}</style>

      <div
        className="min-h-screen text-white relative selection:bg-primary selection:text-on-primary"
        style={{ backgroundColor: "#0e0e0e", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}
      >
        {/* Blueprint dot grid */}
        <div className="fixed inset-0 blueprint-grid pointer-events-none z-0" />

        {/* ── TopNavBar ──────────────────────────────────────────────────────── */}
        <nav
          className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 h-16 sm:h-20"
          style={{
            background: "rgba(14,14,14,0.4)",
            backdropFilter: "blur(48px)",
            WebkitBackdropFilter: "blur(48px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          {/* Left: brand + nav */}
          <div className="flex items-center gap-6 sm:gap-12">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="text-xl sm:text-2xl font-bold tracking-tighter text-white bg-transparent border-none cursor-pointer p-0"
            >
              Constrag
            </button>
            <div className="hidden md:flex gap-6 sm:gap-8 items-center text-sm sm:text-base">
              <button
                type="button"
                onClick={() => navigate("/archtivity")}
                className="text-white pb-1 bg-transparent border-none cursor-pointer p-0"
                style={{ borderBottom: "2px solid #a7c8ff" }}
              >
                Archtivity
              </button>
              <button
                type="button"
                onClick={() => navigate("/toolkit")}
                className="text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                Toolkit
              </button>
            </div>
          </div>

          {/* Right: search + actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Search — hidden on very small screens */}
            <div
              className="hidden sm:flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Icon name="search" className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }} />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/20 w-32 md:w-48 outline-none"
                placeholder="Explore architectural feats..."
                type="text"
              />
            </div>

            {/* Icon buttons */}
            <button
              className="rounded-full p-2 transition-all duration-300 active:scale-95 hover:bg-white/10"
            >
              <Icon name="notifications" />
            </button>
            <button
              className="rounded-full p-2 transition-all duration-300 active:scale-95 hover:bg-white/10"
            >
              <Icon name="account_circle" />
            </button>

            {/* Go Pro */}
            <button
              className="px-4 sm:px-6 py-2 rounded-full font-bold text-sm tracking-tight active:scale-95 transition-all"
              style={{
                background: "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)",
                color: "#00407d",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Go Pro
            </button>
          </div>
        </nav>

        {/* ── Main Content ──────────────────────────────────────────────────── */}
        <main
          className="pt-28 sm:pt-32 px-4 sm:px-6 pb-32 lg:pb-12 min-h-screen relative z-10 mx-auto w-full"
          style={{ maxWidth: "1400px" }}
        >
          {/* ── Hero Header ─────────────────────────────────────────────────── */}
          <header className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
              <div>
                <span
                  className="text-xs font-bold uppercase block mb-3 sm:mb-4"
                  style={{
                    color: "#a7c8ff",
                    letterSpacing: "0.3em",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Community Feed
                </span>
                <h1
                  className="font-extrabold tracking-tighter leading-none max-w-2xl"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2.5rem, 7vw, 3.75rem)",
                  }}
                >
                  Inspiring the next{" "}
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>monolith.</span>
                </h1>
              </div>

              {/* Avatar stack */}
              <div className="flex gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDT6j3gmigtGHba0kwdPbC3BkUPdK__Je_9Xxi4E17AbCYM8MyshbBMHiPKp9zScnf6-seAKrLzZCLCjAGbOwH1qkDe0QigH4K5pkS5Xg52RB4D8kdAiYeiGfXbzMnaB9qyZvK0s1RaTzzm0QvB2mpcAx7kgYBFOIcP-RxTFbRdOaz5kQyxXeez4W1peFCwVU7xSHNhm9_b4GY-AjVz1fglvIEyhdEa3TThTMo-ywM9uc6ADfMBAcdkveJk8c8FCy_8LY1zMCyh0g",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXP_mzUmfucSvfimk7oG-SWItjM9PtS4xSYo-eiNBFU3KNG8JKmjISc2zQyPpwgdTXkruYy4FfymQCCbXWKcKwXVA0qmjfACVaiLUiPaRsli16GbWPqS8m9lkJJY4k9ZPNzcAvrWX3GSoCxNmeL9re-UdpnUPQgZgKP2rvUYkWz-pwC-Xww5yaJ2Bd4WQ-5czsz-2hgYiqlIHZYES4X_X1sCgLfXGl5LQoh4EonkL5sUvyLypNfPU-T9sJ2Cg2QI9q3YUjP6g3bw",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LSmqvjAwY0SAiGi8786Gvq6ghs0gtFHdml--j4bMaCojySC0iM2G875FhimK_bg0Q5lnAtL62pW9ktaxyXqSa2SEw_53T158zd7kAunzf_tqbdvBWTT5X3-mzVgWv_T7bv-i39S2KPmf7mboo7yfL2rdlTcm7Mk2a-2u5LKQxwbALjDW7R4qnrjiIsFcbZ4bc4edv6Fr-Y5ayfqtxEoBiFTR-UtAlrHV4SlRxN0GWVkpuOYrAOPP7WZ19dDHWG2LFTjCoImu0Q",
                  ].map((src, i) => (
                    <img
                      key={i}
                      alt=""
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                      src={src}
                      style={{ border: "2px solid #0e0e0e" }}
                    />
                  ))}
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      border: "2px solid #0e0e0e",
                      backgroundColor: "#1a1919",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    +2.4k
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ── Filter Chips ─────────────────────────────────────────────────── */}
          <div className="flex gap-3 mb-10 sm:mb-12 overflow-x-auto pb-4 no-scrollbar">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 sm:px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  backgroundColor:
                    activeFilter === f ? "#ffffff" : "#1a1919",
                  color:
                    activeFilter === f ? "#000000" : "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== f) {
                    (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2c2c2c";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== f) {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1919";
                  }
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ── Bento Feed Grid ──────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

            {/* Card 1 — Large (spans 2 cols on xl) */}
            <div
              className="xl:col-span-2 group relative overflow-hidden transition-all hover:scale-[1.01]"
              style={{
                borderRadius: "1rem",
                backgroundColor: "#1a1919",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#2c2c2c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1a1919";
              }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  alt="Skyscraper Reflection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHNMubGofqGuzjGK8T22tgyCiErOsfJwLoULWLsDNkDFN7h8Pn6dVuRSpuT4DfX9wBGBxv7I2umlaWBfJwtY7DTJ4-uXcxOyBciUOR5TkuMzZxgdF_45jCJ05JDSEQASJPtWKaKtiVBVZOOgCEeZqBGGs-nqj8LNFIpyFNdhMg08XjiE0i_k9QypLTXpxSI6gYfeLKGPXgGaXHR-RWvimMHmLxW3QtEyI547Xc8w0rKDegyEIG5xZayDig2xnZENDY-jnVVIxeUQ"
                />
              </div>
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
                  <span
                    className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(167,200,255,0.2)",
                      backdropFilter: "blur(12px)",
                      color: "#a7c8ff",
                      border: "1px solid rgba(167,200,255,0.3)",
                    }}
                  >
                    Concept
                  </span>
                  <span className="text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Posted by @v_arch_labs • 2h ago
                  </span>
                </div>
                <h3
                  className="font-extrabold tracking-tighter mb-4 text-white leading-tight"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
                  }}
                >
                  The Luminous Monolith: Urban Light Diffusion
                </h3>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex gap-4 sm:gap-6">
                    <button
                      className="flex items-center gap-2 transition-colors"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a7c8ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                      <Icon name="favorite" style={{ fontSize: "20px" }} />
                      <span className="text-sm font-bold">12.4k</span>
                    </button>
                    <button
                      className="flex items-center gap-2 transition-colors"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a7c8ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >
                      <Icon name="chat_bubble" style={{ fontSize: "20px" }} />
                      <span className="text-sm font-bold">892</span>
                    </button>
                  </div>
                  <button
                    className="p-3 rounded-full text-white transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(16px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    <Icon name="bookmark" style={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 — Brutalist Zen */}
            <SmallCard
              tag="Residential"
              title="Brutalist Zen: Silence in Structure"
              author="@structure_flow"
              points="8.2k pts"
              avatarColor="#004788"
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAqHvaxJehPHniGZQRvmU9ZqLefRjfpBnwVzXLDDTFvidSQ3VBNUN2_BhEoQ3x712WIS97FYv5y_aiSejBYPvPjB2NSj8T8izO_9J5tT92K8PkGUVHm9PUWrvC2re8J1VJdWVXoqQ35_1JOQjaFyF8R9KJ0wlauq1LO3d1l8rIFl-m4bozxxp7cFQ1KKAwsadSAXF_KyYC_343ZkIZWUyKh-9JJN_XkN9-zT-Fwf-Hg8CDMn8J0qEO_5kJnGGVbXxs4BX6VTt_KGA"
              imgAlt="Concrete Minimalist interior"
            />

            {/* Card 3 — Solar Synthesis */}
            <SmallCard
              tag="Sustainable"
              title="Solar Synthesis: Powering Beauty"
              author="@green_print"
              points="5.1k pts"
              avatarColor="#3b3b3d"
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQsdUXTklq314UzpbqYhV17_Gv3h1yxKk3t_ujbklwGCP3n6LvYn5aTQZxyoAkGHm8W_W7WAcoxrGb1xFxyBXb1e_UlzYoMfc8aDIypzdkvgC0YnZy8DhvYBfAuD3F-mbpcYe5dWwBSckTfdiOwC34Hu9XvyEcum5xDuzX8xPrYVYjABNPxE0o8mvwrZnur5Ed3QL0jqXpmOjScmryXAgeKaiZ4Vv6q6vtRMPy_rYx8rNTaHftNwNDrOKeGZBkmXzz9S_Ypd39g"
              imgAlt="Modern eco-friendly house"
            />

            {/* Card 4 — Large split (spans 2 cols on xl) */}
            <div
              className="xl:col-span-2 group relative overflow-hidden transition-all hover:scale-[1.01]"
              style={{
                borderRadius: "1rem",
                backgroundColor: "#1a1919",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#2c2c2c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1a1919";
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image half */}
                <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <img
                    alt="Office Lobby"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCazBd17i6sUVJ1GuSzieGrUh4tFr8HzZaDShFhPmlW9P3wXPbDjtF2Yb2CwAlTutpqB1ZVu7RcmB1K_jwIpB0qUAZ43ZZD1hlzqGPNkOIqsKV4wZoQgIN9y_xhdxcg4GeYCx33vaHUq3f83bdj58GgavbNT07hhua-BTFR9cNIq3oLT0uhz7k7Cjbnzt_ckjzsUPRJZWkfLwXhiqgBqlX3jZQWlcH5xAaa5A6XPkXHmhgbNBR2Oy8mj-InfTXyMk-BovrQiMLzew"
                  />
                </div>

                {/* Text half */}
                <div className="p-6 sm:p-10 flex flex-col justify-between gap-6">
                  <div>
                    <span
                      className="font-bold text-[10px] uppercase block mb-3 sm:mb-4"
                      style={{
                        color: "#a7c8ff",
                        letterSpacing: "0.3em",
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      Workplace 2.0
                    </span>
                    <h3
                      className="font-bold tracking-tighter leading-tight mb-4 sm:mb-6 text-white"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                      }}
                    >
                      Redefining Vertical Flow in Corporate Hubs
                    </h3>
                    <p
                      className="leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Exploring the intersection of movement and transparency in the modern
                      headquarters. How spatial flow affects collaborative energy.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Icon name="star" fill style={{ color: "#a7c8ff", fontSize: "20px" }} />
                      <span className="text-sm font-bold text-white">Editors Choice</span>
                    </div>
                    <span
                      className="h-4 w-px hidden sm:block"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    />
                    <div className="flex items-center gap-2">
                      <Icon name="visibility" style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px" }} />
                      <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                        14.3k views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ── Mobile Bottom Nav ─────────────────────────────────────────────── */}
        <nav
          className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex justify-around items-center py-3 px-6 z-50 w-[90%] max-w-md"
          style={{
            background: "rgba(26,25,25,0.6)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderRadius: "3rem",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          {[
            { icon: "grid_view", active: true },
            { icon: "search", active: false },
            { icon: "draw", active: false },
            { icon: "person", active: false },
          ].map(({ icon, active }) => (
            <button
              key={icon}
              type="button"
              className="flex flex-col items-center justify-center active:scale-90 transition-all duration-150 bg-transparent border-none cursor-pointer p-0"
              style={{
                ...(active
                  ? {
                      backgroundColor: "#a7c8ff",
                      color: "#004788",
                      borderRadius: "9999px",
                      width: "48px",
                      height: "48px",
                    }
                  : {
                      color: "rgba(255,255,255,0.4)",
                      width: "48px",
                      height: "48px",
                    }),
              }}
            >
              <Icon name={icon} />
            </button>
          ))}
        </nav>

        {/* ── FAB ──────────────────────────────────────────────────────────── */}
        <button
          className="fixed bottom-8 right-4 sm:bottom-10 sm:right-10 z-50 group w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95"
          style={{ backgroundColor: "#a7c8ff", color: "#00407d" }}
        >
          <Icon
            name="add"
            style={{
              fontSize: "28px",
              transition: "transform 0.3s",
            }}
            className="group-hover:rotate-90"
          />
        </button>
      </div>
    </>
  );
};

/* ─── SmallCard sub-component ────────────────────────────────────────────── */
interface SmallCardProps {
  tag: string;
  title: string;
  author: string;
  points: string;
  avatarColor: string;
  imgSrc: string;
  imgAlt: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
  tag,
  title,
  author,
  points,
  avatarColor,
  imgSrc,
  imgAlt,
}) => (
  <div
    className="group relative overflow-hidden transition-all hover:scale-[1.01]"
    style={{
      borderRadius: "1rem",
      backgroundColor: "#1a1919",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.backgroundColor = "#2c2c2c";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1a1919";
    }}
  >
    {/* Image */}
    <div className="aspect-square w-full overflow-hidden relative">
      <img
        alt={imgAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={imgSrc}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          opacity: 0.6,
        }}
      />
    </div>

    {/* Card body */}
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {tag}
        </span>
      </div>
      <h4
        className="font-bold text-white mb-5 sm:mb-6 leading-snug"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
        }}
      >
        {title}
      </h4>
      <div
        className="flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
            style={{ backgroundColor: avatarColor }}
          />
          <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            {author}
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color: "#a7c8ff" }}>
          {points}
        </span>
      </div>
    </div>
  </div>
);

export default ArchtivityHome;
