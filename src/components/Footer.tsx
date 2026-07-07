import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionReveal from "./SectionReveal";
import SectionHeading from "./SectionHeading";
import IconLink from "./IconLink";
import MagneticButton from "./MagneticButton";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <SectionHeading number="06" eyebrow="Contact" title="Let's build something" align="center" />

        <SectionReveal delay={0.1} className="text-center">
          <p className="mx-auto mt-4 max-w-md text-[var(--color-text-muted)]">
            Open to internships, research collaborations, and interesting engineering problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)]"
            >
              <Mail size={16} /> {profile.email}
            </MagneticButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <IconLink href={profile.github} icon={Github} label="GitHub" />
            <IconLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
            <IconLink href={`tel:${profile.phone}`} icon={Phone} label="Phone" external={false} />
          </div>
        </SectionReveal>

        <p className="mt-20 text-center text-xs text-[var(--color-text-dim)]">
          © {new Date().getFullYear()} {profile.name}. Built from scratch.
        </p>
      </div>
    </footer>
  );
}
