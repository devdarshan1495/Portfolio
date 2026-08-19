# Implementation Checklist

5. **Education page content spacing.** In `app/education/page.tsx`, reduce the excessive vertical gap between the page title section and the education content section. Merge the layout so title and content feel like one continuous composition instead of two separated sections.

6. **Education illustration — larger and repositioned.** In `app/education/page.tsx`, make the education illustration noticeably larger. Position its top to align approximately with the top of the page title. Maintain responsive behaviour.

7. **Hero dynamic text animation — slot machine rolling text.** Convert the static hero heading in `components/sections/Hero.tsx` to a client component with a vertical slot-machine animation. Initial state: "Hi, I'm Dev." → transitions to "Hi, I'm a Dev." (with the "a" visibly entering) → then cycles through descriptors like "a builder.", "studying ML.", etc. Respect `prefers-reduced-motion`. Store phrases in a modular config.

8. **Future Skills Section — document only, do not implement.** Add documentation to `personal.md` under "Future Plans & TODOs" describing the planned data-driven Skills section architecture. Do not create any UI, data files, or components.

9. **Education page heading — change eyebrow to MY JOURNEY.** In `app/education/page.tsx`, change the remaining eyebrow label from "Education" to "MY JOURNEY". Keep "Education & Achievements" as the main heading.

10. **Certifications page heading — change to CREDENTIALS / Things I've Learned Beyond the Classroom.** In `app/certifications/page.tsx`, change the eyebrow from "Certifications" to "CREDENTIALS" and the main heading from "Certifications" to "Things I've Learned Beyond the Classroom". Remove the descriptive paragraph below.

11. **Contact page redesign — replace cards with contact form.** Remove the EMAIL and SOCIAL & PROFILES cards from `app/contact/page.tsx`. Add a clean contact form (Name, Email, Subject, Message, Send button) with a "Prefer email?" fallback. Keep social links as compact secondary links. Create a server-side API route for form submission. Keep credentials in env vars.

12. **Contact page spacing — reduce gap between navbar and content.** Reduce the `pt-16 md:pt-24` padding on the contact page header section to bring content closer to the navbar.

13. **Contact colour — soften the orange.** Adjust `--color-pg-contact` in `app/globals.css` to a slightly less saturated/bright orange. Maintain sufficient contrast with text, form fields, and buttons. Update `--color-bar-contact` proportionally.

14. **Overall design constraint verification.** After all tasks, verify that no unrelated parts of the website have been redesigned. Confirm the minimalist aesthetic, editorial layout, pastel colour system, pixel art style, typography, spacing, borders, navigation, and overall visual language are preserved.

---

### Original Prompt (of which some content is done and the leftover part is mentioned above just giving the whole prompt for reference)

GO THROUGH THE ENTIRE PROJECT ONCE BEFORE CONTINUING.

First inspect the complete existing project, including all pages, components, content and data files, styling, assets, animations, routing, documentation and architecture.

Do not immediately start making changes.

After understanding the project, create a root level LIST.md file containing all the tasks below as a persistent implementation checklist.

LIST.md WORKFLOW

Add every task below to LIST.md as a numbered TODO item.

Work through the tasks sequentially.

Do not move to the next task until the current task is completely implemented and verified.

Once a task is completely finished and verified, delete that task from LIST.md. Do not simply mark it as completed.

If work stops because of token or context limits, LIST.md must contain only the remaining unfinished tasks.

When continuing in a future session, first read LIST.md, inspect the current project state, and continue from the first remaining task.

Do not recreate tasks that have already been deleted from LIST.md.

If a task cannot safely be completed because important information is missing, leave that task in LIST.md and explain what is needed instead of pretending it is complete.

After completing each task, verify that the implementation actually works before deleting the task from LIST.md.

Do not redesign unrelated parts of the website while completing these tasks.

1. Education page, remove duplicate label.

On the Education page, the small EDUCATION label currently appears above the main Education and Achievements heading.

The same EDUCATION label is unnecessarily repeated above the BTech CSE education block.

Remove only the second instance.

After removing it, move the BTech CSE education block higher so it occupies the space that was previously wasted by the duplicate label.

Do not remove the main eyebrow label above Education and Achievements.

2. Full Stack Development, update two separate interest lists.

There are two separate and independent Interests lists in the portfolio. Treat them as separate content and do not assume that changing one should change the other.

2A. Homepage Interests.

In the Interests section on the homepage, completely remove Full Stack Development from the list.

Full Stack Development must no longer appear in the homepage Interests section.

Do not remove Full Stack Development globally because it is still required on the About page.

2B. About page Interests.

The About page has its own separate Interests list.

Keep Full Stack Development in the About page Interests list, but move it to the last position.

The final result should be, Homepage, Full Stack Development is not shown. About page, Full Stack Development is shown as the last interest.

Verify both pages separately before considering this task complete.

3. Navbar dev text size.

The dev text at the top right of the navbar is currently slightly too small.

Increase its font size slightly while preserving its existing typography, spacing, alignment and visual hierarchy.

Do not make it disproportionately large.

4. Education page content spacing.

On the Education page, the actual education content is positioned too far below the main page title.

Move the education content closer to the title.

The problem appears to be caused by the title area and education content behaving like separate sections with excessive spacing between them.

Fix the underlying layout and spacing instead of applying a random negative margin.

The title and education content should feel like parts of the same continuous page composition.

Preserve the minimalist whitespace while removing the excessive dead space.

5. Education illustration size and positioning.

The 16 bit book education illustration on the Education page should be noticeably larger.

Position it so its top aligns approximately with the top of the main page title, or slightly below it.

The purpose is to give the upper right portion of the page more visual weight and balance.

Do not allow the illustration to dominate the title.

Maintain responsive behaviour on tablet and mobile.

