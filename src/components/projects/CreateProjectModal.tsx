"use client"

import { useState } from "react"

import api from "@/services/api"

import { toast } from "sonner"

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

interface Props {
  onSuccess: () => void
}

export default function CreateProjectModal({
  onSuccess
}: Props) {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    skills: "",
    client_name: ""
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    try {

      setLoading(true)

      await api.post(
        "/projects",
        formData
      )

      toast.success("Project created successfully")

      onSuccess()

      setFormData({
        title: "",
        description: "",
        budget: "",
        skills: "",
        client_name: ""
      })

    } catch (error) {

      toast.error("Failed to create project")

    } finally {

      setLoading(false)

    }

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <Input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Project Title"
      />

      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Project Description"
      />

      <Input
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder="Budget"
      />

      <Input
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills (comma separated)"
      />

      <Input
        name="client_name"
        value={formData.client_name}
        onChange={handleChange}
        placeholder="Client Name"
      />

      <button
        disabled={loading}
        className="w-full h-12 rounded-xl bg-white text-black font-semibold"
      >

        {
          loading
            ? "Creating..."
            : "Create Project"
        }

      </button>

    </form>
  )
}