"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function AnalyticsChart() {

  const data = [

    {
      month: "Jan",
      users: 20,
      projects: 10
    },

    {
      month: "Feb",
      users: 35,
      projects: 18
    },

    {
      month: "Mar",
      users: 48,
      projects: 30
    },

    {
      month: "Apr",
      users: 70,
      projects: 44
    },

    {
      month: "May",
      users: 95,
      projects: 60
    }

  ]

  return (
    <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Platform Analytics
        </h2>

        <p className="text-zinc-400 mt-2">
          User and project growth overview
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <XAxis
              dataKey="month"
              stroke="#888"
            />

            <YAxis stroke="#888" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="projects"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}