import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="dark">
      <div
        className="bg-[#000000] text-[#e7e5e4] font-[Inter,sans-serif] min-h-screen flex flex-col relative overflow-x-hidden max-w-full"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap');
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
            -webkit-font-feature-settings: 'liga';
            font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }

          .font-headline {
            font-family: 'Manrope', sans-serif;
          }

          .font-body {
            font-family: 'Inter', sans-serif;
          }

          .hover-underline-anim {
            position: relative;
          }
          .hover-underline-anim::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: #a7c8ff;
            transform-origin: bottom right;
            transition: transform 0.3s ease;
          }
          .hover-underline-anim:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}</style>

        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(2px)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, #000000 100%)",
            }}
          />
          <img
            alt="Architectural Background"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4, filter: "grayscale(100%)" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA692SLMf0t1vzsWFsyuudu7ZUtAMgOPJtk7dbVHbQXEbHJCZkAqF_TSFHFgDd0QOrq24jI7PC_MtTRuHuDrJatjs6qWDaugkpzw801n358U7FDOb1TD0Qczf5BSCOI_IAh4bdXUGz_S-wICRKFx7aRy5FLa9PznPCs1dvNZ_dFcnFngX3AiEO_Y4gfz-xMp_kO5ovvyzfO4G6Vpk69sL9qYMe503f81V2m6X8J09YnwecVA9cSzd8I7c_vqBRTD5JMGou7BIGHzg"
          />
        </div>

        {/* Main Content Canvas */}
        <main
          className="flex-1 flex flex-col items-center justify-center z-10 relative w-full mx-auto px-4 sm:px-6 max-w-[1536px] box-border"
        >
          {/* Glassmorphic Card */}
          <div
            className="w-full max-w-md flex flex-col items-center p-6 sm:p-8 lg:p-[3.5rem] box-border min-w-0"
            style={{
              backgroundColor: "rgba(38,38,38,0.4)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(72,72,72,0.1)",
              borderRadius: "1.5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Brand Anchor */}
            <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
              <h1
                className="font-headline"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#a7c8ff",
                }}
              >
                Constrag
              </h1>
            </div>

            {/* Header */}
            <div
              className="text-center w-full"
              style={{ marginBottom: "2.5rem" }}
            >
              <h2
                className="font-headline text-2xl sm:text-[1.75rem] lg:text-[1.875rem] font-bold tracking-tight text-[#e7e5e4] mb-2 break-words"
              >
                Enter Workspace
              </h2>
              <p
                className="font-body"
                style={{ fontSize: "1rem", color: "#acabaa" }}
              >
                Continue your architectural legacy.
              </p>
            </div>

            {/* Form */}
            <form
              className="w-full"
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              {/* Input Group: Email */}
              <div className="relative group" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "1rem",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#acabaa", transition: "color 0.2s" }}
                  >
                    mail
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="font-body"
                  style={{
                    width: "100%",
                    backgroundColor: "#131313",
                    border: "none",
                    borderBottom: "1px solid rgba(72,72,72,0.1)",
                    borderRadius: 0,
                    paddingLeft: "3rem",
                    paddingRight: "1rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontSize: "1rem",
                    color: "#e7e5e4",
                    outline: "none",
                    transition: "all 0.3s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderBottomColor = "#a7c8ff";
                    e.target.style.backgroundColor = "rgba(44,44,44,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderBottomColor = "rgba(72,72,72,0.1)";
                    e.target.style.backgroundColor = "#131313";
                  }}
                />
              </div>

              {/* Input Group: Password */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "1rem",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#acabaa", transition: "color 0.2s" }}
                  >
                    lock
                  </span>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="font-body"
                  style={{
                    width: "100%",
                    backgroundColor: "#131313",
                    border: "none",
                    borderBottom: "1px solid rgba(72,72,72,0.1)",
                    borderRadius: 0,
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontSize: "1rem",
                    color: "#e7e5e4",
                    outline: "none",
                    transition: "all 0.3s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderBottomColor = "#a7c8ff";
                    e.target.style.backgroundColor = "rgba(44,44,44,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderBottomColor = "rgba(72,72,72,0.1)";
                    e.target.style.backgroundColor = "#131313";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "1rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#acabaa",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#a7c8ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#acabaa")
                  }
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>

              {/* Utilities */}
              <div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 w-full"
                style={{
                  paddingTop: "0.5rem",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "1.25rem",
                      height: "1.25rem",
                      borderRadius: "0.25rem",
                      border: "1px solid rgba(72,72,72,0.3)",
                      backgroundColor: "#131313",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        opacity: 0,
                        margin: 0,
                      }}
                    />
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "14px",
                        color: "#a7c8ff",
                        opacity: rememberMe ? 1 : 0,
                        transition: "opacity 0.2s",
                        position: "absolute",
                      }}
                    >
                      check
                    </span>
                  </div>
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "#acabaa",
                      textTransform: "uppercase",
                      transition: "color 0.2s",
                    }}
                  >
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="font-body whitespace-nowrap bg-transparent border-none cursor-pointer p-0"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#acabaa",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#a7c8ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#acabaa")
                  }
                >
                  Forgot password?
                </button>
              </div>

              {/* Primary CTA */}
              <div style={{ paddingTop: "1.5rem" }}>
                <button
                  type="submit"
                  className="font-body"
                  style={{
                    width: "100%",
                    background:
                      "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)",
                    color: "#00407d",
                    borderRadius: "9999px",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "1rem",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0,71,136,0.2)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 20px 25px rgba(0,71,136,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 4px 6px rgba(0,71,136,0.2)";
                  }}
                  onMouseDown={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "scale(0.98)";
                  }}
                  onMouseUp={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "scale(1)";
                  }}
                >
                  Enter Workspace
                </button>
              </div>
            </form>

            {/* Secondary Action */}
            <div
              className="w-full text-center"
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(72,72,72,0.1)",
              }}
            >
              <p className="font-body" style={{ fontSize: "1rem", color: "#acabaa" }}>
                New to Constrag?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="hover-underline-anim bg-transparent border-none cursor-pointer p-0 inline"
                  style={{
                    color: "#a7c8ff",
                    fontWeight: 500,
                    marginLeft: "0.5rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#8fbaff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#a7c8ff")
                  }
                >
                  Initialize Account
                </button>
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="w-full z-10 relative flex justify-center px-4 sm:px-6 max-w-full box-border"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center max-w-full">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label, i) => (
              <span key={label} className="flex items-center gap-6">
                {i > 0 && (
                  <span style={{ color: "rgba(72,72,72,0.3)", fontSize: "0.75rem" }}>
                    |
                  </span>
                )}
                <button
                  type="button"
                  className="font-body bg-transparent border-none cursor-pointer p-0"
                  style={{
                    fontSize: "0.75rem",
                    color: "#acabaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#a7c8ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#acabaa")
                  }
                >
                  {label}
                </button>
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
