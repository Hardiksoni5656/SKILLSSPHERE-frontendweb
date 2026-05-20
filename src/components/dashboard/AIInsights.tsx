"use client"

import {
  Sparkles,
  TrendingUp,
  Brain,
  DollarSign
} from "lucide-react"

export default function AIInsights() {

  const insights = [

    {
      icon: TrendingUp,
      title: "Trending Skills",
      message:
        "React + AI development projects are rapidly increasing in demand."
    },

    {
      icon: Brain,
      title: "AI Recommendation",
      message:
        "Your profile matches strongly with SaaS and AI marketplace projects."
    },

    {
      icon: DollarSign,
      title: "Pricing Suggestion",
      message:
        "Freelancers with your skills are charging between $35-$50/hr."
    }

  ]

  return (
    <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40">

      <div className="flex items-center gap-3 mb-8">

        <Sparkles className="w-7 h-7 text-yellow-400" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Smart Insights
          </h2>

          <p className="text-zinc-400 mt-1">
            Personalized AI-powered recommendations
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {
          insights.map((insight, index) => {

            const Icon = insight.icon

            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition"
              >

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0">

                    <Icon className="w-6 h-6 text-green-400" />

                  </div>

                  <div>

                    <h3 className="text-white font-semibold text-lg">
                      {insight.title}
                    </h3>

                    <p className="text-zinc-400 mt-2 leading-relaxed">
                      {insight.message}
                    </p>

                  </div>

                </div>

              </div>
            )

          })
        }

      </div>

    </div>
  )
}