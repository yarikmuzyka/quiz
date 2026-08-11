# QA Quiz Roadmap

## Next Product Direction: Bug Hunt Mode

Build a practical QA simulation mode where a user tests a small intentionally buggy product and tries to find as many hidden bugs as possible within a time limit.

### Concept

The mode should feel like a real QA task, not a quiz.

User opens a small demo e-commerce product with:

- product catalog
- product cards
- search
- filters
- sorting
- cart
- checkout-like flow
- visible timer
- bug counter, for example `0/10`
- result screen with found and missed bugs

The app contains seeded bugs across different categories:

- logic bugs
- UX issues
- validation bugs
- accessibility issues
- edge cases
- visual/layout issues
- state management bugs

The goal: find and report as many bugs as possible before the timer ends.

### MVP Scope

- One mini e-commerce scenario.
- 10 hidden bugs.
- 10-minute timer.
- Bug counter in the header.
- `Report bug` action.
- Simple report modal.
- Lightweight matching by bug area/category/keywords.
- Final result screen.
- Shareable result image, similar to the current quiz badge flow.

### Example Seeded Bugs

- price filter excludes boundary values incorrectly
- search is case-sensitive
- cart count does not update after removing an item
- checkout allows an empty or invalid email
- product image misses alt text
- sort A-Z sorts in the wrong direction
- discount calculation is wrong
- mobile layout breaks around product cards
- disabled button still looks clickable
- validation error does not disappear after fixing input

### Why It Matters

QA Quiz checks knowledge.
Bug Hunt Mode checks QA thinking.

Together they can become a stronger interview-prep and practice tool for QA engineers.

## Next Step: Design Exploration

Before implementation, create 3 different page design directions and choose the strongest one.

### Design Variant 1: Product-First Shop

Focus on making the e-commerce app feel real.

- large product grid
- filters/sidebar
- cart summary
- subtle bug counter in the top bar
- timer visible but not dominant
- best for realistic exploratory testing feel

### Design Variant 2: QA Mission Console

Focus on the test challenge feeling.

- app area plus QA overlay
- top status bar with `bugs found`, timer, categories
- stronger terminal/CI visual language
- `Report bug` always visible
- best for keeping it aligned with current QA Quiz style

### Design Variant 3: Split-Screen Lab

Focus on structured bug hunting.

- left side: e-commerce app
- right side: bug report panel, categories, notes
- timer and score fixed at the top
- found bugs appear as a running log
- best for desktop and more serious practice sessions

### Open Questions

- Should bug reports be matched automatically by keywords, by clicked area, or by a guided checklist?
- Should hints appear after several minutes?
- Should missed bugs be revealed after the timer?
- Should the mode support difficulty levels later?
- Should users get a shareable image with category breakdown?

