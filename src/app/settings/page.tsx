"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import {
  Bell,
  Moon,
  Shield,
  Sparkles,
  User,
  Lock
} from "lucide-react"

import { toast } from "sonner"

export default function SettingsPage() {

  const [darkMode, setDarkMode] =
    useState(true)

  const [notifications, setNotifications] =
    useState(true)

  const [aiAssistant, setAiAssistant] =
    useState(true)

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

  const saveSettings = () => {

    toast.success(
      "Settings updated successfully"
    )

  }

  const Toggle = ({
    enabled,
    onClick
  }: any) => (

    <button
      onClick={onClick}
      className={`w-16 h-9 rounded-full transition-all duration-300 ${
        enabled
          ? "bg-gradient-to-r from-indigo-500 to-cyan-400"
          : "bg-white/10"
      }`}
    >

      <div
        className={`w-7 h-7 bg-white rounded-full transition-all duration-300 ${
          enabled
            ? "translate-x-8"
            : "translate-x-1"
        }`}
      />

    </button>

  )

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8">

          <div className="max-w-5xl mx-auto space-y-8">

            {/* HERO */}

            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

              <div className="relative z-10 flex items-center gap-6">

                <div className="w-20 h-20 rounded-[28px] bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">

                  <Sparkles className="w-10 h-10 text-white" />

                </div>

                <div>

                  <h1 className="text-5xl font-black text-white tracking-tight">

                    Settings

                  </h1>

                  <p className="text-white/90 mt-4 text-lg">

                    Manage your profile, preferences, AI tools, and security settings.

                  </p>

                </div>

              </div>

            </div>

            {/* PROFILE */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl">

                  <User className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Profile Settings

                  </h2>

                  <p className="text-slate-400 mt-1">

                    View your account information.

                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}

                <div>

                  <label className="block text-slate-400 mb-3 font-medium">

                    Full Name

                  </label>

                  <input
                    value={user?.fullname || ""}
                    readOnly
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white outline-none"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-slate-400 mb-3 font-medium">

                    Email Address

                  </label>

                  <input
                    value={user?.email || ""}
                    readOnly
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white outline-none"
                  />

                </div>

              </div>

            </div>

            {/* PREFERENCES */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <div className="flex items-center gap-4 mb-10">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl">

                  <Moon className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Preferences

                  </h2>

                  <p className="text-slate-400 mt-1">

                    Customize your platform experience.

                  </p>

                </div>

              </div>

              <div className="space-y-8">

                {/* DARK MODE */}

                <div className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10">

                  <div>

                    <h3 className="text-white font-bold text-lg">

                      Dark Mode

                    </h3>

                    <p className="text-slate-400 mt-2">

                      Enable modern dark SaaS interface.

                    </p>

                  </div>

                  <Toggle
                    enabled={darkMode}
                    onClick={() =>
                      setDarkMode(
                        !darkMode
                      )
                    }
                  />

                </div>

                {/* NOTIFICATIONS */}

                <div className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10">

                  <div className="flex items-start gap-4">

                    <Bell className="w-6 h-6 text-cyan-400 mt-1" />

                    <div>

                      <h3 className="text-white font-bold text-lg">

                        Notifications

                      </h3>

                      <p className="text-slate-400 mt-2">

                        Receive AI updates and freelance alerts.

                      </p>

                    </div>

                  </div>

                  <Toggle
                    enabled={notifications}
                    onClick={() =>
                      setNotifications(
                        !notifications
                      )
                    }
                  />

                </div>

                {/* AI */}

                <div className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10">

                  <div className="flex items-start gap-4">

                    <Sparkles className="w-6 h-6 text-violet-400 mt-1" />

                    <div>

                      <h3 className="text-white font-bold text-lg">

                        AI Assistant

                      </h3>

                      <p className="text-slate-400 mt-2">

                        Enable smart project recommendations and AI suggestions.

                      </p>

                    </div>

                  </div>

                  <Toggle
                    enabled={aiAssistant}
                    onClick={() =>
                      setAiAssistant(
                        !aiAssistant
                      )
                    }
                  />

                </div>

              </div>

            </div>

            {/* SECURITY */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

              <div className="flex items-center gap-4 mb-10">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl">

                  <Shield className="w-6 h-6 text-white" />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Security

                  </h2>

                  <p className="text-slate-400 mt-1">

                    Your account is protected with secure authentication.

                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10">

                <div className="flex items-start gap-4">

                  <Lock className="w-6 h-6 text-emerald-400 mt-1" />

                  <div>

                    <h3 className="text-white font-bold text-lg">

                      Password Protection

                    </h3>

                    <p className="text-slate-400 mt-2">

                      Strong encrypted authentication enabled.

                    </p>

                  </div>

                </div>

                <div className="px-5 py-2 rounded-2xl bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/20">

                  Protected

                </div>

              </div>

            </div>

            {/* SAVE */}

            <button
              onClick={saveSettings}
              className="w-full h-16 rounded-[28px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white text-lg font-black shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >

              Save Settings

            </button>

          </div>

        </main>

      </div>

    </div>

  )

}