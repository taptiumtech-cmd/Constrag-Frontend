import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/email-sent");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    if (bgImgRef.current) {
      bgImgRef.current.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleInputFocus = () => {
    cardRef.current?.classList.add("shadow-primary/5");
  };
  const handleInputBlur = () => {
    cardRef.current?.classList.remove("shadow-primary/5");
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
          className="w-full h-full object-cover scale-110 opacity-40 brightness-[0.4] grayscale-[0.3] max-w-none"
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
          <h1
            className="font-headline font-bold text-2xl sm:text-3xl tracking-tighter text-[#e7e5e4] uppercase select-none"
          >
            Constrag
          </h1>
        </header>

        <div
          ref={cardRef}
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

          <div className="relative z-10 text-center min-w-0">
            <h2 className="font-headline font-bold text-xl sm:text-2xl mb-4 tracking-tight text-[#e7e5e4] break-words">
              Forgot Password
            </h2>

            <p className="font-body text-[#acabaa] text-sm leading-relaxed mb-8 sm:mb-10 max-w-[280px] mx-auto">
              Enter your registered email address and we'll send you
              instructions to reset your password.
            </p>

            <form
              className="space-y-6 text-left w-full max-w-full"
              onSubmit={handleForgotPassword}
            >
              <div className="space-y-2">
                <label
                  className="font-body text-[10px] uppercase tracking-[0.15em] text-[#acabaa]/80 ml-1"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="relative group">
                  <span
                    className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#acabaa] transition-colors group-focus-within:text-[#a7c8ff]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                    }}
                  >
                    mail
                  </span>
                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="font-body w-full max-w-full bg-[#131313]/50 border-b border-[rgba(72,72,72,0.3)] focus:border-[#a7c8ff] focus:ring-0 text-[#e7e5e4] py-4 pl-12 pr-4 rounded-xl transition-all outline-none text-sm placeholder:text-[#acabaa]/40 box-border"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="font-headline w-full max-w-full py-4 px-6 rounded-full text-[#00407d] font-semibold text-sm tracking-wide shadow-lg active:opacity-90 hover:scale-[1.01] transition-all mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #a7c8ff 0%, #004788 100%)",
                  boxShadow: "0 4px 6px rgba(0,71,136,0.2)",
                }}
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-8">
              <p className="font-body text-sm text-[#acabaa]">
                Remember your password?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-[#a7c8ff] font-semibold hover:underline decoration-[#a7c8ff]/30 transition-all ml-1 bg-transparent border-none p-0 cursor-pointer"
                >
                  Login
                </button>
              </p>
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

export default ForgotPassword;
