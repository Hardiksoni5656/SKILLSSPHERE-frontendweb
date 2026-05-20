"use client"

import { useState } from "react"

import api from "@/services/api"

export default function FileUpload() {

  const [file, setFile] = useState<File | null>(null)

  const [message, setMessage] = useState("")

  const uploadFile = async () => {

    if (!file) return

    const formData = new FormData()

    formData.append("file", file)

    try {

      const response = await api.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      )

      setMessage(
        response.data.message
      )

    } catch (error) {

      console.error(error)

    }

  }

  return (
    <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40">

      <h2 className="text-2xl font-bold text-white mb-6">
        Upload Resume / Portfolio
      </h2>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
        className="block w-full text-zinc-300"
      />

      <button
        onClick={uploadFile}
        className="mt-6 px-6 py-3 rounded-2xl bg-white text-black font-semibold"
      >

        Upload File

      </button>

      {
        message && (

          <p className="text-green-400 mt-4">
            {message}
          </p>

        )
      }

    </div>
  )
}