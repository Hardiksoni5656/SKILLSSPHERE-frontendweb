"use client"

import Link from "next/link"

import {
  useEffect,
  useState
} from "react"

import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  User,
  Settings,
  ShieldCheck,
  Sparkles,
  Menu,
  X
} from "lucide-react"

export default function Sidebar() {

  const pathname =
    usePathname()

  const [user, setUser] =
    useState<any>(null)

  const [mobileOpen, setMobileOpen] =
    useState(false)

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user")

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      )

    }

  }, [])

  const menuItems = [

    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard"
    },

    {
      title: "Projects",
      icon: FolderKanban,
      href: "/projects"
    },

    {
      title: "Messages",
      icon: MessageSquare,
      href: "/chat"
    },

    {
      title: "Profile",
      icon: User,
      href: "/profile"
    },

    {
      title: "Settings",
      icon: Settings,
      href: "/settings"
    }

  ]

  // ADMIN

  if (user?.role === "admin") {

    menuItems.push({

      title: "Admin",

      icon: ShieldCheck,

      href: "/admin"

    })

  }

  return (

    <>

      {/* MOBILE TOPBAR */}

      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-[#0f172a]/90 backdrop-blur-2xl flex items-center justify-between px-6">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl">

            <Sparkles className="w-6 h-6 text-white" />

          </div>

          <div>

            <h1 className="text-xl font-black text-white tracking-tight">

              SKILLSSPHERE

            </h1>

            <p className="text-xs text-slate-400">

              AI Platform

            </p>

          </div>

        </div>

        {/* MENU BUTTON */}

        <button
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
        >

          {
            mobileOpen

              ? <X className="w-6 h-6" />

              : <Menu className="w-6 h-6" />
          }

        </button>

      </div>

      {/* MOBILE OVERLAY */}

      {
        mobileOpen && (

          <div
            onClick={() =>
              setMobileOpen(false)
            }
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

        )
      }

      {/* SIDEBAR */}

      <aside className={`

        fixed md:relative top-0 left-0 z-50
        h-screen w-72
        border-r border-white/10
        bg-[#111827]/95 backdrop-blur-2xl
        px-6 py-8
        flex flex-col
        transition-all duration-300

        ${

          mobileOpen

            ? "translate-x-0"

            : "-translate-x-full md:translate-x-0"

        }

      `}>

        {/* LOGO */}

        <div className="mb-14 hidden md:block">

          <div className="flex items-center gap-4">

            {/* ICON */}

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-2xl opacity-30" />

              <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl shadow-indigo-500/20">

                <Sparkles className="w-7 h-7 text-white" />

              </div>

            </div>

            {/* TEXT */}

            <div>

              <h1 className="text-2xl font-black tracking-tight text-white">

                SKILLSSPHERE

              </h1>

              <p className="text-sm text-slate-400 mt-1">

                AI Freelance Platform

              </p>

            </div>

          </div>

        </div>

        {/* MOBILE SPACING */}

        <div className="h-20 md:hidden" />

        {/* NAVIGATION */}

        <nav className="flex flex-col gap-3">

          {
            menuItems.map((item) => {

              const Icon = item.icon

              const active =
                pathname === item.href

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={`
                    group relative flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold
                    ${
                      active
                        ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-xl shadow-indigo-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >

                  {/* ACTIVE DOT */}

                  {
                    active && (

                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-r-full bg-white" />

                    )
                  }

                  {/* ICON */}

                  <Icon className="w-5 h-5" />

                  {/* TITLE */}

                  <span>

                    {item.title}

                  </span>

                </Link>

              )

            })
          }

        </nav>

        {/* FOOTER */}

        <div className="mt-auto">

          <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow-2xl">

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />

            <h3 className="text-xl font-bold text-white relative z-10">

              AI Workspace ✨

            </h3>

            <p className="text-sm text-white/90 mt-3 leading-relaxed relative z-10">

              Smart project matching, AI recommendations, proposal generation, and freelance automation.

            </p>

          </div>

        </div>

      </aside>

    </>

  )

}