# Kokkini Games

A sleek landing page for showcasing web games. Each game is displayed as a card with an image, title, and description. Clicking a game opens it in a new tab.

## Adding Games

To add a new game to the landing page:

### 1. Edit the Games Configuration (JS)

Open `config/games.js` and add your game to the `games` array:

```js
window.gamesConfig = {
  games: [
    {
      route: "/text-breakout",
      title: "Text Breakout",
      description: "Break bricks with text commands. A minimal twist on a classic.",
      imagePath: "assets/images/text-breakout.jpg",
      imageAlt: "Screenshot of Text Breakout gameplay"
    },
    {
      route: "/your-game",
      title: "Your Game Title",
      description: "Brief description of what your game does.",
      imagePath: "assets/images/your-game.jpg",
      imageAlt: "Screenshot of Your Game gameplay"
    }
  ]
};
```

### 2. Required Fields

Each game object must include:

- **`route`**: The URL path where your game is hosted (e.g., "/snake-game")
- **`title`**: Short, descriptive name for your game
- **`description`**: Brief summary of the game (1-2 sentences)
- **`imagePath`**: Path to the game's preview image (relative to the root)
- **`imageAlt`**: Alternative text for screen readers describing the image

### 3. Add Game Images

1. Create or find a preview image for your game (recommended: 400x300px or similar aspect ratio)
2. Save it in the `assets/images/` directory
3. Use the filename in the `imagePath` field

### 4. Deploy Your Game

Make sure your game is accessible at the route you specified. For example, if your route is "/snake-game", ensure there's a page or game at that URL on your domain.

## File Structure

```
/
├── index.html              # Main landing page
├── styles/
│   └── main.css           # Styling
├── scripts/
│   └── games.js           # Game loading and rendering
├── config/
│   └── games.json         # Game configuration (edit this!)
├── assets/
│   └── images/            # Game preview images
└── README.md              # This file
```

## Features

- **Responsive Design**: Works on mobile and desktop
- **Accessibility**: Keyboard navigation, screen reader support, focus indicators
- **Fast Loading**: Optimized for performance
- **Easy Configuration**: Add games via JSON config file
- **Same-Domain Links**: All games open on the same domain in new tabs

## Development

The site is built with vanilla HTML, CSS, and JavaScript. No build process required - just edit the files and deploy.

### Local Development

1. Clone this repository
2. Serve the files with a local web server (e.g., `python -m http.server` or `npx serve`)
3. Open `http://localhost:8000` in your browser

### Validation

Before deploying, ensure:
- All game routes work correctly
- Images load properly
- The page passes accessibility checks
- Lighthouse scores are ≥90 for Performance, Accessibility, and Best Practices
