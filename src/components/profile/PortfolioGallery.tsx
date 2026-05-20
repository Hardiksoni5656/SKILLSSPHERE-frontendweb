"use client"

import { useEffect, useState } from "react"

import {
  Upload,
  ImagePlus
} from "lucide-react"

interface PortfolioItem {

  id: number

  title: string

  image: string
}

export default function PortfolioGallery() {

  const [portfolioItems, setPortfolioItems] =
    useState<PortfolioItem[]>([])

  // LOAD SAVED PORTFOLIO

  useEffect(() => {

    const savedPortfolio =
      localStorage.getItem(
        "portfolio"
      )

    if (savedPortfolio) {

      setPortfolioItems(
        JSON.parse(savedPortfolio)
      )

    }

  }, [])

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "portfolio",
      JSON.stringify(portfolioItems)
    )

  }, [portfolioItems])

  // IMAGE UPLOAD

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0]

    if (!file) return

    const reader =
      new FileReader()

    reader.onloadend = () => {

      const newItem = {

        id: Date.now(),

        title:
          file.name.split(".")[0],

        image:
          reader.result as string
      }

      setPortfolioItems((prev) => [
        newItem,
        ...prev
      ])

    }

    reader.readAsDataURL(file)

  }

  return (
    <div className="mt-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-black dark:text-white">
            Portfolio Showcase
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            Upload and showcase your projects
          </p>

        </div>

        {/* UPLOAD BUTTON */}

        <label className="cursor-pointer flex items-center gap-3 px-5 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition w-fit">

          <Upload className="w-5 h-5" />

          Upload Project

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />

        </label>

      </div>

      {
        portfolioItems.length === 0 ? (

          <div className="p-10 rounded-3xl border border-dashed border-zinc-400 dark:border-zinc-700 flex flex-col items-center justify-center text-center">

            <ImagePlus className="w-16 h-16 text-zinc-500 mb-5" />

            <h3 className="text-2xl font-bold text-black dark:text-white">
              No Portfolio Items Yet
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-md">
              Upload your best freelance projects, UI designs, dashboards, or applications.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
              portfolioItems.map((item) => (

                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 hover:scale-[1.02] transition"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
                      Uploaded portfolio showcase project.
                    </p>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  )
}