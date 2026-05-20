"use client"

import { useEffect, useState } from "react"

import api from "@/services/api"
import aiApi from "@/services/ai"

interface Project {

  id: number

  title: string

  description: string

  budget: string

  skills: string

  client_name: string

  matchScore?: number
}

export default function RecommendedProjects() {

  const [projects, setProjects] = useState<Project[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchRecommendations()

  }, [])

  const fetchRecommendations = async () => {

    try {

      const response = await api.get("/projects")

      const allProjects = response.data

      const freelancerSkills =
        "React Next.js FastAPI AI"

      const scoredProjects = await Promise.all(

        allProjects.map(async (project: Project) => {

          const aiResponse = await aiApi.post(
            "/match",
            {
              freelancer_skills: freelancerSkills,
              project_skills: project.skills
            }
          )

          return {
            ...project,
            matchScore:
              aiResponse.data.match_score
          }

        })

      )

      scoredProjects.sort(
        (a, b) =>
          (b.matchScore || 0) -
          (a.matchScore || 0)
      )

      setProjects(
        scoredProjects.slice(0, 3)
      )

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  if (loading) {

    return (
      <div className="text-white">
        Loading AI recommendations...
      </div>
    )

  }

  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold text-white">
          🔥 Recommended Projects
        </h2>

        <p className="text-zinc-400 mt-2">
          Personalized AI-powered recommendations
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {
          projects.map((project) => (

            <div
              key={project.id}
              className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">

                  {project.matchScore}% Match

                </div>

              </div>

              <p className="text-zinc-400 mt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">

                {
                  project.skills.split(",").map((skill) => (

                    <span
                      key={skill}
                      className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                    >
                      {skill.trim()}
                    </span>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}