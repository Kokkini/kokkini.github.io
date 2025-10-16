// Read games from global config injected by config/games.js
let games = (window.gamesConfig && Array.isArray(window.gamesConfig.games)) ? window.gamesConfig.games : [];

function isSameDomainPath(path) {
  if (typeof path !== "string") return false;
  // Allow absolute same-domain paths or relative paths (for file:// development)
  return path.startsWith("/") || /^[^\s]+$/.test(path);
}

function resolveHref(route) {
  if (typeof route !== "string") return "#";
  if (route.startsWith("http://") || route.startsWith("https://")) return route;
  const absolutePath = route.startsWith("/") ? route : `/${route}`;
  try {
    if (window.location && (window.location.protocol === "http:" || window.location.protocol === "https:")) {
      // In http/https context, absolute path works for same-origin navigation
      return absolutePath;
    }
  } catch (_) {}
  // file:// fallback: use relative path without leading slash
  return absolutePath.replace(/^\//, "");
}

function renderGames() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;

  grid.innerHTML = "";

  games.forEach((game) => {
    if (!isSameDomainPath(game.route)) return;

    const card = document.createElement("article");
    card.className = "game-card";

    const link = document.createElement("a");
    link.className = "card-link";
    link.href = resolveHref(game.route);
    link.setAttribute("aria-label", `Open ${game.title}`);

    const media = document.createElement("div");
    media.className = "media";

    const img = document.createElement("img");
    img.src = game.imagePath;
    img.alt = game.imageAlt || game.title;
    media.appendChild(img);

    const content = document.createElement("div");
    content.className = "content";

    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = game.title;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = game.description;

    content.appendChild(title);
    content.appendChild(desc);

    link.appendChild(media);
    link.appendChild(content);

    card.appendChild(link);
    grid.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderGames();
});


