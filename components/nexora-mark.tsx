"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

export function NexoraMark({ className }: { className?: string }) {
  const [isClicked, setIsClicked] = useState(false)

  // Trigger expansion flash animation toggle handler
  const handleClick = () => {
    setIsClicked(true)
  }

  // Automatically reset the expansion layout state after the flash completes
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), 800) // Matches animation duration
      return () => clearTimeout(timer)
    }
  }, [isClicked])

  return (
    <>
      {/* 🟢 INLINE CSS ANIMATIONS Matrix: Embedded directly to prevent global framework stylesheet clashes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }
        @keyframes clickExpandGlow {
          0% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
          30% { transform: scale(1.25); filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.8)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
        }
        .animate-logo-float {
          animation: logoFloat 4s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .animate-logo-float:hover {
          transform: scale(1.05);
        }
        .animate-logo-glow {
          animation: clickExpandGlow 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50;
        }
      `}} />

      {/* Interactive Container Element Block mapping your states */}
      <div 
        onClick={handleClick}
        className={`relative transition-all duration-300 ${className || "h-8 w-8"} ${
          isClicked ? "animate-logo-glow" : "animate-logo-float"
        }`}
      >
        <Image
          src="/logo.png"
          alt="Nexora Solutions Corporate Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </>
  )
}
