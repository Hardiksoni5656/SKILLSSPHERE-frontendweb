"use client"

import { useState } from "react"

import api from "@/services/api"

import { toast } from "sonner"

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

interface Props {

  projectId: number

  onClose: () => void
}

export default function BidModal({
  projectId,
  onClose
}: Props) {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    freelancer_name: "",
    proposal: "",
    bid_amount: ""
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

      await api.post("/bids", {
        project_id: projectId,
        ...formData
      })

      toast.success("Bid submitted successfully")

      onClose()

    } catch (error) {

      toast.error("Failed to submit bid")

    } finally {

      setLoading(false)

    }

  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="w-full max-w-2xl p-8 rounded-3xl border border-zinc-800 bg-zinc-900">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-white">
            Submit Proposal
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            name="freelancer_name"
            value={formData.freelancer_name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <Textarea
            name="proposal"
            value={formData.proposal}
            onChange={handleChange}
            placeholder="Write your proposal..."
          />

          <Input
            name="bid_amount"
            value={formData.bid_amount}
            onChange={handleChange}
            placeholder="Your Bid Amount"
          />

          <button
            disabled={loading}
            className="w-full h-12 rounded-xl bg-white text-black font-semibold"
          >

            {
              loading
                ? "Submitting..."
                : "Submit Proposal"
            }

          </button>

        </form>

      </div>

    </div>
  )
}