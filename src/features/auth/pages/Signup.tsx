import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate();
  const [showPassword] = useState(false);
  const [showConfirm] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
        }

        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        .blueprint-grid {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(72,72,72,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(72,72,72,0.05) 1px, transparent 1px);
        }

        .glass-card {
          background: rgba(38, 38, 38, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        .primary-gradient {
          background: linear-gradient(135deg, #a7c8ff 0%, #004788 100%);
        }

        .input-understated {
          border: none;
          border-bottom: 1px solid rgba(72, 72, 72, 0.3);
          background: transparent;
          transition: all 0.3s ease;
          outline: none;
          width: 100%;
          color: #e7e5e4;
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .input-understated::placeholder {
          color: rgba(72, 72, 72, 0.5);
        }

        .input-understated:focus {
          border-bottom-color: #a7c8ff;
          box-shadow: 0 4px 12px -4px rgba(167, 200, 255, 0.2);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
        }

        .strength-meter {
          height: 2px;
          background: rgba(72, 72, 72, 0.2);
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
        }

        .strength-meter-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 65%;
          background: #a7c8ff;
          border-radius: 9999px;
        }

        ::selection {
          background-color: #004788;
          color: #b8d1ff;
        }
      `}</style>

      <div
        className="font-body min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden max-w-full w-full"
        style={{ backgroundColor: "#0e0e0e", fontFamily: "Inter, sans-serif" }}
      >
        {/* Architectural Background Layer */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid" />
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
            style={{ opacity: 0.2, transform: "scale(1.1)" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8MC7gcAM_S1dQfUT9axj91Umah9ZXxJ9ejTF8viiOFGJS2yy58D_Ts8CIB23ndBPBVgqgxQFbyhNxtsbs2HOmzPgQJXmsSQt6G3TRTHBN6b4agM3YVscI2FXBpyzuzwJuRy4oUmPdXHO3H6tV2djPu8NEzP50UY8jPyWpeDcRn2ax2v-S472FwlIHLJb8SNZd4T-x06cQzH7MXKQha4Ix9mH1puvyEYOm5Y_BDOT8-6eNufTRhNccl_1SkE1TuzE4f8pw7hzv9g"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,14,14,0.8) 0%, rgba(14,14,14,0.4) 50%, #0e0e0e 100%)",
            }}
          />
        </div>

        {/* Header */}
        <header
          className="fixed top-0 w-full z-50 flex justify-between items-center pointer-events-none px-4 sm:px-6 md:px-8 lg:px-12 py-6 lg:py-8 box-border max-w-full"
        >
          <div
            className="font-headline pointer-events-auto"
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "-0.05em",
              color: "#e7e5e4",
            }}
          >
            Constrag
          </div>
        </header>

        {/* Main Auth Canvas */}
        <main
          className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24 lg:pt-32 lg:pb-32 box-border min-w-0"
        >
          <div
            className="glass-card flex flex-col p-6 sm:p-8 lg:p-10 gap-8 sm:gap-10 lg:gap-[2.5rem] max-w-full min-w-0 box-border"
            style={{
              borderRadius: "2rem",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h1
                className="font-headline"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#e7e5e4",
                  lineHeight: 1.1,
                }}
              >
                Initialize Account
              </h1>
              <p
                className="font-body"
                style={{ color: "#acabaa", fontSize: "1.125rem" }}
              >
                Begin your architectural legacy.
              </p>
            </div>

            {/* Registration Form */}
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-10 w-full max-w-full min-w-0"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/otp-verification");
              }}
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2 md:col-span-2 min-w-0">
                <label
                  htmlFor="fullname"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Full Name
                </label>
                <input
                  className="input-understated"
                  id="fullname"
                  name="fullname"
                  placeholder="Julianne Vaught"
                  type="text"
                />
              </div>

              {/* Firm Name */}
              <div className="flex flex-col gap-2 md:col-span-2 min-w-0">
                <label
                  htmlFor="firm"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Firm Name
                </label>
                <input
                  className="input-understated"
                  id="firm"
                  name="firm"
                  placeholder="Aetheric Studios"
                  type="text"
                />
                <span
                  className="font-body"
                  style={{
                    fontSize: "10px",
                    color: "rgba(85,87,87,0.6)",
                    marginTop: "0.25rem",
                  }}
                >
                  For professional studio features
                </span>
              </div>

              {/* Username */}
              <div className="flex flex-col gap-2 min-w-0">
                <label
                  htmlFor="username"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Username
                </label>
                <input
                  className="input-understated"
                  id="username"
                  name="username"
                  placeholder="j.vaught"
                  type="text"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 min-w-0">
                <label
                  htmlFor="email"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Email Address
                </label>
                <input
                  className="input-understated"
                  id="email"
                  name="email"
                  placeholder="julianne@vaught.arch"
                  type="email"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-2 md:col-span-2 min-w-0">
                <label
                  htmlFor="dob"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Date of Birth
                </label>
                <input
                  className="input-understated"
                  id="dob"
                  name="dob"
                  type="date"
                  style={{ colorScheme: "dark", appearance: "none" }}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-4 min-w-0">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    htmlFor="password"
                    className="font-body"
                    style={{
                      color: "#acabaa",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                    }}
                  >
                    Password
                  </label>
                  <input
                    className="input-understated"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div className="strength-meter">
                    <div className="strength-meter-fill" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      className="font-body"
                      style={{
                        fontSize: "10px",
                        color: "#a7c8ff",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Strong Security
                    </span>
                    <span
                      className="font-body"
                      style={{ fontSize: "10px", color: "rgba(172,171,170,0.4)" }}
                    >
                      Entropy: 84%
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2 min-w-0">
                <label
                  htmlFor="confirm_password"
                  className="font-body"
                  style={{
                    color: "#acabaa",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                >
                  Confirm Password
                </label>
                <input
                  className="input-understated"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="••••••••"
                  type={showConfirm ? "text" : "password"}
                />
              </div>

              {/* Terms */}
              <div className="md:col-span-2 pt-4 min-w-0">
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ position: "relative", display: "flex", alignItems: "center", marginTop: "0.25rem" }}>
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      style={{
                        height: "1.25rem",
                        width: "1.25rem",
                        borderRadius: "0.375rem",
                        border: "1px solid #484848",
                        backgroundColor: "#131313",
                        appearance: "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        ...(agreedToTerms ? { backgroundColor: "#004788" } : {}),
                      }}
                    />
                    <span
                      className="material-symbols-outlined"
                      style={{
                        position: "absolute",
                        opacity: agreedToTerms ? 1 : 0,
                        color: "white",
                        fontSize: "16px",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        transition: "opacity 0.2s",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check
                    </span>
                  </div>
                  <span
                    className="font-body"
                    style={{ fontSize: "0.875rem", color: "#acabaa", lineHeight: 1.6 }}
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      className="bg-transparent border-none cursor-pointer p-0 inline"
                      style={{ color: "#a7c8ff", textDecoration: "none", transition: "all 0.2s", fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.textDecoration = "underline")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.textDecoration = "none")}
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="bg-transparent border-none cursor-pointer p-0 inline"
                      style={{ color: "#a7c8ff", textDecoration: "none", transition: "all 0.2s", fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.textDecoration = "underline")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.textDecoration = "none")}
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>
              </div>

              {/* Action Section */}
              <div className="md:col-span-2 pt-6 flex flex-col items-center gap-8 w-full max-w-full min-w-0">
                <button
                  type="submit"
                  className="font-headline primary-gradient"
                  style={{
                    width: "100%",
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    color: "#00407d",
                    fontSize: "1.25rem",
                    letterSpacing: "-0.025em",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 30px -10px rgba(0,71,136,0.5)",
                    transition: "all 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                  }}
                  onMouseDown={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
                  }}
                  onMouseUp={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
                  }}
                >
                  <span style={{ position: "relative", zIndex: 10 }}>Initialize Account</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-body"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#acabaa",
                    fontSize: "0.875rem",
                    letterSpacing: "0.025em",
                    transition: "color 0.3s",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#e7e5e4")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#acabaa")}
                >
                  Already have a workspace?{" "}
                  <span
                    style={{
                      color: "#a7c8ff",
                      fontWeight: 600,
                      textDecoration: "underline",
                      textDecorationColor: "rgba(167,200,255,0.2)",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    Log in
                  </span>
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="w-full font-body z-10 mt-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 flex flex-wrap justify-between items-center gap-6 max-w-full box-border"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span
              className="font-headline"
              style={{ fontWeight: 700, color: "#e7e5e4", fontSize: "1.125rem" }}
            >
              Constrag
            </span>
            <span
              className="font-body"
              style={{
                fontSize: "10px",
                color: "#acabaa",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              © 2024 Constrag. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8 max-w-full">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <button
                key={link}
                type="button"
                className="font-body bg-transparent border-none cursor-pointer p-0"
                style={{
                  fontSize: "10px",
                  color: "#acabaa",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#a7c8ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#acabaa")}
              >
                {link}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
