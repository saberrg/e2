"use client"

import { useState } from "react"
import { sampleEvents } from "@/lib/sample-data"
import Image from "next/image"
import RSVPForm from "@/components/rsvp-form"

export default function EventPage({ params }: { params: { id: string } }) {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false)
  const event = sampleEvents.find((e) => e.eventId === params.id)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <a href="/" className="text-accent hover:text-accent/90">
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold">
            {event.name} at {event.venue[0].venueName}{" "}
            {new Date(event.startDateTime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            {new Date(event.startDateTime).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            -{" "}
            {new Date(event.endDateTime).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Event Image */}
        <div className="relative aspect-video w-full border-4 border-accent mb-8">
          <Image src={event.images[0] || "/placeholder.svg"} alt={event.name} fill className="object-cover" priority />
        </div>

        {/* RSVP Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsRSVPOpen(true)}
            className="bg-accent text-white text-2xl font-bold py-3 px-16 rounded-full hover:bg-accent/90 transition-colors"
          >
            RSVP
          </button>
        </div>

        {/* Event Details */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Location */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-lg">{event.venue[0].venueName}</p>
              <p className="text-lg">{event.venue[0].venueAddress}</p>
            </div>
          </section>

          {/* Menu */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="grid gap-2">
                {event.food.map((item) => (
                  <p key={item.foodId} className="text-lg">
                    {item.foodName}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="grid gap-2">
                <p className="text-lg">Ticket: ${event.tickets[0].ticketType.ticketPrice}</p>
                {event.addOns.map((addon) => (
                  <p key={addon.addOnId} className="text-lg">
                    {addon.addOnName}: ${addon.price}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Other */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Other</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="grid gap-4">
                <p className="text-lg">{event.description}</p>
                <div className="grid gap-2">
                  <p className="text-lg font-semibold">Entertainment:</p>
                  {event.entertainment.map((item) => (
                    <p key={item.entertainmentId} className="text-lg">
                      • {item.entertainmentName}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-4 mt-12">
        <div className="container mx-auto px-4">
          <p>© 2025 Dore Hami</p>
        </div>
      </footer>

      {/* RSVP Form */}
      <RSVPForm
        eventId={event.eventId}
        ticketPrice={event.tickets[0].ticketType.ticketPrice}
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
      />
    </main>
  )
}

