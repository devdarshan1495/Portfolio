import Hero from "@/components/sections/Hero";
import Currently from "@/components/sections/Currently";
import SelectedProjects from "@/components/sections/SelectedProjects";
import AboutPreview from "@/components/sections/AboutPreview";
import EducationPreview from "@/components/sections/EducationPreview";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import ResumeElement from "@/components/ui/ResumeElement";

export default function Home() {
  return (
    <div className="bg-pg-home min-h-full">
      <Hero />
      <Currently />
      <SelectedProjects />
      <AboutPreview />
      <EducationPreview />
      <CertificationsPreview />

      {/* Resume Section */}
      <section aria-label="Resume">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
          <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal mb-8">
            Resume
          </h2>
          <ResumeElement />
        </div>
      </section>
    </div>
  );
}
