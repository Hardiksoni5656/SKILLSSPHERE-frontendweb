"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"

import api from "@/services/api"

import { Mail, Lock, User } from "lucide-react"

import { toast } from "sonner"

export default function RegisterForm() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "Freelancer"
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        "/auth/register",
        formData
      )

      toast.success("Account created successfully")

      router.push("/auth/login")

    } catch (error: any) {

      toast.error(
        error.response?.data?.detail ||
        "Registration failed"
      )

    } finally {

      setLoading(false)

    }

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      <div className="space-y-3 text-center">

        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-zinc-400">
          Join SKILLSSPHERE today
        </p>

      </div>

      <div className="space-y-5">

        <div className="relative">

          <User className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />

          <Input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="pl-12 h-12 bg-zinc-950 border-zinc-800"
          />

        </div>

        <div className="relative">

          <Mail className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />

          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="pl-12 h-12 bg-zinc-950 border-zinc-800"
          />

        </div>

        <div className="relative">

          <Lock className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />

          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="pl-12 h-12 bg-zinc-950 border-zinc-800"
          />

        </div>

        <select
         name="role"
         value={formData.role}
         onChange={handleChange}
         className="w-full h-12 rounded-xl bg-zinc-950 border border-zinc-800 px-4 text-white"
        >

        <option 
         value="Freelancer">
         Freelancer
        </option>

        <option 
        value="Client">
        Client
        </option>

      </select>

      </div>

      <button
        disabled={loading}
        className="w-full h-12 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
      >
        {
          loading
            ? "Creating Account..."
            : "Create Account"
        }
      </button>

      <div className="text-center text-zinc-400">

        Already have an account?{" "}

        <Link
          href="/auth/login"
          className="text-white hover:underline"
        >
          Login
        </Link>

      </div>

    </form>
  )
} 