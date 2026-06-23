"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

export function NexoraMark({ className, isParentHovered = false }: { className?: string; isParentHovered?: boolean }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevents parent link conflicts
    setIsClicked(true)
  }

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isClicked])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logoMotion {
          0%, 100% { transform: translateY(0px) scale(1.15); }
          50% { transform: translateY(-4px) scale(1.18); }
        }
        @keyframes burstGlow {
          0% { transform: scale(1.15); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
          30% { transform: scale(1.4); filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.9)); }
          100% { transform: scale(1.15); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
        }
        .base-logo-motion {
          /* 🟢 INCREASED SIZE: Base size scale bumped to 1.15 */
          transform: scale(1.15);
          animation: logoMotion 4s ease-in-out infinite;
          transition: all 0.3s ease-in-out;
        }
        /* 🟢 HOVER LIGHT: Adds a brilliant drop-shadow glow when parent brand area is hovered */
        .brand-hover-active {
          filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.85)) brightness(1.1);
          transform: translateY(-2px) scale(1.2) !important;
        }
        .click-burst-active {
          animation: burstGlow 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50;
        }
      `}} />

      <div 
        onClick={handleClick}
        className={`relative cursor-pointer select-none ${className || "h-9 w-9"} ${
          isClicked ? "click-burst-active" : `base-logo-motion ${isParentHovered ? "brand-hover-active" : ""}`
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
