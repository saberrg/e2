export interface Venue {
  venue_id: string
  name: string
  address: string
  rental_rate_per_hour: number
  capacity: number
  amenities: string[]
  description: string
  images: string[]
  contact_phone: string
  contact_email: string
  contact_website: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Event {
  eventId: string
  name: string
  description: string
  venue: {
    venueId: string
    venueName: string
    venueAddress: string
  }[]
  startDateTime: string
  endDateTime: string
  eventCreator: {
    userId: string
    userName: string
  }[]
  tickets: {
    ticketId: string
    ticketType: {
      ticketPrice: number
      ticketsIssued: number
    }
  }[]
  addOns: {
    addOnId: string
    addOnName: string
    price: number
  }[]
  food: {
    foodId: string
    foodName: string
    foodPrice: number
    venueId: string
  }[]
  images: string[]
  entertainment: {
    entertainmentId: string
    entertainmentType: string
    entertainmentName: string
    entertainmentPrice: number
  }[]
}

