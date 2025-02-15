import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E2E]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Dore Hami
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/venues" className="text-white hover:text-primary transition-colors">
            Venues
          </Link>
          <Link href="/plan-event" className="text-white hover:text-primary transition-colors">
            Plan Event
          </Link>
          <Link href="/about" className="text-white hover:text-primary transition-colors">
            About
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden text-white">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

