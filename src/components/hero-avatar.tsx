"use client"

import Image from "next/image";
import { ChangeEvent, useState } from "react";

const defaultAvatarPng = "/images/rafal-ulatowski-profile-photo.png";
const defaultAvatarWebp = "/images/rafal-ulatowski-profile-photo.webp";

export default function HeroAvatarReplaceable() {
  // Use WebP by default (modern browsers support WebP). Keep PNG fallback available but
  // default to the pre-converted WebP to reduce client-side control flow and early swap.
  const [avatarUrl, setAvatarUrl] = useState<string>(defaultAvatarWebp);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setAvatarUrl(objectUrl);
  };

  return (
    <div className="space-y-6">
      <div className="relative flex items-center justify-center">
        {/* Outer glow circle */}
        <div className="absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full border border-[var(--avatar-border)] shadow-[0_0_80px_var(--avatar-glow)]" />

        {/* Inner circle */}
        <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-gradient-to-b from-[var(--avatar-gradient-from)] to-[var(--avatar-gradient-to)] flex items-center justify-center overflow-hidden">
          {avatarUrl.startsWith('blob:') ? (
            <img
              src={avatarUrl}
              alt="Rafał Ulatowski - Senior Azure Cloud Architect & .NET Consultant in Copenhagen, specializing in Cloud Migration and DevOps"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <Image
              src={avatarUrl}
              alt="Rafał Ulatowski - Senior Azure Cloud Architect & .NET Consultant in Copenhagen, specializing in Cloud Migration and DevOps"
              width={320}
              height={320}
              className="h-full w-full object-cover object-center"
              priority
              quality={95}
              sizes="(max-width: 640px) 256px, 288px"
            />
          )}
        </div>

        {/* Stat badges - evenly spaced on a circle around the avatar */}
        {(() => {
          const badges = [
            { value: "15+", label: "years professional experience" },
            { value: "10+", label: "Enterprise projects delivered" },
            { value: "5+", label: "years in Azure & cloud-native systems" },
            { value: "1M+", label: "daily transactions supported" },
            { value: "100M+", label: "systems handling daily transactions" },
          ];
          const n = badges.length;

          // responsive radius: larger screens place badges further out so labels sit outside the avatar circle
          const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
          // choose radius by breakpoint
          let radius = 170;
          if (innerWidth < 640) radius = 110; // small screens
          else if (innerWidth < 1024) radius = 150; // medium
          else radius = 180; // large

          return badges.map((b, i) => {
            const angle = (i * (2 * Math.PI) / n) - Math.PI / 2; // start at top
            const x = Math.round(radius * Math.cos(angle));
            const y = Math.round(radius * Math.sin(angle));

            return (
              <div
                key={b.value}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="backdrop-blur-md bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-2xl px-4 py-2 text-xs shadow-lg text-center max-w-[10rem] transition-transform duration-300 hover:scale-110 cursor-default">
                  <p className="text-lg font-semibold leading-none text-[var(--badge-text)]">{b.value}</p>
                  <p className="text-[10px] text-[var(--badge-subtext)] mt-1">{b.label}</p>
                </div>
              </div>
            );
          });
        })()}
      </div>
    </div>
  );
}
