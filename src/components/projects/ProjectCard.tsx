"use client"

import { useEffect, useState } from "react"

import BidModal from "@/components/projects/BidModal"

import aiApi from "@/services/ai"

import {
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react"

interface ProjectCardProps {

  id: number

  title: string

  description: string

  budget: string

  skills: string

  client_name: string
}

export default function ProjectCard({
  id,
  title,
  description,
  budget,
  skills,
  client_name
}: ProjectCardProps) {

  const [showBidModal, setShowBidModal] =
    useState(false)

  const [matchScore, setMatchScore] =
    useState<number | null>(null)

  useEffect(() => {

    calculateMatch()

  }, [])

  const calculateMatch = async () => {

    try {

      const freelancerSkills =
        "React Next.js FastAPI AI"

      const response =
        await aiApi.post(
          "/match",
          {
            freelancer_skills:
              freelancerSkills,

            project_skills:
              skills
          }
        )

      setMatchScore(
        response.data.match_score
      )

    } catch (error) {

      console.error(error)

    }

  }

  return (

    <>

      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* HEADER */}

        <div className="relative z-10 flex items-start justify-between gap-5">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl">

                <Briefcase className="w-6 h-6 text-white" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white leading-tight">

                  {title}

                </h2>

                <p className="text-slate-400 mt-1">

                  Posted by {client_name}

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col items-end gap-3">

            {/* BUDGET */}

            <div className="px-5 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold shadow-lg">

              {budget}

            </div>

            {/* MATCH */}

            {
              matchScore && (

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">

                  <Sparkles className="w-4 h-4" />

                  {matchScore}% Match

                </div>

              )
            }

          </div>

        </div>

        {/* DESCRIPTION */}

        <p className="relative z-10 text-slate-300 leading-relaxed mt-8 text-[15px]">

          {description}

        </p>

        {/* SKILLS */}

        <div className="relative z-10 flex flex-wrap gap-3 mt-8">

          {
            skills
              .split(",")
              .map((skill) => (

                <span
                  key={skill}
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >

                  {skill.trim()}

                </span>

              ))
          }

        </div>

        {/* FOOTER */}

        <div className="relative z-10 mt-10 flex items-center justify-between">

          <div className="text-sm text-slate-500">

            AI matched opportunity

          </div>

          <button
            onClick={() =>
              setShowBidModal(true)
            }
            className="group/button flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300"
          >

            Apply Now

            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition" />

          </button>

        </div>

      </div>

      {/* BID MODAL */}

      {
        showBidModal && (

          <BidModal
            projectId={id}
            onClose={() =>
              setShowBidModal(false)
            }
          />

        )
      }

    </>

  )

}