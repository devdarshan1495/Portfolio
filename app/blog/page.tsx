import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Posts, notes, and thoughts from Devdarshan Saravanan on software development, learning, and technology.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="bg-pg-blog min-h-full">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] py-16 md:py-24">
          <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mb-4">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Posts & Notes
          </h1>
          <p className="mt-3 text-base text-charcoal/70 max-w-lg">
            Thoughts on what I&apos;m learning, building, and exploring in
            technology.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          {posts.length > 0 ? (
            <div className="border-t border-charcoal/10">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-charcoal/10 py-6"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-semibold text-charcoal">
                        {post.title}
                      </h2>
                      <p className="mt-1 text-sm text-charcoal/60 leading-relaxed max-w-lg">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wide text-charcoal/50 px-1.5 py-0.5 bg-white/40 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="font-mono text-xs text-charcoal/40 whitespace-nowrap flex-shrink-0">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white/40 rounded-lg p-12 text-center">
              <p className="text-lg font-semibold text-charcoal mb-1">
                Posts coming soon
              </p>
              <p className="text-sm text-charcoal/60 max-w-sm mx-auto">
                I&apos;m planning to write about my learning journey, projects,
                and tech explorations. Stay tuned.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-1 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
              >
                ← Back home
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
