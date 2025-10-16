# Data Model: Basic Landing Page with Game Cards

## Entities

### Game
- route: string (same-domain path, e.g., "/text-breakout")
- title: string (short)
- description: string (concise)
- imagePath: string (relative/static asset)
- imageAlt: string (accessibility text)

## Relationships

- Landing page contains a list of Game entities; no further relationships.

## Validation Rules

- route MUST be a valid same-domain path
- title MUST be non-empty
- description SHOULD be brief and informative
- imagePath MUST resolve to an existing asset
- imageAlt MUST describe the image meaningfully


