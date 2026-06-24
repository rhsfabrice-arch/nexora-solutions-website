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
      {/* 🟢 MASTER VISUAL ENGINE: Implements high-intensity fluid floats and intense background plate glows */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes attractiveFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1.05); }
          25% { transform: translateY(-3px) rotate(1.5deg) scale(1.08); }
          50% { transform: translateY(-1px) rotate(-1deg) scale(1.06); }
          75% { transform: translateY(-4px) rotate(0.5deg) scale(1.09); }
        }
        @keyframes laserSweep {
          0% { left: -200%; }
          100% { left: 200%; }
        }
        @keyframes corporateClick {
          0% { transform: scale(1.05); }
          30% { transform: scale(1.3); filter: brightness(1.5) drop-shadow(0 0 30px #10b981); }
          100% { transform: scale(1.05); }
        }
        .fluid-float-engine {
          animation: attractiveFloat 6s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 10;
        }
        /* 🟢 HIGH-INTENSITY LOGO GLOW: Ignites on parent element cursor hover */
        .logo-bright-glow {
          transform: scale(1.18) translateY(-2px) rotate(3deg) !important;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.95)) brightness(1.25) !important;
        }
        .click-active-frame {
          animation: corporateClick 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .laser-beam {
          position: absolute;
          top: 0; left: -200%; width: 60%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-30deg);
        }
        .run-laser {
          animation: laserSweep 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        /* 🟢 PREMIUM GLASS SQUARE BACKGROUND PLATE: Designed with solid borders and high-density back-blooms */
        .premium-glass-plate {
          position: absolute;
          top: -12px; left: -12px; right: -12px; bottom: -12px;
          border-radius: 14px;
          background: rgba(11, 31, 53, 0); /* Navy transparent match */
          border: 1px solid rgba(16, 185, 129, 0);
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          z-index: 1;
        }
        .plate-glow-active {
          opacity: 1;
          transform: scale(1);
          background: rgba(16, 185, 129, 0.12);
          border: 1.5px solid #10b981;
          /* Dual-layer intense outer and inner high-visibility backlight bloom */
          box-shadow: 
            0 0 30px rgba(16, 185, 129, 0.4), 
            0 0 15px rgba(16, 185, 129, 0.2),
            inset 0 0 15px rgba(16, 185, 129, 0.2);
          backdrop-filter: blur(6px);
        }
      `}} />

      <div className="relative inline-block select-none overflow-visible">
        {/* Glowing luxury glass frame square layer */}
        <div className={`premium-glass-plate ${isParentHovered ? "plate-glow-active" : ""}`} />
        
        {/* Core Animated Image Shell */}
        <div 
          onClick={handleClick}
          className={`relative cursor-pointer overflow-hidden rounded-lg ${className || "h-9 w-9"} ${
            isClicked ? "click-active-frame" : `fluid-float-engine ${isParentHovered ? "logo-bright-glow" : ""}`
          }`}
        >
          <Image
            src="/logo.png"
            alt="Nexora Solutions Corporate Logo"
            fill
            priority
            className="object-contain"
          />
          {/* Internal reflection surface light sweep */}
          <div className={`laser-beam ${!isParentHovered ? "run-laser" : ""}`} />
        </div>
      </div>
    </>
  )
}
