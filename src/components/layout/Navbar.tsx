"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          SKILLSSPHERE
        </Link>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">

          <Link href="/">
            Home
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

        </div>

        <div className="flex items-center gap-4">

          <Link
            href="/auth/login"
            className="text-zinc-300 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  )
}