import { RotateCw } from "lucide-react";
import { profile } from "../data/content";

export default function FlipCard() {
  return (
    <div className="group mx-auto w-64 sm:w-72 [perspective:1600px]">
      <div
        className="relative h-80 w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-[22rem]"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[var(--color-surface)]/40 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl [backface-visibility:hidden]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
            <img
              src="/passport_photo.png"
              alt={profile.name}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <span className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
            <RotateCw size={12} /> Hover to flip
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[var(--color-surface)]/70 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
            {profile.name}
          </span>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            {profile.heroLine}
          </p>
        </div>
      </div>
    </div>
  );
}
