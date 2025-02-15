import type { Event, Venue } from "@/types"

// Static IDs for demo purposes
const EVENT_IDS = {
  YALDA: "event-yalda-001",
  NOWRUZ: "event-nowruz-002",
  POETRY: "event-poetry-003",
}

export const VENUE_IDS = {
  SHEMROON: "venue-shemroon-001",
  TEHRAN_GARDEN: "venue-tehran-002",
  PERSEPOLIS: "venue-persepolis-003",
}

export const sampleVenues: Venue[] = [
  {
    venue_id: VENUE_IDS.SHEMROON,
    name: "Shemroon Restaurant",
    address: "123 Persian Plaza, Los Angeles, CA 90024",
    rental_rate_per_hour: 250,
    capacity: 150,
    amenities: ["Full Kitchen", "Outdoor Patio", "Stage", "Sound System", "Private Parking"],
    description:
      "An authentic Persian restaurant with beautiful outdoor seating and modern amenities, perfect for intimate gatherings and cultural events.",
    images: ["/placeholder.svg?height=600&width=800"],
    contact_phone: "(310) 555-0123",
    contact_email: "events@shemroon.com",
    contact_website: "https://shemroon.com",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    venue_id: VENUE_IDS.TEHRAN_GARDEN,
    name: "Tehran Garden",
    address: "456 Valley Blvd, Irvine, CA 92602",
    rental_rate_per_hour: 300,
    capacity: 200,
    amenities: ["Garden Space", "Dance Floor", "Catering Kitchen", "Valet Parking"],
    description:
      "A luxurious garden venue perfect for Persian weddings and celebrations, offering a blend of natural beauty and elegant amenities.",
    images: ["/placeholder.svg?height=600&width=800"],
    contact_phone: "(949) 555-0456",
    contact_email: "events@tehrangarden.com",
    contact_website: "https://tehrangarden.com",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    venue_id: VENUE_IDS.PERSEPOLIS,
    name: "Persepolis Hall",
    address: "789 Sunset Blvd, San Diego, CA 92101",
    rental_rate_per_hour: 400,
    capacity: 300,
    amenities: ["Grand Ballroom", "State-of-the-art AV System", "Bridal Suite", "Ample Parking"],
    description:
      "An elegant venue inspired by the ancient city of Persepolis, perfect for large gatherings and grand Persian celebrations.",
    images: ["/placeholder.svg?height=600&width=800"],
    contact_phone: "(619) 555-0789",
    contact_email: "events@persepolishall.com",
    contact_website: "https://persepolishall.com",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export const sampleEvents: Event[] = [
  {
    eventId: EVENT_IDS.YALDA,
    name: "Shabeh Yalda at Shemroon",
    description:
      "Join us for the longest night of the year celebration with traditional Persian cuisine, music, and poetry reading. Experience the magic of Yalda Night with pomegranates, nuts, and the reading of Hafez poems. Live traditional music and dance performances throughout the night.",
    venue: [
      {
        venueId: VENUE_IDS.SHEMROON,
        venueName: sampleVenues[0].name,
        venueAddress: sampleVenues[0].address,
      },
    ],
    startDateTime: "2024-12-21T19:00",
    endDateTime: "2024-12-22T00:00",
    eventCreator: [
      {
        userId: "creator-001",
        userName: "Shemroon Events",
      },
    ],
    tickets: [
      {
        ticketId: "ticket-yalda-001",
        ticketType: {
          ticketPrice: 85,
          ticketsIssued: 150,
        },
      },
    ],
    addOns: [
      {
        addOnId: "addon-yalda-001",
        addOnName: "Premium Seating",
        price: 25,
      },
      {
        addOnId: "addon-yalda-002",
        addOnName: "Hafez Poetry Book",
        price: 15,
      },
      {
        addOnId: "addon-yalda-003",
        addOnName: "Traditional Sweets Box",
        price: 30,
      },
    ],
    food: [
      {
        foodId: "food-yalda-001",
        foodName: "Traditional Yalda Feast - Including:",
        foodPrice: 0,
        venueId: VENUE_IDS.SHEMROON,
      },
      {
        foodId: "food-yalda-002",
        foodName: "• Ash Reshteh (Persian Noodle Soup)",
        foodPrice: 0,
        venueId: VENUE_IDS.SHEMROON,
      },
      {
        foodId: "food-yalda-003",
        foodName: "• Zereshk Polo ba Morgh (Barberry Rice with Chicken)",
        foodPrice: 0,
        venueId: VENUE_IDS.SHEMROON,
      },
      {
        foodId: "food-yalda-004",
        foodName: "• Selection of Persian Desserts",
        foodPrice: 0,
        venueId: VENUE_IDS.SHEMROON,
      },
    ],
    images: ["/placeholder.svg?height=600&width=800"],
    entertainment: [
      {
        entertainmentId: "ent-yalda-001",
        entertainmentType: "Live Music",
        entertainmentName: "Traditional Persian Ensemble",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-yalda-002",
        entertainmentType: "Poetry Reading",
        entertainmentName: "Hafez Poetry Reading Ceremony",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-yalda-003",
        entertainmentType: "Dance",
        entertainmentName: "Traditional Persian Dance Performance",
        entertainmentPrice: 0,
      },
    ],
  },
  {
    eventId: EVENT_IDS.NOWRUZ,
    name: "Nowruz Celebration",
    description:
      "Welcome the Persian New Year with a grand celebration featuring traditional customs, delicious food, and live performances. Experience the beauty of Haft-Seen, enjoy traditional dance performances, and participate in ancient Nowruz rituals.",
    venue: [
      {
        venueId: VENUE_IDS.TEHRAN_GARDEN,
        venueName: sampleVenues[1].name,
        venueAddress: sampleVenues[1].address,
      },
    ],
    startDateTime: "2025-03-20T18:00",
    endDateTime: "2025-03-21T01:00",
    eventCreator: [
      {
        userId: "creator-002",
        userName: "Tehran Garden Events",
      },
    ],
    tickets: [
      {
        ticketId: "ticket-nowruz-001",
        ticketType: {
          ticketPrice: 120,
          ticketsIssued: 200,
        },
      },
    ],
    addOns: [
      {
        addOnId: "addon-nowruz-001",
        addOnName: "VIP Seating",
        price: 50,
      },
      {
        addOnId: "addon-nowruz-002",
        addOnName: "Professional Haft-Seen Photo Session",
        price: 25,
      },
      {
        addOnId: "addon-nowruz-003",
        addOnName: "Traditional New Year Gift Basket",
        price: 45,
      },
    ],
    food: [
      {
        foodId: "food-nowruz-001",
        foodName: "Nowruz Special Menu - Including:",
        foodPrice: 0,
        venueId: VENUE_IDS.TEHRAN_GARDEN,
      },
      {
        foodId: "food-nowruz-002",
        foodName: "• Sabzi Polo ba Mahi (Herbed Rice with Fish)",
        foodPrice: 0,
        venueId: VENUE_IDS.TEHRAN_GARDEN,
      },
      {
        foodId: "food-nowruz-003",
        foodName: "• Kuku Sabzi (Herb Frittata)",
        foodPrice: 0,
        venueId: VENUE_IDS.TEHRAN_GARDEN,
      },
      {
        foodId: "food-nowruz-004",
        foodName: "• Traditional Nowruz Pastries and Sweets",
        foodPrice: 0,
        venueId: VENUE_IDS.TEHRAN_GARDEN,
      },
    ],
    images: ["/placeholder.svg?height=600&width=800"],
    entertainment: [
      {
        entertainmentId: "ent-nowruz-001",
        entertainmentType: "Live Music",
        entertainmentName: "Traditional Nowruz Ensemble",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-nowruz-002",
        entertainmentType: "Dance",
        entertainmentName: "Regional Persian Dance Performances",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-nowruz-003",
        entertainmentType: "Ceremony",
        entertainmentName: "Traditional Nowruz Rituals",
        entertainmentPrice: 0,
      },
    ],
  },
  {
    eventId: EVENT_IDS.POETRY,
    name: "Persian Poetry Night",
    description:
      "An evening dedicated to the beauty of Persian poetry, featuring readings from classical and contemporary poets. Join us for an intimate gathering where the rich tradition of Persian poetry comes alive through recitations, music, and scholarly discussions.",
    venue: [
      {
        venueId: VENUE_IDS.PERSEPOLIS,
        venueName: sampleVenues[2].name,
        venueAddress: sampleVenues[2].address,
      },
    ],
    startDateTime: "2024-09-15T19:30",
    endDateTime: "2024-09-15T22:30",
    eventCreator: [
      {
        userId: "creator-003",
        userName: "Persepolis Cultural Society",
      },
    ],
    tickets: [
      {
        ticketId: "ticket-poetry-001",
        ticketType: {
          ticketPrice: 50,
          ticketsIssued: 300,
        },
      },
    ],
    addOns: [
      {
        addOnId: "addon-poetry-001",
        addOnName: "Poetry Collection Book",
        price: 35,
      },
      {
        addOnId: "addon-poetry-002",
        addOnName: "Meet & Greet with Poets",
        price: 25,
      },
      {
        addOnId: "addon-poetry-003",
        addOnName: "Calligraphy Workshop",
        price: 40,
      },
    ],
    food: [
      {
        foodId: "food-poetry-001",
        foodName: "Light Persian Refreshments - Including:",
        foodPrice: 0,
        venueId: VENUE_IDS.PERSEPOLIS,
      },
      {
        foodId: "food-poetry-002",
        foodName: "• Selection of Persian Teas",
        foodPrice: 0,
        venueId: VENUE_IDS.PERSEPOLIS,
      },
      {
        foodId: "food-poetry-003",
        foodName: "• Traditional Pastries and Sweets",
        foodPrice: 0,
        venueId: VENUE_IDS.PERSEPOLIS,
      },
      {
        foodId: "food-poetry-004",
        foodName: "• Dried Fruits and Nuts",
        foodPrice: 0,
        venueId: VENUE_IDS.PERSEPOLIS,
      },
    ],
    images: ["/placeholder.svg?height=600&width=800"],
    entertainment: [
      {
        entertainmentId: "ent-poetry-001",
        entertainmentType: "Poetry Reading",
        entertainmentName: "Featured Poets Recitations",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-poetry-002",
        entertainmentType: "Music",
        entertainmentName: "Traditional Setar Performance",
        entertainmentPrice: 0,
      },
      {
        entertainmentId: "ent-poetry-003",
        entertainmentType: "Workshop",
        entertainmentName: "Interactive Poetry Workshop",
        entertainmentPrice: 0,
      },
    ],
  },
]

