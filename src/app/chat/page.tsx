"use client"

import { useEffect, useRef, useState } from "react"

import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

import api from "@/services/api"
import aiApi from "@/services/ai"

import {
  Bot,
  Send,
  Sparkles,
  User,
  Cpu
} from "lucide-react"

interface Message {

  id: number

  sender: string

  receiver: string

  content: string
}

export default function ChatPage() {

  const [messages, setMessages] =
    useState<Message[]>([])

  const [newMessage, setNewMessage] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const bottomRef =
    useRef<HTMLDivElement>(null)

  const sender = "Hardik"

  const receiver = "Client"

  useEffect(() => {

    fetchMessages()

  }, [])

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [messages])

  const fetchMessages = async () => {

    try {

      const response =
        await api.get(
          `/messages?sender=${sender}&receiver=${receiver}`
        )

      setMessages(response.data)

    } catch (error) {

      console.error(error)

    }

  }

  const sendMessage = async () => {

    if (!newMessage.trim()) return

    try {

      await api.post("/messages", {

        sender,

        receiver,

        content: newMessage

      })

      const newMsg = {

        id: Date.now(),

        sender,

        receiver,

        content: newMessage

      }

      setMessages((prev) => [

        ...prev,

        newMsg

      ])

      setNewMessage("")

    } catch (error) {

      console.error(error)

    }

  }

  const askAssistant = async () => {

    if (!newMessage.trim()) return

    try {

      setLoading(true)

      const userMessage = {

        id: Date.now(),

        sender: sender,

        receiver: "AI Assistant",

        content: newMessage
      }

      setMessages((prev) => [

        ...prev,

        userMessage

      ])

      // FETCH PROJECTS

      const projectResponse =
        await api.get("/projects")

      const projects =
        projectResponse.data

      let aiResponse = ""

      const message =
        newMessage.toLowerCase()

      // SHOW PROJECTS

      if (

        message.includes("projects") ||

        message.includes("show projects")

      ) {

        aiResponse =
          projects.length > 0

            ? projects.map(
                (
                  project: any,
                  index: number
                ) =>

                  `${index + 1}. ${project.title}`

              ).join("\n")

            : "No projects available right now."

      }

      // SUGGEST PROJECT

      else if (

        message.includes("suggest")

      ) {

        if (projects.length > 0) {

          const suggested =
            projects[0]

          aiResponse =
            `I recommend "${suggested.title}" because it matches trending AI and full-stack freelance skills.`

        } else {

          aiResponse =
            "No projects available for recommendation."

        }

      }

      // NORMAL AI

      else {

        const response =
          await aiApi.post(
            "/assistant",
            {
              message: newMessage
            }
          )

        aiResponse =
          response.data.response

      }

      const aiMessage = {

        id: Date.now() + 1,

        sender: "AI Assistant",

        receiver: sender,

        content: aiResponse
      }

      setMessages((prev) => [

        ...prev,

        aiMessage

      ])

      setNewMessage("")

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen bg-[#0f172a] flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 p-8 flex flex-col space-y-8">

          {/* HERO */}

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-10 shadow-2xl">

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center justify-between flex-wrap gap-6">

              <div>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">

                    <Cpu className="w-8 h-8 text-white" />

                  </div>

                  <div>

                    <h1 className="text-5xl font-black text-white tracking-tight">

                      AI Assistant

                    </h1>

                    <p className="text-white/90 mt-3 text-lg">

                      Smart freelance communication powered by AI.

                    </p>

                  </div>

                </div>

              </div>

              <div className="px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 text-white font-semibold">

                🤖 AI Online

              </div>

            </div>

          </div>

          {/* CHAT CONTAINER */}

          <div className="flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl flex flex-col overflow-hidden">

            {/* HEADER */}

            <div className="border-b border-white/10 px-8 py-6 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-xl">

                  <Bot className="w-7 h-7 text-white" />

                </div>

                <div>

                  <h2 className="text-2xl font-black text-white">

                    AI Chat Workspace

                  </h2>

                  <p className="text-slate-400 mt-1">

                    Ask questions, get project recommendations, and chat with AI.

                  </p>

                </div>

              </div>

            </div>

            {/* MESSAGES */}

            <div className="flex-1 overflow-y-auto p-8 space-y-6">

              {
                messages.length === 0 && (

                  <div className="h-full flex flex-col items-center justify-center text-center">

                    <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-2xl mb-8">

                      <Sparkles className="w-10 h-10 text-white" />

                    </div>

                    <h2 className="text-3xl font-black text-white">

                      Start AI Conversation

                    </h2>

                    <p className="text-slate-400 mt-4 max-w-lg leading-relaxed">

                      Ask about projects, freelance opportunities, proposals, pricing, or AI recommendations.

                    </p>

                  </div>

                )
              }

              {
                messages.map((message) => {

                  const isUser =
                    message.sender === sender

                  const isAI =
                    message.sender === "AI Assistant"

                  return (

                    <div
                      key={message.id}
                      className={`flex ${
                        isUser
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      <div className={`max-w-2xl flex gap-4 ${isUser ? "flex-row-reverse" : ""}`}>

                        {/* AVATAR */}

                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl shrink-0 ${
                          isUser
                            ? "bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400"
                            : "bg-emerald-500"
                        }`}>

                          {
                            isUser
                              ? <User className="w-5 h-5 text-white" />
                              : <Bot className="w-5 h-5 text-white" />
                          }

                        </div>

                        {/* MESSAGE */}

                        <div className={`rounded-[28px] px-6 py-5 shadow-xl ${
                          isUser
                            ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white"
                            : "bg-white/10 backdrop-blur-xl border border-white/10 text-white"
                        }`}>

                          <p className="text-xs uppercase tracking-wider opacity-70 mb-3 font-bold">

                            {message.sender}

                          </p>

                          <p className="leading-relaxed whitespace-pre-line">

                            {message.content}

                          </p>

                        </div>

                      </div>

                    </div>

                  )

                })
              }

              {
                loading && (

                  <div className="flex justify-start">

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl">

                        <Bot className="w-5 h-5 text-white" />

                      </div>

                      <div className="rounded-[28px] px-6 py-5 bg-white/10 border border-white/10 backdrop-blur-xl text-white">

                        AI is thinking...

                      </div>

                    </div>

                  </div>

                )
              }

              <div ref={bottomRef} />

            </div>

            {/* INPUT */}

            <div className="border-t border-white/10 p-6">

              <div className="flex gap-4">

                <input
                  value={newMessage}
                  onChange={(e) =>
                    setNewMessage(
                      e.target.value
                    )
                  }
                  placeholder="Ask AI about projects, pricing, skills..."
                  className="flex-1 h-16 rounded-3xl bg-white/5 border border-white/10 px-6 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  className="px-7 rounded-3xl bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >

                  Send

                </button>

                <button
                  type="button"
                  onClick={askAssistant}
                  className="px-8 rounded-3xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
                >

                  <Send className="w-5 h-5" />

                  Ask AI

                </button>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}