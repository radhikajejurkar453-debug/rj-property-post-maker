// ─────────────────────────────────────────────────────────────────────────
// Post design themes
//
// Each theme controls the full visual treatment of the generated card:
// palette, background texture, frame style, monogram shape, title font,
// and whether the skyline motif appears. Add a new theme by adding a new
// object here — PropertyPost.jsx reads everything from these tokens, so no
// component code needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const themes = [
  {
    id: "emerald",
    name: "Emerald Estate",
    description: "Deep green & brass — the signature look.",
    swatch: ["#1E4B3B", "#C9A227"],

    background:
      "radial-gradient(circle at 18% 12%, #1E4B3B 0%, #14342A 42%, #0C201A 100%)",
    footerBg: "#0C201A",
    textPrimary: "#F7F4EC",
    textSecondary: "rgba(247,244,236,0.82)",
    textMuted: "rgba(247,244,236,0.5)",
    accent: "#E4C567",
    frameColor: "rgba(201,162,39,0.55)",
    frameStyle: "single",
    chipBg: "rgba(247,244,236,0.08)",
    chipBorder: "rgba(201,162,39,0.35)",
    pattern: "dots",
    patternColor: "rgba(247,244,236,0.09)",
    skyline: true,
    skylineColor: "#C9A227",
    monogramShape: "circle",
    monogramBg: "rgba(201,162,39,0.08)",
    monogramBorder: "#C9A227",
    monogramText: "#E4C567",
    titleFont: "display",
    titleWeight: 600,
  },
  {
    id: "ivory",
    name: "Ivory Minimal",
    description: "Light, editorial, brochure-clean.",
    swatch: ["#F7F4EC", "#14342A"],

    background: "#F7F4EC",
    footerBg: "#FFFFFF",
    textPrimary: "#211E1A",
    textSecondary: "rgba(33,30,26,0.72)",
    textMuted: "rgba(33,30,26,0.45)",
    accent: "#14342A",
    frameColor: "rgba(20,52,42,0.18)",
    frameStyle: "single",
    chipBg: "rgba(20,52,42,0.05)",
    chipBorder: "rgba(20,52,42,0.25)",
    pattern: "none",
    patternColor: null,
    skyline: false,
    skylineColor: null,
    monogramShape: "square",
    monogramBg: "transparent",
    monogramBorder: "#14342A",
    monogramText: "#14342A",
    titleFont: "display",
    titleWeight: 500,
  },
  {
    id: "sandstone",
    name: "Sandstone Classic",
    description: "Warm stone & brick — traditional brochure feel.",
    swatch: ["#EFE6D8", "#7A2E2E"],

    background: "linear-gradient(160deg, #F2EBDF 0%, #E7DAC2 100%)",
    footerBg: "#2B211B",
    textPrimary: "#2B211B",
    textSecondary: "rgba(43,33,27,0.75)",
    textMuted: "rgba(43,33,27,0.5)",
    accent: "#7A2E2E",
    frameColor: "rgba(122,46,46,0.45)",
    frameStyle: "double",
    chipBg: "rgba(122,46,46,0.06)",
    chipBorder: "rgba(122,46,46,0.3)",
    pattern: "none",
    patternColor: null,
    skyline: false,
    skylineColor: null,
    monogramShape: "seal",
    monogramBg: "#7A2E2E",
    monogramBorder: "#7A2E2E",
    monogramText: "#F1E9DC",
    titleFont: "display",
    titleWeight: 600,
  },
  {
    id: "midnight",
    name: "Midnight Skyline",
    description: "Bold, modern, high-rise energy.",
    swatch: ["#0A0F1F", "#F2B84B"],

    background:
      "linear-gradient(165deg, #131A2E 0%, #0A0F1F 60%, #060910 100%)",
    footerBg: "#060910",
    textPrimary: "#F5F3EE",
    textSecondary: "rgba(245,243,238,0.78)",
    textMuted: "rgba(245,243,238,0.45)",
    accent: "#F2B84B",
    frameColor: "rgba(242,184,75,0.4)",
    frameStyle: "single",
    chipBg: "rgba(245,243,238,0.06)",
    chipBorder: "rgba(242,184,75,0.35)",
    pattern: "lines",
    patternColor: "rgba(245,243,238,0.06)",
    skyline: true,
    skylineColor: "#F2B84B",
    monogramShape: "square",
    monogramBg: "rgba(242,184,75,0.1)",
    monogramBorder: "#F2B84B",
    monogramText: "#F2B84B",
    titleFont: "sans",
    titleWeight: 700,
  },
];

export const defaultThemeId = themes[0].id;

export function getThemeById(id) {
  return themes.find((t) => t.id === id) || themes[0];
}
