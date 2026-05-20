"use client"

export default function NotificationPanel() {

  const notifications = [

    {
      id: 1,
      title: "New AI Match",
      message: "AI found a high matching project for you.",
      color: "green"
    },

    {
      id: 2,
      title: "New Message",
      message: "Client sent you a message.",
      color: "blue"
    },

    {
      id: 3,
      title: "Project Posted",
      message: "A new AI SaaS project was posted.",
      color: "purple"
    }

  ]

  return (
    <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Notifications
        </h2>

        <span className="text-zinc-500 text-sm">
          Recent Activity
        </span>

      </div>

      <div className="space-y-4">

        {
          notifications.map((notification) => (

            <div
              key={notification.id}
              className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`w-3 h-3 rounded-full ${
                    notification.color === "green"
                      ? "bg-green-400"
                      : notification.color === "blue"
                      ? "bg-blue-400"
                      : "bg-purple-400"
                  }`}
                />

                <h3 className="text-white font-semibold">
                  {notification.title}
                </h3>

              </div>

              <p className="text-zinc-400 mt-3 text-sm">
                {notification.message}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  )
}