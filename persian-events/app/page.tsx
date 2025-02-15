"use client"

import { useEffect, useRef, useState } from "react"
import { sampleEvents } from "@/lib/sample-data"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / window.innerHeight)
      setCurrentIndex(index)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY
      const newIndex = delta > 0 ? Math.min(currentIndex + 1, sampleEvents.length - 1) : Math.max(currentIndex - 1, 0)
      container.scrollTo({
        top: newIndex * window.innerHeight,
        behavior: "smooth",
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
        const newIndex =
          e.key === "ArrowDown" ? Math.min(currentIndex + 1, sampleEvents.length - 1) : Math.max(currentIndex - 1, 0)
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
      <div ref={containerRef} className="snap-container">
        {sampleEvents.map((event, index) => (
          <div key={event.eventId} className="snap-item relative">
            <Image
              src={event.images[0] || "/placeholder.svg"}
              alt={event.name}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 bg-primary p-4 md:p-6">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold">{event.name}</h2>
                <p className="text-lg md:text-xl mt-2">
                  {new Date(event.startDateTime).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  {new Date(event.startDateTime).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <Link
                  href={`/event/${event.eventId}`}
                  className="mt-4 inline-block rounded-full bg-accent px-6 py-2 text-white hover:bg-accent/90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

