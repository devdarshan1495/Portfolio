import { currently } from "@/content/currently";

export default function Currently() {
  const sections = [
    {
      label: "Learning",
      items: currently.learning,
      bg: "bg-golden-soft/60",
      dot: "bg-charcoal/50",
    },
    {
      label: "Building",
      items: currently.building,
      bg: "bg-sage-soft/60",
      dot: "bg-charcoal/50",
    },
    {
      label: "Exploring",
      items: currently.exploring,
      bg: "bg-lavender-soft/60",
      dot: "bg-charcoal/50",
    },
  ];

  return (
    <section aria-label="What I'm currently doing">
      <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16">
        <h2 className="font-mono text-xs tracking-widest uppercase text-charcoal mb-8">
          Currently
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div
              key={section.label}
              className={`${section.bg} rounded-lg p-6`}
            >
              <h3 className="font-mono text-xs tracking-widest uppercase text-charcoal mb-4 font-semibold">
                {section.label}
              </h3>
              <ul className="space-y-2" role="list">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-charcoal leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${section.dot}`}
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
