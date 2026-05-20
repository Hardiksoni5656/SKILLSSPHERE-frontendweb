"use client"

import { useEffect, useState } from "react"

import {
  Bell,
  LogOut,
  Search
} from "lucide-react"

export default function Topbar() {

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

  const logout = () => {

    localStorage.removeItem("user")

    window.location.href =
      "/auth/login"

  }

  return (

    <header className="sticky top-0 z-50 h-24 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-2xl px-8 flex items-center justify-between">

      {/* LEFT */}

      <div>

        <h1 className="text-3xl font-black text-white tracking-tight">

          Welcome back 👋

        </h1>

        <p className="text-slate-400 mt-2">

          Manage your freelance workflow with AI

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* SEARCH */}

        <div className="hidden lg:flex items-center gap-3 px-5 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl w-[320px]">

          <Search className="w-5 h-5 text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder:text-slate-500 w-full"
          />

        </div>

        {/* NOTIFICATIONS */}

        <button className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300">

          <Bell className="w-5 h-5 text-white" />

          <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" />

        </button>

        {/* PROFILE */}

        <div className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

          {/* AVATAR */}

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg shadow-xl">

            {
              user?.name?.charAt(0)?.toUpperCase() || "U"
            }

          </div>

          {/* USER INFO */}

          <div className="hidden md:block">

            <h2 className="text-white font-semibold">

              {
                user?.name || "Freelancer"
              }

            </h2>

            <p className="text-slate-400 text-sm">

              AI Developer

            </p>

          </div>

        </div>

        {/* LOGOUT */}

        <button
          onClick={logout}
          className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center hover:bg-red-500 transition-all duration-300 group"
        >

          <LogOut className="w-5 h-5 text-red-400 group-hover:text-white" />

        </button>

      </div>

    </header>

  )

}