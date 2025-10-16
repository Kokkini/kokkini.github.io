# Tasks: Basic Landing Page with Game Cards

## Phase 1: Setup

- [x] T001 Create landing page file at /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T002 Create stylesheet at /Users/quang/Documents/projects/kokkini.github.io/styles/main.css
- [x] T003 [P] Create script file at /Users/quang/Documents/projects/kokkini.github.io/scripts/games.js
- [x] T004 [P] Create images directory placeholder at /Users/quang/Documents/projects/kokkini.github.io/assets/images/.gitkeep

## Phase 2: Foundational

- [x] T005 Define game list data structure in /Users/quang/Documents/projects/kokkini.github.io/scripts/games.js
- [x] T006 [P] Add CSS reset and variables to /Users/quang/Documents/projects/kokkini.github.io/styles/main.css
- [x] T007 [P] Add base typography and layout container styles to /Users/quang/Documents/projects/kokkini.github.io/styles/main.css

## Phase 3: User Story 1 — Discover and open a game (P1)

- [x] T008 [US1] Add header and main content structure in /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T009 [US1] Render responsive card grid markup in /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T010 [P] [US1] Ensure image links open in new tab (target=_blank rel=noopener) in /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T011 [US1] Validate same-domain routes for each game in /Users/quang/Documents/projects/kokkini.github.io/scripts/games.js

## Phase 4: User Story 2 — Learn about a game (P1)

- [x] T012 [US2] Add card title and description markup in /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T013 [P] [US2] Write concise titles and descriptions in /Users/quang/Documents/projects/kokkini.github.io/scripts/games.js

## Phase 5: User Story 3 — Mobile responsiveness (P1)

- [x] T014 [US3] Implement mobile-first responsive grid CSS in /Users/quang/Documents/projects/kokkini.github.io/styles/main.css
- [x] T015 [P] [US3] Prevent horizontal scrolling at 320px–480px in /Users/quang/Documents/projects/kokkini.github.io/styles/main.css

## Phase 6: User Story 4 — Keyboard accessibility (P1)

- [x] T016 [US4] Add visible focus styles for links in /Users/quang/Documents/projects/kokkini.github.io/styles/main.css
- [x] T017 [P] [US4] Provide descriptive alt text via data binding in /Users/quang/Documents/projects/kokkini.github.io/scripts/games.js
- [x] T018 [US4] Add skip-to-content link and landmarks in /Users/quang/Documents/projects/kokkini.github.io/index.html

## Phase 7: Polish & Cross-Cutting

- [x] T019 Optimize image assets in /Users/quang/Documents/projects/kokkini.github.io/assets/images/
- [x] T020 [P] Add basic meta tags (title/description/social) in /Users/quang/Documents/projects/kokkini.github.io/index.html
- [x] T021 Document Lighthouse and a11y validation notes in /Users/quang/Documents/projects/kokkini.github.io/.specify/features/landing-game-cards/validation.md

## Dependencies

1. Setup → Foundational → US1 → US2 → US3 → US4 → Polish
2. US1 is prerequisite for US2–US4 (cards must exist before refining)

## Parallel Execution Examples

- Run T003, T004 in parallel after T001–T002
- Within US1: T010 can run in parallel with T011 after T009
- Within US3: T015 can run in parallel with T014 after US1 completes
- Within US4: T017 can run in parallel with T016 after US1 completes
- In Polish: T020 can run in parallel with T019

## Implementation Strategy (MVP First)

- MVP: Complete US1 (T008–T011) to enable opening games from cards
- Incrementally add US2–US4 for clarity, responsiveness, and accessibility
- Finish with Polish tasks for quality and performance
