"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

export function NexoraMark({ className, isParentHovered = false }: { className?: string; isParentHovered?: boolean }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsClicked(true)
  }

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), 600)
      return () => clearTimeout(timer)
    }
  }, [isClicked])

  return (
    <>
      {/* 🟢 PREMIUM CLIENT ANIMATIONS Matrix */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes premiumBreathe {
          0%, 100% { transform: scale(1.05); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08)); }
          50% { transform: scale(1.08) translateY(-1px); filter: drop-shadow(0 6px 12px rgba(16, 185, 129, 0.08)); }
        }
        @keyframes luxuryShimmer {
          0% { left: -150%; }
          50%, 100% { left: 150%; }
        }
        @keyframes elegantBurst {
          0% { transform: scale(1.08); filter: brightness(1); }
          40% { transform: scale(1.18); filter: brightness(1.4) drop-shadow(0 0 20px rgba(16, 185, 129, 0.6)); }
          100% { transform: scale(1.05); filter: brightness(1); }
        }
        .premium-motion-container {
          animation: premiumBreathe 5s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }
        /* 🟢 TWISTED GLOW: Ultra-elegant ambient bloom instead of harsh shadows */
        .brand-hover-glow-active {
          transform: scale(1.12) translateY(-1px) !important;
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4)) brightness(1.05) !important;
        }
        .click-burst-active {
          animation: elegantBurst 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Shimmer overlay element */
        .shimmer-track {
          position: absolute;
          top: 0; left: -150%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
        }
        .run-shimmer {
          animation: luxuryShimmer 3s ease-in-out infinite;
        }
        /* 🟢 AMBIENT BACKDROP PANEL: Soft frosted plate */
        .premium-bg-plate {
          position: absolute;
          top: -10px; left: -10px; right: -10px; bottom: -10px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0) 70%);
          border-radius: 12px;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 1;
        }
        .plate-hover-active {
          opacity: 1;
          transform: scale(1);
          background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.02) 60%);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08);
        }
      `}} />

      <div className="relative inline-block select-none overflow-visible">
        {/* Soft elegant bloom background plate */}
        <div className={`premium-bg-plate ${isParentHovered ? "plate-hover-active" : ""}`} />
        
        {/* Core Logo Wrapper Frame */}
        <div 
          onClick={handleClick}
          className={`relative cursor-pointer overflow-hidden rounded-md ${className || "h-9 w-9"} ${
            isClicked ? "click-burst-active" : `premium-motion-container ${isParentHovered ? "brand-hover-glow-active" : ""}`
          }`}
        >
          <Image
            src="/logo.png"
            alt="Nexora Solutions Corporate Logo"
            fill
            priority
            className="object-contain"
          />
          {/* Light-beam sweep reflection overlay */}
          <div className={`shimmer-track ${!isParentHovered ? "run-shimmer" : ""}`} />
        </div>
      </div>
    </>
  )
}
