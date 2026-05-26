import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const EmailSent = () => {
  const navigate = useNavigate();
  const bgImgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    if (bgImgRef.current) {
      bgImgRef.current.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleResendEmail = () => {
    // TODO: implement resend email API call
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden relative max-w-full w-full text-[#e7e5e4] font-[Inter,sans-serif]"
      style={{ backgroundColor: "#0e0e0e" }}
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(14,14,14,0.8) 50%, #0e0e0e 100%)",
          }}
        />
        <img
          ref={bgImgRef}
          className="w-full h-full object-cover scale-110 opacity-40 brightness-[0.4] grayscale-[0.3]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9AG6zFDLxQWvm7OJT5nK4hNU8PTYnlE4VgIgt5CbLmJjmXPp2bieDHp4NDGmhRDLNbpgwiP8R62L1z6ZRIdMRZHLCXAU9JVmdjAeRiZJVo_4vIQVYsg9Z0dudftqLklsIVi6bDw_rd0ZzUwNV4wulr-GXfZYTnCmUDhDU42StzGon7a4J0gJs4gz9zYVZvhtmXOGEeufHBB42n3sHvFEXysDzaSTj3tYkO8gRajhSXVsm3fnPw_NXSb11nr3_AL0azPpfmX4aASxH"
          alt="A cinematic, low-angle shot of a towering brutalist skyscraper"
          style={{ transition: "transform 0.1s linear" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(72,72,72,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(72,72,72,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="w-full max-w-md px-4 sm:px-6 py-10 sm:py-12 flex flex-col items-center justify-center z-10 box-border min-w-0">
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="font-headline font-bold text-2xl sm:text-3xl tracking-tighter text-[#e7e5e4] uppercase select-none">
            Constrag
          </h1>
        </header>

        <div
          className="w-full max-w-full p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-[rgba(72,72,72,0.1)] shadow-2xl relative overflow-hidden box-border min-w-0"
          style={{
            background: "rgba(26, 25, 25, 0.45)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] rounded-full pointer-events-none"
            style={{ background: "rgba(167, 200, 255, 0.1)" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center min-w-0">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shrink-0"
              style={{
                background: "rgba(167, 200, 255, 0.1)",
                boxShadow: "0 0 0 1px rgba(167, 200, 255, 0.2)",
              }}
            >
              <span
                className="material-symbols-outlined text-[#a7c8ff] text-4xl"
                style={{
                  fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                }}
              >
                mark_email_read
              </span>
            </div>

            <h2 className="font-headline font-bold text-xl sm:text-2xl mb-4 tracking-tight text-[#e7e5e4] break-words">
              Check Your Email
            </h2>

            <p className="font-body text-[#acabaa] text-sm leading-relaxed mb-8 sm:mb-10 max-w-[280px] mx-auto">
              We've sent password reset instructions to your registered email
              address.
            </p>

            <div
              className="w-full max-w-full rounded-xl p-6 mb-8 sm:mb-10 text-left box-border"
              style={{ backgroundColor: "#131313" }}
            >
              <p className="font-body text-[10px] font-semibold text-[#acabaa] uppercase tracking-[0.15em] mb-3">
                If you don't see the email:
              </p>
              <ul className="space-y-2">
                {[
                  "Check your spam folder",
                  "Wait a few minutes",
                  "Verify your email address",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex items-center gap-3 text-[#acabaa] text-sm"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "rgba(167, 200, 255, 0.4)" }}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-full space-y-4">
              <button
                type="button"
                onClick={() => navigate("/otp-verification")}
                className="font-headline w-full max-w-full py-4 px-8 rounded-full text-[#00407d] font-semibold text-sm tracking-wide shadow-lg active:opacity-90 hover:scale-[1.01] transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)",
                  boxShadow: "0 4px 6px rgba(0,71,136,0.2)",
                }}
              >
                Verify Email
              </button>

              <button
                type="button"
                onClick={handleResendEmail}
                className="font-body w-full max-w-full py-4 px-8 rounded-full border border-[rgba(72,72,72,0.3)] text-[#e7e5e4] font-medium hover:bg-[rgba(44,44,44,0.2)] transition-all duration-200 text-sm"
              >
                Resend Email
              </button>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#acabaa] hover:text-[#a7c8ff] text-sm font-medium transition-colors flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0 mx-auto"
              >
                <span
                  className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform"
                  style={{
                    fontVariationSettings:
                      "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  arrow_back
                </span>
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full mt-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-12 z-10 max-w-full box-border">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-full">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
            <button
              key={label}
              type="button"
              className="font-body text-[10px] tracking-[0.2em] text-[#acabaa] hover:text-[#a7c8ff] transition-colors uppercase whitespace-nowrap bg-transparent border-none cursor-pointer p-0"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <p className="font-body text-[10px] tracking-[0.1em] text-[#acabaa]/40 uppercase">
            © 2024 Constrag. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EmailSent;
