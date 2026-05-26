import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(299); // 4:59 in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `0${m}:${s < 10 ? "0" + s : s}`;
  };

  const handleChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      // Allow only single digit numeric
      const digit = val.replace(/\D/g, "").slice(-1);

      const newOtp = [...otp];
      newOtp[index] = digit;
      setOtp(newOtp);

      // Auto-advance to next input
      if (digit && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [otp]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (!otp[index] && index > 0) {
          // Move to previous if current is empty
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputRefs.current[index - 1]?.focus();
        } else {
          // Clear current
          const newOtp = [...otp];
          newOtp[index] = "";
          setOtp(newOtp);
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [otp]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
      if (!pasted) return;
      const newOtp = Array(6).fill("");
      pasted.split("").forEach((char, i) => {
        if (i < 6) newOtp[i] = char;
      });
      setOtp(newOtp);
      // Focus last filled or next empty
      const lastIndex = Math.min(pasted.length, 5);
      inputRefs.current[lastIndex]?.focus();
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const otpValue = otp.join("");
      if (otpValue.length < 6) return;

      setIsVerifying(true);

      // Mock verification delay then navigate
      setTimeout(() => {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 800);
      }, 1500);
    },
    [otp, navigate]
  );

  const handleResendCode = useCallback(() => {
    setOtp(Array(6).fill(""));
    setTimeLeft(299);
    inputRefs.current[0]?.focus();
  }, []);

  const handleChangeEmail = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const getSubmitButtonContent = () => {
    if (isSuccess) return "Success";
    if (isVerifying) return (
      <>
        <span
          className="material-symbols-outlined"
          style={{ animation: "spin 1s linear infinite" }}
        >
          progress_activity
        </span>
        {" "}Verifying...
      </>
    );
    return "Verify Account";
  };

  const getSubmitButtonStyle = (): React.CSSProperties => {
    if (isSuccess) return { background: "#22c55e" };
    return {};
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        :root {
          --surface-container: #1a1919;
          --tertiary: #f9f9f9;
          --surface-dim: #0e0e0e;
          --on-secondary-container: #c1bec1;
          --primary-container: #004788;
          --surface-variant: #262626;
          --primary-fixed-dim: #bed5ff;
          --on-primary-fixed: #003f7b;
          --surface-container-low: #131313;
          --on-primary-fixed-variant: #005bad;
          --surface-container-lowest: #000000;
          --on-secondary-fixed-variant: #5c5b5d;
          --secondary-dim: #9f9da0;
          --on-primary-container: #b8d1ff;
          --outline-variant: #484848;
          --primary: #a7c8ff;
          --on-tertiary-container: #555757;
          --tertiary-fixed-dim: #e5e5e5;
          --on-tertiary-fixed-variant: #656667;
          --on-tertiary-fixed: #484a4a;
          --surface-bright: #2c2c2c;
          --on-secondary: #202022;
          --background: #0e0e0e;
          --secondary: #9f9da0;
          --secondary-fixed: #e4e2e4;
          --surface: #0e0e0e;
          --inverse-surface: #fcf8f8;
          --error-dim: #bb5551;
          --error: #ee7d77;
          --outline: #767575;
          --on-background: #e7e5e4;
          --on-tertiary: #5e5f60;
          --tertiary-container: #ebebeb;
          --error-container: #7f2927;
          --secondary-fixed-dim: #d6d3d6;
          --on-error: #490106;
          --on-surface-variant: #acabaa;
          --on-secondary-fixed: #3f3f41;
          --primary-fixed: #d5e3ff;
          --on-surface: #e7e5e4;
          --surface-tint: #a7c8ff;
          --surface-container-highest: #262626;
          --inverse-on-surface: #565554;
          --surface-container-high: #202020;
          --on-primary: #00407d;
          --tertiary-fixed: #f3f3f4;
          --primary-dim: #8fbaff;
          --inverse-primary: #005fb3;
          --tertiary-dim: #ebebeb;
          --secondary-container: #3b3b3d;
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
        }

        .glass-panel {
          background: rgba(38, 38, 38, 0.4);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
        }

        .btn-primary-gradient {
          background: linear-gradient(135deg, #a7c8ff 0%, #004788 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary-gradient:hover:not(:disabled) {
          box-shadow: 0 0 24px rgba(167, 200, 255, 0.25);
          transform: translateY(-1px);
        }

        .otp-input {
          background: var(--surface-container-low);
          border-bottom: 2px solid var(--outline-variant);
          color: var(--primary);
          font-family: 'Manrope', sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          text-align: center;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          appearance: none;
          -moz-appearance: textfield;
        }

        .otp-input::-webkit-outer-spin-button,
        .otp-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .otp-input:focus {
          border-bottom-color: #a7c8ff;
          background: rgba(44, 44, 44, 0.8);
          outline: none;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromTop {
          from { opacity: 0; transform: translateY(-1rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn95 {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-logo {
          animation: slideInFromTop 0.7s ease both;
        }

        .animate-card {
          animation: zoomIn95 1s ease both;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "var(--background)",
          color: "var(--on-surface)",
          fontFamily: "'Inter', sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* Background Layer */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdvB0R92ptkPutfcXsQtf6AfV-6y2t19PqdNVhW1QgH2Y_7F5ya0EeaBhsR4DWmc8SEVO7eMcBzrMR2OR32tW784XhTz4bI4EfQKlg8JV2tY_QeWD3UVEu2DbVygqcCQ8nnKk8tGsiicQMnriCcy-PJv5OCFmERC7ud3bPNm0nV8lYG211s8bdtt_sV-U8d59hflahqpWp44Fjp6Q_7zgzpt5bA6VeuzdLQWSyv0P2ENz5As2KzMDt9CbQzRRcmjPgFgJruXQwyRyu"
            alt="Constrag headquarters"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
              filter: "grayscale(100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, var(--background) 0%, transparent 50%, rgba(14,14,14,0.6) 100%)",
            }}
          />
        </div>

        {/* Main Content */}
        <main
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem)",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <div
            className="animate-logo"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            <h1
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: "1.875rem",
                letterSpacing: "-0.05em",
                color: "var(--on-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                margin: 0,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: "var(--primary)",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                architecture
              </span>
              Constrag
            </h1>
          </div>

          {/* OTP Card */}
          <div
            className="glass-panel animate-card"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "2rem",
              padding: "clamp(2rem, 5vw, 3rem)",
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.5)",
              border: "1px solid rgba(72,72,72,0.05)",
            }}
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  color: "var(--on-surface)",
                  marginBottom: "0.75rem",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Verify Your Account
              </h2>
              <p
                style={{
                  color: "var(--on-surface-variant)",
                  lineHeight: 1.6,
                  maxWidth: "340px",
                  margin: "0 auto",
                  fontSize: "0.95rem",
                }}
              >
                Enter the 6-digit verification code sent to your email address.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* OTP Inputs */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "clamp(0.5rem, 2vw, 1rem)",
                  maxWidth: "100%",
                }}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    className="otp-input"
                    type="number"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    onWheel={(e) => e.preventDefault()}
                    required
                    style={{
                      width: "clamp(2.75rem, 12vw, 4rem)",
                      height: "clamp(4rem, 14vw, 5rem)",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>

              {/* Timer & Resend */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "var(--on-surface-variant)",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    schedule
                  </span>
                  Code expires in{" "}
                  <span
                    style={{
                      color: "var(--on-surface)",
                      fontWeight: 700,
                    }}
                  >
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleResendCode}
                  style={{
                    color: "var(--primary)",
                    fontWeight: 500,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    fontSize: "0.9rem",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.textDecoration = "none")
                  }
                >
                  Resend Code
                </button>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem" }}>
                <button
                  type="submit"
                  className={!isSuccess ? "btn-primary-gradient" : ""}
                  disabled={isVerifying || otp.join("").length < 6}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "9999px",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    color: "var(--on-primary)",
                    letterSpacing: "0.05em",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                    border: "none",
                    cursor: isVerifying || otp.join("").length < 6 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    opacity: otp.join("").length < 6 && !isVerifying ? 0.7 : 1,
                    fontSize: "1rem",
                    ...getSubmitButtonStyle(),
                  }}
                >
                  {getSubmitButtonContent()}
                </button>

                <button
                  type="button"
                  onClick={handleChangeEmail}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "1rem",
                    borderRadius: "9999px",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 500,
                    color: "var(--on-surface)",
                    border: "1px solid rgba(72,72,72,0.2)",
                    transition: "background-color 0.2s",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(38,38,38,0.3)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
                  }
                >
                  Change Email
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "var(--surface-container-lowest)",
            width: "100%",
            padding: "clamp(1.5rem, 5vw, 3rem)",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(72,72,72,0.1)",
            gap: "1.5rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              color: "var(--on-surface)",
              fontSize: "1.125rem",
            }}
          >
            Constrag
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <button
                key={link}
                type="button"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--on-surface-variant)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "var(--on-surface-variant)")
                }
              >
                {link}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--on-surface-variant)",
              opacity: 0.6,
            }}
          >
            © 2024 Constrag. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default OTPVerification;
