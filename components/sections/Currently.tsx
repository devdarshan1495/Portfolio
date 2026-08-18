import { currently } from "@/content/currently";

export default function Currently() {
  const sections = [
    { label: "Learning", items: currently.learning, color: "bg-sky-light", accent: "text-sky" },
    { label: "Building", items: currently.building, color: "bg-golden-light", accent: "text-golden" },
    { label: "Exploring", items: currently.exploring, color: "bg-sage-light", accent: "text-sage" },
  ];

  return (
    <section className="border-b border-border" aria-label="What I'm currently doing">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <h2 className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
          Currently
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {sections.map((section) => (
            <div key={section.label} className="bg-background p-6">
              <h3 className={`font-mono text-xs tracking-widest uppercase ${section.accent} mb-4`}>
                {section.label}
              </h3>
              <ul className="space-y-2" role="list">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal leading-relaxed">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${section.color}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
