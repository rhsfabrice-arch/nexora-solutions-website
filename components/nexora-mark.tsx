import { cn } from "@/lib/utils"

/**
 * Minimal geometric logo mark inspired by Nexora's emblem:
 * navy circular/recycling arrows forming a loop with ascending green triangles.
 */
export function NexoraMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Nexora Solutions emblem"
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ascending green triangles */}
      <path d="M32 4l5 8h-10l5-8z" fill="var(--green)" />
      <path d="M22 15l4 6h-8l4-6z" fill="var(--green)" />
      <path d="M42 15l4 6h-8l4-6z" fill="var(--green)" />
      {/* navy looping arrows */}
      <path
        d="M14 28a18 18 0 0 1 16-10v5"
        stroke="var(--navy)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 28a18 18 0 0 0-16-10v5"
        stroke="var(--navy)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14 30l-4 6 8 0-4-6z"
        fill="var(--navy)"
      />
      <path
        d="M50 30l4 6-8 0 4-6z"
        fill="var(--navy)"
      />
      {/* green base arc */}
      <path
        d="M18 46a14 14 0 0 1 28 0"
        stroke="var(--green)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
