"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-black text-white px-6">

      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Find Freelancers.
          <br />
          Build Dreams.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          AI-powered freelance marketplace connecting talented freelancers
          with clients worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4"
        >

          <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition">
            Start Hiring
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition">
            Explore Projects
          </button>

        </motion.div>

      </div>

    </section>
  )
}