"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import {
  Shield,
  Users,
  Briefcase,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Activity,
  BadgeCheck
} from "lucide-react"

export default function AdminPage() {

  const [authorized, setAuthorized] =
    useState(false)

  const [user, setUser] =
    useState<any>({})

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user")

    // NOT LOGGED IN

    if (!storedUser) {

      window.location.href =
        "/auth/login"

      return

    }

    const parsedUser =
      JSON.parse(storedUser)

    // NOT ADMIN

    if (
      parsedUser.role !== "admin"
    ) {

      alert("Access Denied")

      window.location.href =
        "/dashboard"

      return

    }

    setUser(parsedUser)

    // VERIFIED

    setAuthorized(true)

  }, [])

  // LOADING

  if (!authorized) {

    return (

      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">

        <div className="text-white text-2xl font-bold">

          Checking Admin Access...

        </div>

      </div>

    )

  }

  const stats = [

    {
      title: "Total Users",
      value: "124",
      icon: Users,
      gradient:
        "from-indigo-500 to-violet-500"
    },

    {
      title: "Projects Posted",
      value: "58",
      icon: Briefcase,
      gradient:
        "from-cyan-500 to-blue-500"
    },

    {
      title: "Messages Sent",
      value: "432",
      icon: MessageSquare,
      gradient:
        "from-emerald-500 to-green-500"
    },

    {
      title: "AI Matches",
      value: "892",
      icon: Sparkles,
      gradient:
        "from-pink-500 to-rose-500"
    }

  ]

  const activities = [

    "New freelancer registered",
    "AI recommendation generated",
    "Project posted by client",
    "Admin security verified",
    "New message exchange detected"

  ]

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* HERO */}

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-20 h-20 rounded-[28px] bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">

                    <Shield className="w-10 h-10 text-white" />

                  </div>

                  <div>

                    <div className="flex items-center gap-3">

                      <BadgeCheck className="w-5 h-5 text-white" />

                      <span className="text-white/90 font-semibold uppercase tracking-wider text-sm">

                        Secure Admin Access

                      </span>

                    </div>

                    <h1 className="text-5xl font-black text-white tracking-tight mt-3">

                      Admin Dashboard

                    </h1>

                  </div>

                </div>

                <p className="text-white/90 text-xl leading-relaxed max-w-3xl">

                  Monitor users, projects, AI systems, and platform activity with enterprise-grade analytics.

                </p>

              </div>

              {/* RIGHT */}

              <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[32px] p-7 shadow-2xl w-full max-w-sm">

                <h2 className="text-white text-2xl font-black">

                  Administrator

                </h2>

                <p className="text-white/80 mt-3">

                  Logged in as platform administrator.

                </p>

                <div className="mt-6 flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white text-2xl font-black">

                    {
                      user?.fullname
                        ?.charAt(0)
                        ?.toUpperCase() || "A"
                    }

                  </div>

                  <div>

                    <h3 className="text-white font-bold">

                      {
                        user?.fullname ||
                        "Admin"
                      }

                    </h3>

                    <p className="text-white/70 text-sm">

                      Super Administrator

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {
              stats.map((stat) => {

                const Icon =
                  stat.icon

                return (

                  <div
                    key={stat.title}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-slate-400 font-medium">

                          {stat.title}

                        </p>

                        <h2 className="text-4xl font-black text-white mt-3">

                          {stat.value}

                        </h2>

                      </div>

                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl`}>

                        <Icon className="w-7 h-7 text-white" />

                      </div>

                    </div>

                  </div>

                )

              })
            }

          </div>

          {/* CONTENT GRID */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* LEFT */}

            <div className="xl:col-span-2 space-y-8">

              {/* PLATFORM ANALYTICS */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-xl">

                    <TrendingUp className="w-8 h-8 text-white" />

                  </div>

                  <div>

                    <h2 className="text-3xl font-black text-white">

                      Platform Analytics

                    </h2>

                    <p className="text-slate-400 mt-2">

                      Overview of marketplace growth and AI activity.

                    </p>

                  </div>

                </div>

                {/* METRICS */}

                <div className="space-y-6">

                  {/* USERS */}

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-slate-300 font-medium">

                        User Growth

                      </span>

                      <span className="text-white font-bold">

                        86%

                      </span>

                    </div>

                    <div className="h-4 rounded-full bg-white/10 overflow-hidden">

                      <div className="h-full w-[86%] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />

                    </div>

                  </div>

                  {/* PROJECTS */}

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-slate-300 font-medium">

                        Project Completion

                      </span>

                      <span className="text-white font-bold">

                        72%

                      </span>

                    </div>

                    <div className="h-4 rounded-full bg-white/10 overflow-hidden">

                      <div className="h-full w-[72%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />

                    </div>

                  </div>

                  {/* AI */}

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-slate-300 font-medium">

                        AI Recommendation Accuracy

                      </span>

                      <span className="text-white font-bold">

                        94%

                      </span>

                    </div>

                    <div className="h-4 rounded-full bg-white/10 overflow-hidden">

                      <div className="h-full w-[94%] bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-8">

              {/* ACTIVITY */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8 shadow-2xl">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl">

                    <Activity className="w-6 h-6 text-white" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-white">

                      Recent Activity

                    </h2>

                    <p className="text-slate-400 mt-1">

                      Live platform updates.

                    </p>

                  </div>

                </div>

                <div className="space-y-5">

                  {
                    activities.map(
                      (
                        activity,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                        >

                          <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 shadow-lg shadow-cyan-400/50" />

                          <p className="text-slate-300 leading-relaxed">

                            {activity}

                          </p>

                        </div>

                      )
                    )
                  }

                </div>

              </div>

              {/* SECURITY */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8 shadow-2xl">

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl">

                    <Shield className="w-6 h-6 text-white" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-white">

                      Security Status

                    </h2>

                    <p className="text-slate-400 mt-1">

                      Platform protection active.

                    </p>

                  </div>

                </div>

                <div className="p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">

                  <h3 className="text-emerald-400 font-bold text-lg">

                    All Systems Secure

                  </h3>

                  <p className="text-slate-300 mt-3 leading-relaxed">

                    Admin authentication, AI moderation, and database protection are active.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}