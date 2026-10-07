"use client";

import { useEffect, useRef } from "react";

const STAR_PATH =
  "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z";

function spawnTrailStar(container: HTMLDivElement, x: number, y: number) {
  const size = 9 + Math.random() * 7;
  const rotation = Math.random() * 360;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "cursor-trail-star");
  svg.style.left = `${x}px`;
  svg.style.top = `${y}px`;
  svg.style.setProperty("--trail-rotate", `${rotation}deg`);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", STAR_PATH);
  path.setAttribute("fill", "var(--lime)");
  path.setAttribute("stroke", "var(--ink)");
  path.setAttribute("stroke-width", "1");
  path.setAttribute("stroke-linejoin", "round");
  svg.appendChild(path);

  container.appendChild(svg);
  window.setTimeout(() => svg.remove(), 650);
}

export function Cursor() {
  const starRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    const star = starRef.current;
    const icon = iconRef.current;
    const trail = trailRef.current;
    if (!star || !icon || !trail) return;

    document.body.classList.add("cursor-none");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    let raf = 0;
    let visible = false;
    let lastSpawn = 0;
    let lastSpawnX = mouseX;
    let lastSpawnY = mouseY;

    const show = () => {
      if (visible) return;
      visible = true;
      star.style.opacity = "1";
    };

    const onMove = (e: MouseEvent) => {
      show();
      mouseX = e.clientX;
      mouseY = e.clientY;

      const now = performance.now();
      const dist = Math.hypot(mouseX - lastSpawnX, mouseY - lastSpawnY);
      if (now - lastSpawn > 45 && dist > 14) {
        spawnTrailStar(trail, mouseX, mouseY);
        lastSpawn = now;
        lastSpawnX = mouseX;
        lastSpawnY = mouseY;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        icon.classList.add("is-active");
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        icon.classList.remove("is-active");
      }
    };

    const onLeave = () => {
      visible = false;
      star.style.opacity = "0";
    };

    const loop = () => {
      posX += (mouseX - posX) * 0.22;
      posY += (mouseY - posY) * 0.22;
      star.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      trail.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" aria-hidden="true" />
      <div ref={starRef} className="cursor-star" aria-hidden="true">
        <div className="cursor-star-spin">
          <div ref={iconRef} className="cursor-star-icon">
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d={STAR_PATH}
                fill="var(--lime)"
                stroke="var(--ink)"
                strokeWidth={1}
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