Use the existing education illustration and preserve the established illustration style.

6. Hero dynamic text animation.

The hero currently displays,

Hi, I'm Dev.

Implement a custom slot machine style vertical rolling text animation.

This is not a scroll based animation and must not depend on the user's page scroll position.

The initial hero state must be exactly,

Hi, I'm Dev.

When the animation first changes the phrase to,

Hi, I'm a Dev.

do not simply replace Dev with a Dev.

The existing Dev should shift horizontally to the right by the required amount, creating space between I'm and Dev.

The a should visibly enter or fall into that newly created space.

The final result should read,

Hi, I'm a Dev.

After that, the descriptor area should behave like a small vertical slot reel.

Example states,

Hi, I'm Dev.

Hi, I'm a Dev.

Hi, I'm a builder.

Hi, I'm studying ML.

The changing phrase should move vertically into and out of a clipped viewport, similar to a mechanical slot machine reel.

It should not simply fade or instantly replace the previous phrase.

Animation direction should be vertical rolling or sliding.

Animation style should be smooth but slightly mechanical, with quick acceleration and controlled deceleration so the phrase feels like it is rolling into position.

Do not use scroll triggered animation, scroll linked animation, fade only transitions, horizontal carousel behaviour, typewriter effects, glitch effects, excessive bouncing, or large transforms that move the entire hero.

The animation should feel like a small piece of UI ear candy, not a flashy animation showcase.

The static portion Hi, I'm should remain visually stable.

Only the dynamic descriptor area should move.

The animation must be responsive and must not cause horizontal overflow or layout shifting.

Respect prefers reduced motion. When reduced motion is enabled, display the phrases without the rolling animation.

Keep the phrase list modular and stored in a single configuration or data location so it can easily be changed later.

Do not implement this as a generic text carousel if doing so prevents the specific Dev to a Dev transition described above.

The initial Dev to a Dev transition is intentionally different from subsequent phrase rotations and must be treated as a custom animation sequence.

7. Future Skills Section, do not implement now.

I currently do not want a Skills or Technologies section anywhere on the portfolio.

Do not create the section, placeholder, empty state, navigation item, UI, skills cards, skill tags, or skills data file at this stage.

This is documentation for future implementation only.

When I am ready to add Skills later, it should be implemented as a data driven section with the actual skills stored separately from the UI, for example in a skills.ts data file.

The UI should automatically generate the appropriate skill cards or tags from that data, so adding or removing a skill later only requires editing the data.

Potential future categories may include Languages, Frameworks and Libraries, AI and ML, Developer Tools, and Cloud and DevOps.

Do not create these categories now.

Do not add technologies based on assumptions about my current knowledge.

I will explicitly decide which technologies I am confident enough to list.

Potential future technologies may include Python, C++, SQL, PyTorch, scikit learn, Docker, and AWS.

None of these should appear anywhere on the portfolio unless I explicitly add them later.

If an existing personal.md or suitable project maintenance documentation file exists, add the Future Skills Section documentation there.

If no suitable file exists, create a small Markdown documentation file for future implementation instructions.

This task is only about documenting the future implementation.

Do not implement the Skills section now.

When I eventually request the Skills section, first read this documentation and follow the planned architecture rather than redesigning it from scratch.

8.1. Education page heading.

Change the current heading structure,

EDUCATION

Education and Achievements

to,

MY JOURNEY

Education and Achievements

Keep MY JOURNEY as the small uppercase letter spaced eyebrow label.

Keep Education and Achievements as the large primary heading.

Do not change the established typography hierarchy or overall minimalist aesthetic.

8.2. Certifications page heading.

The current Certifications page repeats the same word in both the eyebrow and main heading.

Change,

CERTIFICATIONS

Certifications

to,

CREDENTIALS

Things I've Learned Beyond the Classroom

Remove the large Certifications heading entirely.

CREDENTIALS should remain visually subtle, uppercase, and letter spaced.

Things I've Learned Beyond the Classroom should become the dominant page heading.

The certification cards and content below should make it clear that this page contains certifications and credentials.

Do not add another redundant Certifications heading.

8.3. Contact page redesign.

Keep the dedicated Contact page.

Remove the current large EMAIL and SOCIAL and PROFILES cards because they duplicate information already presented in the footer.

Replace those cards with a clean minimalist contact form containing,

Name

Email

Subject

Message

Send Message button

Include a small fallback option below the form such as,

Prefer email?

followed by my email address.

Social links can remain as compact secondary links but should not occupy large cards.

Keep the footer social and contact links.

Do not repeat the full email and contact information in the footer.

The contact form must not require login or authentication.

If implemented, use a secure server side route or API.

Any email service credentials or API keys must remain server side in environment variables.

Never expose secrets to the client bundle.

Do not introduce a database or Render solely for the contact form.

8.4. Contact page spacing.

Reduce the excessive vertical gap between the navbar and the Contact page main content.

Move the hero and content upward so it begins closer to the navbar.

Retain comfortable whitespace and do not make the layout cramped.

8.5. Contact colour.

Keep the warm orange identity of the Contact section.

Slightly reduce its saturation and brightness so it fits better with the existing soft pastel palette.

Maintain sufficient contrast between the background, form fields, cards, text, buttons and links.

Do not completely replace the orange colour identity.

8.6. Overall design constraint.

Do not redesign the entire website.

These are targeted refinements to the existing design.

Preserve the established minimalist aesthetic, editorial layout, pastel colour block system, pixel art character and illustration style, typography system, spacing system, border system, navigation and overall visual language.

Only change what is necessary to satisfy the tasks above.

Before making architectural changes, check whether the existing architecture already supports the requirement.

After every task, verify the implementation and then delete that completed task from LIST.md.

Continue until LIST.md contains only genuinely unfinished work.
