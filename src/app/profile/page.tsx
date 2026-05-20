"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import FileUpload from "@/components/profile/FileUpload"
import PortfolioGallery from "@/components/profile/PortfolioGallery"

import {
  Sparkles,
  Briefcase,
  Star,
  Trophy
} from "lucide-react"

export default function ProfilePage() {

  const [user, setUser] =
    useState<any>({})

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user")

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      )

    }

  }, [])

  const stats = [

    {
      title: "Completed Projects",
      value: "24",
      icon: Briefcase,
      gradient:
        "from-indigo-500 to-violet-500"
    },

    {
      title: "Success Rate",
      value: "98%",
      icon: Trophy,
      gradient:
        "from-emerald-500 to-green-500"
    },

    {
      title: "AI Match Rating",
      value: "94%",
      icon: Star,
      gradient:
        "from-cyan-500 to-blue-500"
    }

  ]

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8">

          <div className="max-w-6xl mx-auto space-y-8">

            {/* HERO */}

            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

              {/* GLOW */}

              <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                {/* LEFT */}

                <div className="flex items-center gap-8">

                  {/* AVATAR */}

                  <div className="w-32 h-32 rounded-[32px] bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-5xl font-black text-white shadow-2xl shrink-0">

                    {
                      user?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "U"
                    }

                  </div>

                  {/* USER */}

                  <div>

                    <div className="flex items-center gap-3">

                      <Sparkles className="w-6 h-6 text-white" />

                      <span className="text-white/90 font-semibold uppercase tracking-wider text-sm">

                        Premium Freelancer

                      </span>

                    </div>

                    <h1 className="text-5xl font-black text-white mt-4 tracking-tight">

                      {
                        user?.name ||
                        "Freelancer"
                      }

                    </h1>

                    <p className="text-white/90 text-xl mt-4">

                      AI Full Stack Developer

                    </p>

                    {/* SKILLS */}

                    <div className="flex flex-wrap gap-3 mt-6">

                      {
                        [
                          "React",
                          "Next.js",
                          "FastAPI",
                          "AI",
                          "TypeScript"
                        ].map((skill) => (

                          <span
                            key={skill}
                            className="px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 text-white text-sm font-semibold"
                          >

                            {skill}

                          </span>

                        ))
                      }

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 w-full max-w-sm">

                  <h2 className="text-white font-black text-2xl">

                    AI Profile Score

                  </h2>

                  <p className="text-white/80 mt-3 leading-relaxed">

                    Your freelance profile is performing exceptionally well in the AI marketplace ecosystem.

                  </p>

                  <div className="mt-6">

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-white/80">

                        Profile Strength

                      </span>

                      <span className="text-white font-bold">

                        94%

                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-white/20 overflow-hidden">

                      <div className="h-full w-[94%] bg-white rounded-full" />

                    </div>

                  </div>

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

            {/* ABOUT */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <h2 className="text-3xl font-black text-white">

                About Me

              </h2>

              <p className="text-slate-300 leading-relaxed mt-6 text-lg">

                Passionate full-stack developer focused on building scalable AI-powered applications using modern technologies like React, Next.js, FastAPI, and machine learning tools.

                Specialized in modern SaaS products, freelance ecosystems, intelligent marketplaces, and AI workflow automation.

              </p>

            </div>

            {/* FILES */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <div className="mb-8">

                <h2 className="text-3xl font-black text-white">

                  Resume & Files

                </h2>

                <p className="text-slate-400 mt-3">

                  Upload resumes, certifications, and supporting freelance documents.

                </p>

              </div>

              <FileUpload />

            </div>

            {/* PORTFOLIO */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <div className="mb-8">

                <h2 className="text-3xl font-black text-white">

                  Portfolio Showcase

                </h2>

                <p className="text-slate-400 mt-3">

                  Display your best freelance and AI projects.

                </p>

              </div>

              <PortfolioGallery />

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}