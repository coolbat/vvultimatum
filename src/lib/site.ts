export const site = {
  name: "VV Ultimatum Guide",
  shortName: "VVU Guide",
  description:
    "A source-checked fan guide for VV: ULTIMATUM on Roblox, covering codes, races, controls, leveling, clans, builds, Hollow and Quincy progression, Spirit Charms, bosses, and safe official links.",
  canonicalBaseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vvultimatum.org",
  locale: "en_US",
  gameName: "VV: ULTIMATUM",
  developer: "Midnight Continent",
  officialGameUrl: "https://www.roblox.com/games/6270290407/VV-ULTIMATUM",
  officialTrailerUrl: "https://www.youtube.com/watch?v=zpvGp5kOg18",
  trailerThumbnailUrl: "https://i.ytimg.com/vi/zpvGp5kOg18/hqdefault.jpg",
  checkedAt: "2026-06-12",
};

export function absoluteUrl(path = "/en/") {
  const base = site.canonicalBaseUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${base}${withSlash}`;
}

export function absoluteFileUrl(path: string) {
  const base = site.canonicalBaseUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function hostName() {
  return site.canonicalBaseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
