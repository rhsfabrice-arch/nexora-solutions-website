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
          30% { transform: scale(1.35); filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.9)); }
          100% { transform: scale(1.15); filter: drop-shadow(0 0 0px rgba(16, 185, 129, 0)); }
        }
        .base-logo-motion {
          /* 🟢 CONTROLLED TRANSFORMS: Scaled and anchored centered to prevent touching adjacent text strings */
          transform: scale(1.15);
          transform-origin: center center;
          animation: logoMotion 4s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 10;
        }
        .brand-hover-active {
          filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8)) brightness(1.1);
          transform: translateY(-2px) scale(1.2) !important;
        }
        .click-burst-active {
          animation: burstGlow 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50;
        }
        /* 🟢 GLOWING SQUARE: Big square plate template positioned directly behind your logo asset */
        .glowing-bg-square {
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          background: rgba(16, 185, 129, 0.04);
          border: 1px solid rgba(16, 185, 129, 0);
          border-radius: 14px;
          opacity: 0;
          transform: scale(0.85);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
          z-index: 1;
        }
        .square-hover-active {
          opacity: 1;
          transform: scale(1);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.15), inset 0 0 12px rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(4px);
        }
      `}} />

      <div className="relative inline-block select-none">
        {/* Glowing square background layer element mapping states */}
        <div className={`glowing-bg-square ${isParentHovered ? "square-hover-active" : ""}`} />
        
        {/* Core Image container mapping interactive frames */}
        <div 
          onClick={handleClick}
          className={`relative cursor-pointer ${className || "h-9 w-9"} ${
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
      </div>
    </>
  )
}
