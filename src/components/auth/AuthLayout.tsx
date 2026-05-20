export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <div className="min-h-screen bg-[#0f172a] text-white grid lg:grid-cols-2 overflow-hidden">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex relative overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400" />

        {/* GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl" />

        {/* CONTENT */}

        <div className="relative z-10 flex flex-col justify-between p-16 w-full">

          {/* TOP */}

          <div>

            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-16 rounded-[28px] bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">

                <span className="text-3xl font-black text-white">

                  S

                </span>

              </div>

              <div>

                <h1 className="text-3xl font-black text-white tracking-tight">

                  SKILLSSPHERE

                </h1>

                <p className="text-white/80 mt-1">

                  AI Freelance Platform

                </p>

              </div>

            </div>

            <h2 className="text-6xl font-black leading-tight tracking-tight text-white max-w-xl">

              Build Your
              <br />
              AI Freelance
              <br />
              Career 🚀

            </h2>

            <p className="mt-8 text-white/85 text-xl max-w-xl leading-relaxed">

              Connect with clients, explore AI-powered opportunities,
              and grow your freelance business with intelligent tools.

            </p>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-6">

            <div className="p-7 rounded-[32px] bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl">

              <h3 className="text-5xl font-black text-white">

                10K+

              </h3>

              <p className="text-white/80 mt-3 text-lg">

                Freelancers

              </p>

            </div>

            <div className="p-7 rounded-[32px] bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl">

              <h3 className="text-5xl font-black text-white">

                5K+

              </h3>

              <p className="text-white/80 mt-3 text-lg">

                Projects Posted

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="relative flex items-center justify-center px-6 py-12 overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#0f172a]" />

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />

        {/* CARD */}

        <div className="relative z-10 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-10">

          {children}

        </div>

      </div>

    </div>

  )

}