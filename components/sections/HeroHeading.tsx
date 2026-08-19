"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { siteConfig } from "@/content/site";

/**
 * HeroHeading — Slot-machine style rolling text animation.
 *
 * Sequence (alternating directions):
 * "Dev." → ↓ "a developer." → ↑ "learning ML." → ↓ "building stuff." → ↑ "Dev."
 *
 * The static prefix "Hi, I'm " never moves.
 * The dynamic suffix rolls vertically inside a clipped viewport.
 */

const descriptors = siteConfig.heroDescriptors;

const INITIAL_DELAY = 2000;
const ROLL_PAUSE = 2500;
const ROLL_DURATION = 500;

type AnimationPhase = "initial" | "idle" | "rolling";

export default function HeroHeading() {
  const [phase, setPhase] = useState<AnimationPhase>("initial");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [rollDirection, setRollDirection] = useState<"down" | "up">("down");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (descriptors.length <= 1) return;

    clearTimer();

    switch (phase) {
      case "initial":
        timerRef.current = setTimeout(() => {
          setNextIndex(1);
          setRollDirection("down");
          setPhase("rolling");
        }, INITIAL_DELAY);
        break;

      case "idle": {
        const next = (currentIndex + 1) % descriptors.length;
        timerRef.current = setTimeout(() => {
          setNextIndex(next);
          setRollDirection(currentIndex % 2 === 0 ? "down" : "up");
          setPhase("rolling");
        }, ROLL_PAUSE);
        break;
      }

      case "rolling":
        timerRef.current = setTimeout(() => {
          setCurrentIndex(nextIndex);
          setPhase("idle");
        }, ROLL_DURATION);
        break;
    }

    return clearTimer;
  }, [phase, currentIndex, nextIndex, prefersReducedMotion, clearTimer]);

  if (prefersReducedMotion) {
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
        Hi, I&apos;m {descriptors[0]}
      </h1>
    );
  }

  const isRollingDown = rollDirection === "down";

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
      <span>Hi, I&apos;m </span>
      <span
        className="inline-flex relative overflow-hidden align-bottom"
        style={{ verticalAlign: "baseline", height: "1.2em" }}
      >
        {/* Current text */}
        <span
          className="inline-block"
          style={{
            animation: phase === "rolling"
              ? isRollingDown
                ? `hero-roll-out-up ${ROLL_DURATION}ms cubic-bezier(0.55, 0, 0.1, 1) forwards`
                : `hero-roll-out-down ${ROLL_DURATION}ms cubic-bezier(0.55, 0, 0.1, 1) forwards`
              : undefined,
          }}
        >
          {descriptors[currentIndex]}
        </span>

        {/* Next text rolling in */}
        {phase === "rolling" && (
          <span
            className="absolute left-0 top-0 inline-block whitespace-nowrap"
            style={{
              animation: isRollingDown
                ? `hero-roll-in-down ${ROLL_DURATION}ms cubic-bezier(0.55, 0, 0.1, 1) forwards`
                : `hero-roll-in-up ${ROLL_DURATION}ms cubic-bezier(0.55, 0, 0.1, 1) forwards`,
            }}
          >
            {descriptors[nextIndex]}
          </span>
        )}
      </span>
    </h1>
  );
}
