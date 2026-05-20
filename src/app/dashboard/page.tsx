"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import RecommendedProjects from "@/components/dashboard/RecommendedProjects"
import NotificationPanel from "@/components/dashboard/NotificationPanel"
import AnalyticsChart from "@/components/dashboard/AnalyticsChart"
import AIInsights from "@/components/dashboard/AIInsights"

import useAuth from "@/hooks/useAuth"

import {
  FolderKanban,
  MessageSquare,
  DollarSign,
  Sparkles
} from "lucide-react"

export default function DashboardPage() {

  const { loading } = useAuth()

  if (loading) {

    return (

      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">

        <div className="text-2xl font-semibold text-white">

          Loading Dashboard...

        </div>

      </div>

    )

  }

  const stats = [

    {
      title: "Projects",
      value: "12",
      icon: FolderKanban,
      gradient:
        "from-indigo-500 to-violet-500"
    },

    {
      title: "Messages",
      value: "48",
      icon: MessageSquare,
      gradient:
        "from-cyan-500 to-blue-500"
    },

    {
      title: "Revenue",
      value: "$4,250",
      icon: DollarSign,
      gradient:
        "from-emerald-500 to-green-500"
    }

  ]

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* HERO SECTION */}

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">

                  <Sparkles className="w-8 h-8 text-white" />

                </div>

                <div>

                  <h1 className="text-5xl font-black text-white tracking-tight">

                    Welcome Back 👋

                  </h1>

                  <p className="text-white/90 mt-3 text-lg">

                    Your AI-powered freelance ecosystem is growing rapidly.

                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <button className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg">

                  Explore Projects

                </button>

                <button className="px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-xl text-white font-semibold border border-white/20 hover:bg-white/30 transition-all duration-300">

                  AI Insights

                </button>

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {
              stats.map((stat) => {

                const Icon =
                  stat.icon

                return (

                  <div
                    key={stat.title}
                    className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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

            {/* LEFT SIDE */}

            <div className="xl:col-span-2 space-y-8">

              {/* ANALYTICS */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">

                <div className="mb-8">

                  <h2 className="text-2xl font-black text-white">

                    Analytics Overview

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Track freelance growth, earnings, and AI activity.

                  </p>

                </div>

                <AnalyticsChart />

              </div>

              {/* RECOMMENDED PROJECTS */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">

                <RecommendedProjects />

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-8">

              {/* NOTIFICATIONS */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">

                <NotificationPanel />

              </div>

              {/* AI INSIGHTS */}

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-xl">

                <AIInsights />

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}