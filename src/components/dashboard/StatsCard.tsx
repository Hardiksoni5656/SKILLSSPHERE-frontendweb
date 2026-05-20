interface StatsCardProps {
  title: string
  value: string
}

export default function StatsCard({
  title,
  value
}: StatsCardProps) {

  return (
    <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>

    </div>
  )
}