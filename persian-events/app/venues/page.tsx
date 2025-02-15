"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { sampleVenues } from "@/lib/sample-data"

export default function VenuesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const container = document.getElementById("venues-container")
    if (!container) return

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / window.innerHeight)
      setCurrentIndex(index)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY
      const newIndex = delta > 0 ? Math.min(currentIndex + 1, sampleVenues.length - 1) : Math.max(currentIndex - 1, 0)
      container.scrollTo({
        top: newIndex * window.innerHeight,
        behavior: "smooth",
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
        const newIndex =
          e.key === "ArrowDown" ? Math.min(currentIndex + 1, sampleVenues.length - 1) : Math.max(currentIndex - 1, 0)
        container.scrollTo({
          top: newIndex * window.innerHeight,
          behavior: "smooth",
        })
      }
    }

    container.addEventListener("scroll", handleScroll)
    container.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex])

  return (
    <main className="h-screen overflow-hidden">
      <div id="venues-container" className="snap-container h-[calc(100vh-4rem)]">
        {sampleVenues.map((venue) => (
          <div key={venue.venue_id} className="snap-item relative">
            <Image
              src={venue.images[0] || "/placeholder.svg"}
              alt={venue.name}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 bg-primary p-4 md:p-6">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold">{venue.name}</h2>
                <p className="text-lg md:text-xl mt-2">
                  Capacity: {venue.capacity} | Rate: ${venue.rental_rate_per_hour}/hour
                </p>
                <p className="text-lg md:text-xl mt-2">{venue.description}</p>
                <Link
                  href={`/plan-event?venue=${venue.venue_id}`}
                  className="mt-4 inline-block rounded-full bg-accent px-6 py-2 text-white hover:bg-accent/90 transition-colors"
                >
                  Plan Event Here
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

