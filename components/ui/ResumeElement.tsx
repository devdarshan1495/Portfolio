"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function ResumeElement() {
  const [showPreview, setShowPreview] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      <a
        href={siteConfig.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 border border-border px-6 py-4 bg-white hover:border-sky transition-colors"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onMouseMove={handleMouseMove}
        aria-label="View my resume (opens in new tab)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sky flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <div className="text-left">
          <span className="block text-sm font-semibold text-charcoal">
            My Resume
          </span>
          <span className="block text-xs text-muted font-mono">
            PDF · Click to view
          </span>
        </div>
        <span className="text-muted group-hover:text-sky group-hover:translate-x-0.5 transition-all ml-2">
          ↗
        </span>
      </a>

      {/* Hover Preview */}
      {showPreview && (
        <div
          className="pointer-events-none absolute z-50 w-48 border border-border bg-white shadow-lg"
          style={{
            left: mousePos.x + 16,
            top: mousePos.y - 100,
          }}
        >
          <Image
            src="/images/resume-preview.png"
            alt="Resume preview"
            width={192}
            height={248}
            className="w-full h-auto"
            priority={false}
          />
        </div>
      )}
    </div>
  );
}
