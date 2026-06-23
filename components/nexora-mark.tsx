"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

// 🟢 FIX: Added a default fallback configuration value (= false) to stop TypeScript errors in your header
export function NexoraMark({ className, isParentHovered = false }: { className?: string; isParentHovered?: boolean }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
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
          0%, 100% { transform: translateY(0px) scale(1.4); }
          50% { transform: translateY(-4px) scale(1.45); }
        }
        @keyframes burstGlow {
          0% { transform: scale(1.4); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
          30% { transform: scale(1.65); filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.9)); }
          100% { transform: scale(1.4); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
        }
        .base-logo-motion {
          /* 🟢 BASE SIZE BUMP: Forcefully boosted base scale to 1.4 for a noticeably larger layout presence */
          transform: scale(1.4);
          transform-origin: center left;
          animation: logoMotion 4s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        /* 🟢 GLOW ENGINE: Automatically activates bright aura on mouse-over */
        .brand-hover-active {
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.95)) brightness(1.2) !important;
          transform: translateY(-2px) scale(1.5) !important;
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
