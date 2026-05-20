"use client"

import { useEffect, useState } from "react"

import api from "@/services/api"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import ProjectCard from "@/components/projects/ProjectCard"

import CreateProjectModal from "@/components/projects/CreateProjectModal"

import {
  Search,
  Sparkles,
  Briefcase,
  TrendingUp
} from "lucide-react"

interface Project {

  id: number

  title: string

  description: string

  budget: string

  skills: string

  client_name: string
}

export default function ProjectsPage() {

  const [projects, setProjects] =
    useState<Project[]>([])

  const [loading, setLoading] =
    useState(true)

  const [showModal, setShowModal] =
    useState(false)

  const [search, setSearch] =
    useState("")

  useEffect(() => {

    fetchProjects()

  }, [])

  const fetchProjects = async () => {

    try {

      const response =
        await api.get("/projects")

      setProjects(response.data)

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  const filteredProjects =
    projects.filter(
      (project) =>

        project.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        project.skills
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        project.description
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    )

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8 space-y-8">

          {/* HERO */}

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">

                    <Sparkles className="w-7 h-7 text-white" />

                  </div>

                  <div>

                    <h1 className="text-5xl font-black text-white tracking-tight">

                      Projects Marketplace

                    </h1>

                    <p className="text-white/90 mt-3 text-lg">

                      Discover AI-powered freelance opportunities.

                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="h-14 px-7 rounded-2xl bg-white text-slate-900 font-bold shadow-xl hover:scale-[1.02] transition-all duration-300"
              >

                Post Project

              </button>

            </div>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* TOTAL */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">

                    Total Projects

                  </p>

                  <h2 className="text-4xl font-black text-white mt-3">

                    {projects.length}

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-xl">

                  <Briefcase className="w-7 h-7 text-white" />

                </div>

              </div>

            </div>

            {/* ACTIVE */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">

                    Active Bids

                  </p>

                  <h2 className="text-4xl font-black text-white mt-3">

                    48

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl">

                  <TrendingUp className="w-7 h-7 text-white" />

                </div>

              </div>

            </div>

            {/* AI MATCH */}

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">

                    AI Matches

                  </p>

                  <h2 className="text-4xl font-black text-white mt-3">

                    94%

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl">

                  <Sparkles className="w-7 h-7 text-white" />

                </div>

              </div>

            </div>

          </div>

          {/* SEARCH */}

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-xl">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl">

                <Search className="w-6 h-6 text-white" />

              </div>

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search projects, skills, technologies..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-lg"
              />

            </div>

          </div>

          {/* RESULTS */}

          <div className="flex items-center justify-between">

            <p className="text-slate-400 text-lg">

              Showing{" "}

              <span className="text-white font-bold">

                {filteredProjects.length}

              </span>{" "}

              projects

            </p>

            {
              search && (

                <button
                  onClick={() =>
                    setSearch("")
                  }
                  className="text-slate-400 hover:text-white transition"
                >

                  Clear Search

                </button>

              )
            }

          </div>

          {/* PROJECTS */}

          {
            loading ? (

              <div className="text-white text-xl">

                Loading projects...

              </div>

            ) : filteredProjects.length === 0 ? (

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-14 text-center shadow-xl">

                <h2 className="text-3xl font-black text-white">

                  No Projects Found

                </h2>

                <p className="text-slate-400 mt-4">

                  Try searching with different skills or keywords.

                </p>

              </div>

            ) : (

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {
                  filteredProjects.map(
                    (project) => (

                      <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        budget={project.budget}
                        skills={project.skills}
                        client_name={project.client_name}
                      />

                    )
                  )
                }

              </div>

            )
          }

        </main>

      </div>

      {/* MODAL */}

      {
        showModal && (

          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-6">

            <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#111827] p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Create Project

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Post a new freelance opportunity.

                  </p>

                </div>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition"
                >

                  ✕

                </button>

              </div>

              <CreateProjectModal
                onSuccess={() => {

                  setShowModal(false)

                  fetchProjects()

                }}
              />

            </div>

          </div>

        )
      }

    </div>

  )

}