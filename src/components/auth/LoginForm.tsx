"use client"

import { useState } from "react"

import Link from "next/link"

import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"

import api from "@/services/api"

import {
  Mail,
  Lock,
  Eye,
  EyeOff
} from "lucide-react"

import { toast } from "sonner"

export default function LoginForm() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(false)

  const [showPassword, setShowPassword] =
    useState(false)

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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

      const response = await api.post(
        "/auth/login",
        formData
      )

      // STORE TOKEN

      localStorage.setItem(
        "token",
        response.data.access_token
      )

      // STORE USER

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      )

      toast.success(
        "Login successful"
      )

      // ADMIN REDIRECT

      if (
        response.data.user.role ===
        "admin"
      ) {

        router.push("/admin")

      } else {

        router.push("/dashboard")

      }

    } catch (error: any) {

      toast.error(
        error.response?.data?.detail ||
        "Login failed"
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
          Welcome Back
        </h1>

        <p className="text-zinc-400">
          Login to continue to SKILLSSPHERE
        </p>

      </div>

      <div className="space-y-5">

        {/* EMAIL */}

        <div className="relative">

          <Mail className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />

          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="pl-12 h-12 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500"
          />

        </div>

        {/* PASSWORD */}

        <div className="relative">

          <Lock className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />

          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            className="pl-12 pr-12 h-12 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-3 text-zinc-500 hover:text-white transition"
          >

            {
              showPassword
                ? (
                  <EyeOff className="w-5 h-5" />
                )
                : (
                  <Eye className="w-5 h-5" />
                )
            }

          </button>

        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition disabled:opacity-50"
      >

        {
          loading
            ? "Logging In..."
            : "Login"
        }

      </button>

      <div className="text-center text-zinc-400">

        Don&apos;t have an account?{" "}

        <Link
          href="/auth/register"
          className="text-white hover:underline"
        >

          Register

        </Link>

      </div>

    </form>
  )
}