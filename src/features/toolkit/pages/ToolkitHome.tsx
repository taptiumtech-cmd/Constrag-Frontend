import React from "react";
import { useNavigate } from "react-router-dom";

const ToolkitHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-on-surface font-body"
      style={{
        backgroundColor: "#0e0e0e",
        color: "#e7e5e4",
        fontFamily: "'Inter', sans-serif",
        backgroundImage:
          "linear-gradient(rgba(72,72,72,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(72,72,72,0.05) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
          font-feature-settings: 'liga';
          -webkit-font-feature-settings: 'liga';
        }
      `}</style>
      {/* ── TopNavBar ──────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 w-full z-50 shadow-2xl"
        style={{
          backgroundColor: "rgba(38,38,38,0.4)",
          backdropFilter: "blur(48px)",
          WebkitBackdropFilter: "blur(48px)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-12 py-4 w-full max-w-[1920px] mx-auto gap-y-3">
          {/* Brand + nav links */}
          <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="font-headline font-bold tracking-tighter text-on-surface text-lg sm:text-xl bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#e7e5e4" }}
            >
              Constrag
            </button>
            <div className="flex gap-4 sm:gap-6 items-center">
              <button
                type="button"
                onClick={() => navigate("/archtivity")}
                className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-sm sm:text-base bg-transparent border-none cursor-pointer p-0"
                style={{ color: "#acabaa" }}
              >
                Archtivity
              </button>
              <button
                type="button"
                onClick={() => navigate("/toolkit")}
                className="font-semibold pb-1 text-sm sm:text-base bg-transparent border-none cursor-pointer p-0"
                style={{
                  color: "#a7c8ff",
                  borderBottom: "2px solid #a7c8ff",
                }}
              >
                Toolkit
              </button>
            </div>
          </div>

          {/* Search & actions */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <div className="relative hidden lg:block">
              <input
                className="border-none focus:ring-0 text-sm px-4 py-2 w-48 xl:w-64 rounded-lg transition-all"
                placeholder="Search toolkit..."
                type="text"
                style={{
                  backgroundColor: "#131313",
                  color: "#e7e5e4",
                  outline: "none",
                }}
              />
              <span
                className="material-symbols-outlined absolute right-3 top-2 text-lg"
                style={{
                  fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  color: "#acabaa",
                  fontSize: "20px",
                }}
              >
                search
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className="px-4 sm:px-6 py-2 rounded-full font-label text-xs sm:text-sm font-semibold transition-transform active:scale-90 scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)",
                  color: "#00407d",
                }}
              >
                Go Pro
              </button>
              <button
                className="hover:text-primary transition-colors duration-300 relative"
                style={{ color: "#acabaa" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  notifications
                </span>
                <span
                  className="absolute top-0 right-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#a7c8ff" }}
                />
              </button>
              <button
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 hover:border-primary transition-all"
                style={{ borderColor: "#484848" }}
              >
                <img
                  alt="User profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLAu1PyoupVJJKDZUcYYAVfvzlTS3luv4upQHbNvZDiDS7i5zbZiEA3JJG4EWFYi2HuXCDztjTmuTapdy0ilrLeF8VJjyIRDRT11_5HG-Q8UactsEhvEY_F0xPss2ATJCN3Ayd525NGr5BCAPQJrUAKmOhCPSrodWbFk-Aio4oJgzmTFbiSB30Qmje2x9rpVXpXs21_5g5en_ggAjDIgZ9yIJTwPyVl2889t6z68l9xR_Rzrx0wsSbGU2hZD-LgXa7GLQDQ0V0UeZ"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Main ────────────────────────────────────────────────────────────────── */}
      <main className="pt-28 sm:pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-[1920px] mx-auto">

        {/* ── Hero Section ──────────────────────────────────────────────────────── */}
        <section className="mb-16 sm:mb-20 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1
              className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-on-surface mb-6 leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#e7e5e4" }}
            >
              Professional{" "}
              <span style={{ color: "#a7c8ff" }}>Architectural</span> Toolkit
            </h1>
            <p
              className="font-body text-base sm:text-lg xl:text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{ color: "#acabaa" }}
            >
              Access AI-powered workflows, technical analysis, visualization tools
              and project intelligence from one unified workspace.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              {/* Badge: Active Modules */}
              <span
                className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-label uppercase tracking-widest flex items-center gap-2"
                style={{
                  background: "rgba(26,25,25,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(72,72,72,0.2)",
                  color: "#a7c8ff",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#a7c8ff" }}
                />
                5 Active Modules
              </span>
              {/* Badge: AI Workflow */}
              <span
                className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-label uppercase tracking-widest flex items-center gap-2"
                style={{
                  background: "rgba(26,25,25,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(72,72,72,0.2)",
                  color: "#acabaa",
                }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{
                    fontVariationSettings:
                      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                    fontSize: "16px",
                  }}
                >
                  auto_awesome
                </span>
                AI-Powered Workflow
              </span>
              {/* Badge: Enterprise Ready */}
              <span
                className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-label uppercase tracking-widest flex items-center gap-2"
                style={{
                  background: "rgba(26,25,25,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(72,72,72,0.2)",
                  color: "#acabaa",
                }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{
                    fontVariationSettings:
                      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                    fontSize: "16px",
                  }}
                >
                  verified_user
                </span>
                Enterprise Ready
              </span>
            </div>
          </div>
        </section>

        {/* ── Module Grid ───────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">

          {/* Feasibility AI */}
          <ModuleCard
            tag="INTELLIGENCE"
            title="Feasibility AI"
            description="Evaluate project viability and planning potential using AI insights."
            buttonLabel="Run Feasibility Study"
            buttonIcon="monitoring"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBZG0zY_9IJi95wzU7wDwnl01-9heak_YhLgSzOdG6KbNl7c5GSaAVlHyLcsyfJfXMhOY_aBMQeYNSfwxjxEaW-G1VtzX40PilN9ad7yo41VwmDtXn8rG_RBCN9LnqGen54CkrU6sjfembvZ15B8MlyLWwSFcV5zL6CfLuTHcXEX__CJqzOYwDlOFcvB5EDg1t96u7-l1ZKsi3fmBdXiSZ9szY3F1Yq9oVRb3EefNP5Aa-t98UY9riVRwAVmdl61AWSFr98iKDVqeNu"
            imgAlt="Financial analytics dashboard"
            onButtonClick={() => navigate("/feasibility")}
          />

          {/* Site Analysis */}
          <ModuleCard
            tag="ANALYTICS"
            title="Site Analysis"
            description="Analyze zoning, climate, sunlight and site constraints."
            buttonLabel="Open Site Analysis"
            buttonIcon="map"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRWho8q0VtArq-WhlNB2bhJyxV5PpqL6jG_hCoPGc76_wW_aNmDoiIKDr4QBLF882ZJnicSrBOOhPDTdqWtZt03mjHC8Xo-pzVKLroo6fnt_SdtVvOvv9rqlIZOuYBsNPb_7CHBpiNRWT5AHzMqPwlzFcxsAoOTE8rzxj1EiG_ryeZJwTxC0DK0EXwjdPn0g9xpxL1UzOcr4DDy0y4Ei4n2hxaPe1NLlsVuLNc-9CmMl74Zs5lMZ0zvhRH8fU8L4AD-UxLdkeYqrF"
            imgAlt="Satellite map data layers"
            onButtonClick={() => navigate("/site-analysis")}
          />

          {/* AI Critique */}
          <ModuleCard
            tag="AI POWERED"
            title="AI Critique"
            description="Receive AI-driven architectural feedback and design recommendations."
            buttonLabel="Launch AI Critique"
            buttonIcon="psychology"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCINvEexF5EWNRByeXBYpyKQWJh1F4cKY4cuKilEI4ePGhN6t-P7scqoqI5bmAsx7ZIEC0pXLlUf9FEn32J0QZjeUTQRsWzZS6DtDQK0M5RDUC8miEHVGcCdgByMWV1XXkkeeQZVEmNQNbmCqeM9tVCF0yrtq6474awhnDft5GsKhVM_3_jsbV1gihyD9_3ccoQT8fIph4FS0hasq1U7qZS8cjztXAtfsuNP9ORwe9BFG1V5ZzhVbwHr7ZgRDNTeyFV5sSFk_ydZl3U"
            imgAlt="Architectural blueprint holographic"
            onButtonClick={() => navigate("/ai-critique")}
          />

          {/* Renders */}
          <ModuleCard
            tag="VISUALIZATION"
            title="Renders"
            description="Create architectural renders and presentation-ready visualizations."
            buttonLabel="Open Render Studio"
            buttonIcon="view_in_ar"
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBtudE64QWGTGGBty35dtPRAXQNHBem0zSlhAnH0rmenDFnTUdxt99szLzzhlMeEnDJ74CsrJ7qbnH9TkJz7KCBhHNF577m5VnPeo1-MhVnQ3KpF7HpJVckOyeyL8tNzpcfLjmPGUJGy_lARt-ftuh7pITHlXArfPKB_-yE4W8dNi6xiGkp-ANB8TCR-_XnBL4HDXcwiN-ch6qY6V2dJGXaAzrAs2cLiOhhwNlZ8yaGxmNT4Zu7HhXHHNrIS7izSKHebsnY_VNwCgoF"
            imgAlt="Photorealistic architectural render"
            onButtonClick={() => navigate("/renders")}
          />

          {/* Research — full-width row */}
          <div className="xl:col-span-2 flex justify-center">
            <div className="w-full max-w-4xl">
              <ModuleCard
                tag="KNOWLEDGE"
                title="Research"
                description="Explore case studies, regulations, references and design research."
                buttonLabel="Start Research"
                buttonIcon="search_insights"
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCbV0BV_12yoW8fO4ZJD1oWvLT7MGz6GLfNQOhyAv_-tL0qZEGdH0ydBlYjzA_XPnsezAKuhzO94R5_aK4lg4pUAzzkLugr8EYfwB1UyR12b5NGz3B6gBoqdnaFlrOh4o7emIoMucLiqpolInkNN3rLz7WMLiejzz2BrMtzWBSJ7AcYMiLnXwTk3LjkqFBqHcaVS1E4crjGMGXRI5LeDllNdX5UY2ABxlXQ0hz7CMaNK2zDaRB5PqVif4E2r9--28_fX8iRYFOLi3ne"
                imgAlt="Organized architectural reports"
                onButtonClick={() => navigate("/research")}
              />
            </div>
          </div>
        </section>

        {/* ── Recent Activity ───────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4 flex-wrap">
            <h2
              className="font-headline text-xl sm:text-2xl font-bold text-on-surface"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#e7e5e4" }}
            >
              Recent Activity
            </h2>
            <button
              className="font-label text-xs sm:text-sm uppercase tracking-widest hover:underline transition-all"
              style={{ color: "#a7c8ff" }}
            >
              View All Activity
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <ActivityRow
              icon="apartment"
              title="Skyline Tower"
              subtitle="Today • Design Development phase"
              status="In Progress"
              statusColor="#a7c8ff"
              statusBg="rgba(167,200,255,0.1)"
              statusBorder="rgba(167,200,255,0.2)"
            />
            <ActivityRow
              icon="location_city"
              title="Urban Mixed Use"
              subtitle="Yesterday • Awaiting AI Site Review"
              status="Reviewing"
              statusColor="#656667"
              statusBg="rgba(101,102,103,0.1)"
              statusBorder="rgba(101,102,103,0.2)"
            />
            <ActivityRow
              icon="home_work"
              title="Coastal Residence"
              subtitle="2 days ago • Final BIM Export completed"
              status="Completed"
              statusColor="#4ade80"
              statusBg="rgba(74,222,128,0.1)"
              statusBorder="rgba(74,222,128,0.2)"
            />
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────────── */}
      <footer
        className="py-10 sm:py-12 px-4 sm:px-8 md:px-12 mt-16 sm:mt-20"
        style={{
          borderTop: "1px solid rgba(72,72,72,0.1)",
          backgroundColor: "#000000",
        }}
      >
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <span
              className="text-lg sm:text-xl font-headline font-black text-on-surface"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#e7e5e4" }}
            >
              Constrag
            </span>
            <p
              className="text-sm mt-2 font-body"
              style={{ color: "#acabaa" }}
            >
              Defining the future of architectural intelligence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {["Privacy", "Terms", "Support", "API"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs sm:text-sm font-label uppercase tracking-widest transition-all hover:text-primary"
                style={{ color: "#acabaa" }}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {["share", "mail"].map((icon) => (
              <button
                key={icon}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-primary"
                style={{
                  backgroundColor: "#1a1919",
                  color: "#acabaa",
                }}
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={{
                    fontVariationSettings:
                      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                    fontSize: "20px",
                  }}
                >
                  {icon}
                </span>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ── Sub-components ─────────────────────────────────────────────────────────── */

interface ModuleCardProps {
  tag: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: string;
  imgSrc: string;
  imgAlt: string;
  onButtonClick?: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  tag,
  title,
  description,
  buttonLabel,
  buttonIcon,
  imgSrc,
  imgAlt,
  onButtonClick,
}) => (
  <div
    className="rounded-[2rem] p-6 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 group transition-all duration-300"
    style={{
      background: "rgba(26,25,25,0.6)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.background =
        "rgba(44,44,44,0.8)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 0 30px rgba(167,200,255,0.15)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.background =
        "rgba(26,25,25,0.6)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
    }}
  >
    {/* Text content */}
    <div className="flex-1 flex flex-col justify-between gap-6">
      <div>
        <span
          className="text-[10px] font-bold tracking-[0.2em] mb-2 block"
          style={{ color: "#a7c8ff" }}
        >
          {tag}
        </span>
        <h3
          className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3 sm:mb-4"
          style={{ fontFamily: "'Manrope', sans-serif", color: "#e7e5e4" }}
        >
          {title}
        </h3>
        <p
          className="font-body leading-relaxed text-sm sm:text-base"
          style={{ color: "#acabaa" }}
        >
          {description}
        </p>
      </div>
      <button
        type="button"
        onClick={onButtonClick}
        className="w-fit px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center gap-2 text-sm transition-all"
        style={{
          backgroundColor: "#262626",
          color: "#e7e5e4",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)";
          (e.currentTarget as HTMLButtonElement).style.color = "#00407d";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#262626";
          (e.currentTarget as HTMLButtonElement).style.color = "#e7e5e4";
        }}
      >
        {buttonLabel}
        <span
          className="material-symbols-outlined"
          style={{
            fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            fontSize: "20px",
          }}
        >
          {buttonIcon}
        </span>
      </button>
    </div>

    {/* Image */}
    <div
      className="w-full sm:w-56 md:w-64 h-48 sm:h-64 rounded-2xl overflow-hidden relative flex-shrink-0"
      style={{ border: "1px solid rgba(72,72,72,0.2)" }}
    >
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  </div>
);

interface ActivityRowProps {
  icon: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  statusBg: string;
  statusBorder: string;
}

const ActivityRow: React.FC<ActivityRowProps> = ({
  icon,
  title,
  subtitle,
  status,
  statusColor,
  statusBg,
  statusBorder,
}) => (
  <div
    className="rounded-2xl p-4 sm:p-6 flex items-center justify-between group cursor-pointer transition-all duration-300 gap-4"
    style={{
      background: "rgba(26,25,25,0.6)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(72,72,72,0.1)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.background =
        "rgba(44,44,44,0.8)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 0 30px rgba(167,200,255,0.15)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.background =
        "rgba(26,25,25,0.6)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
    }}
  >
    {/* Left: icon + text */}
    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
      <div
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "#202020",
          border: "1px solid rgba(72,72,72,0.3)",
        }}
      >
        <span
          className="material-symbols-outlined text-2xl sm:text-3xl group-hover:scale-110 transition-transform"
          style={{
            fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            color: "#a7c8ff",
          }}
        >
          {icon}
        </span>
      </div>
      <div className="min-w-0">
        <h4
          className="font-semibold text-base sm:text-lg text-on-surface truncate"
          style={{ color: "#e7e5e4" }}
        >
          {title}
        </h4>
        <p
          className="text-xs sm:text-sm truncate"
          style={{ color: "#acabaa" }}
        >
          {subtitle}
        </p>
      </div>
    </div>

    {/* Right: status + chevron */}
    <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
      <div className="flex flex-col items-end">
        <span
          className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-tighter"
          style={{
            color: statusColor,
            backgroundColor: statusBg,
            border: `1px solid ${statusBorder}`,
          }}
        >
          {status}
        </span>
        <span
          className="text-[10px] mt-1 uppercase font-bold"
          style={{ color: "#acabaa" }}
        >
          Status
        </span>
      </div>
      <span
        className="material-symbols-outlined transition-colors group-hover:text-primary hidden sm:block"
        style={{
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          color: "#acabaa",
        }}
      >
        chevron_right
      </span>
    </div>
  </div>
);

export default ToolkitHome;
