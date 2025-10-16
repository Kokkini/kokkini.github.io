<!--
Sync Impact Report
- Version change: N/A → 1.0.0
- Modified principles: Placeholders replaced with concrete principles
- Added sections: Section 2 (Additional Constraints), Section 3 (Development Workflow), Governance details
- Removed sections: None
- Templates requiring updates:
  - ⚠ .specify/templates/plan-template.md (not found)
  - ⚠ .specify/templates/spec-template.md (not found)
  - ⚠ .specify/templates/tasks-template.md (not found)
  - ⚠ .specify/templates/commands/*.md (not found)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Original adoption date unknown; set when decided
-->

# Kokkini Personal Website Constitution

## Core Principles

### Performance and Accessibility First
The site MUST load fast and meet baseline accessibility. Targets: Lighthouse ≥ 90
for Performance, Accessibility, Best Practices. Use semantic HTML, sufficient
color contrast, keyboard navigation, and descriptive alt text. Optimize assets
(images, fonts, icons) with modern formats and compression.

### Content Clarity and Simplicity
The landing page MUST communicate purpose and key actions in under five seconds.
Copy is concise, free of jargon, and organized with clear hierarchy. Avoid
unnecessary animations or libraries that do not add user value.

### Responsive, Cross-Browser Design
Layouts MUST fluidly adapt from 320px to desktop widths. Support the latest two
major versions of modern browsers. Critical content remains readable without
JavaScript. Use progressive enhancement.

### Zero-Backend, Static Delivery Discipline
No server code. The site is built as static assets (HTML/CSS/JS) and deployed on
static hosting (e.g., GitHub Pages). Any data usage is read-only and client-side
fetch from public endpoints with graceful degradation and no PII storage.

### Privacy and Minimal Analytics
No tracking cookies or third-party trackers by default. If analytics are used,
they MUST be privacy-respecting, cookie-less, and anonymized. No collection of
personal data or contact information without explicit user consent and a clear
purpose.

## Additional Constraints
Technology: Vanilla HTML/CSS/JS preferred. Introduce a framework only when it
materially reduces complexity. Use modern CSS (flexbox/grid), system fonts or a
single performant web font, SVG for icons, and precompressed images (WebP/AVIF)
with fallbacks. No bundler is required unless complexity grows; if used, ensure
deterministic builds and small output.

## Development Workflow
Changes occur via small commits and Pull Requests. Each change MUST be validated
locally with Lighthouse and an accessibility checker. Run a link checker before
deploy. Version content and assets via git; use descriptive commit messages.
Deployment to GitHub Pages happens on merge to the default branch.

## Governance
This constitution supersedes other conventions for this project. Amendments
require a Pull Request that documents rationale, expected impact, a migration or
rollout note, and an updated version. Compliance is reviewed during PRs using
the stated targets and rules in Core Principles and Workflow.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): set original adoption date | **Last Amended**: 2025-10-16
