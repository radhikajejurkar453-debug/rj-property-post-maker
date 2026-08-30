import { forwardRef } from "react";
import { branding } from "../config/branding.js";
import { themes, defaultThemeId } from "../config/themes.js";

// Sensible font sizing so long text never breaks the layout — the card is
// always exactly 1080x1080, so very long strings must shrink and wrap
// rather than overflow.
function titleSize(text) {
  const len = text.length;
  if (len <= 26) return 66;
  if (len <= 40) return 54;
  if (len <= 60) return 44;
  return 36;
}

function locationSize(text) {
  const len = text.length;
  if (len <= 28) return 30;
  if (len <= 48) return 26;
  return 22;
}

function priceSize(text) {
  const len = text.length;
  if (len <= 16) return 52;
  if (len <= 26) return 42;
  return 32;
}

// Splits the highlights string into individual chips on common separators
// ( · • | , ) so it always renders as tidy tags instead of one long line.
function splitHighlights(text) {
  return text
    .split(/[·•|,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const PinIcon = ({ color }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
      stroke={color}
      strokeWidth="1.6"
    />
    <circle cx="12" cy="9.5" r="2.6" stroke={color} strokeWidth="1.6" />
  </svg>
);

// Abstract, hand-drawn-style skyline / roofline motif used as decoration.
// Fully generated inline SVG — no external images, no copyright concerns.
const SkylineMotif = ({ color, opacity = 1, bold = false }) => (
  <svg
    width="100%"
    height={bold ? 120 : 90}
    viewBox={bold ? "0 0 1080 120" : "0 0 1080 90"}
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{ display: "block", opacity }}
  >
    {bold ? (
      <path
        d="M0 120 L0 70 L50 70 L50 20 L110 20 L110 55 L170 55 L170 0 L230 0 L230 40 L300 40 L300 75 L370 75 L370 15 L420 15 L420 40 L470 40 L470 90 L560 90 L560 30 L620 30 L620 65 L700 65 L700 10 L760 10 L760 50 L840 50 L840 80 L920 80 L920 45 L980 45 L980 95 L1080 95 L1080 120 Z"
        fill={color}
      />
    ) : (
      <path
        d="M0 90 L0 60 L60 60 L60 30 L120 30 L120 55 L200 55 L200 15 L260 15 L260 45 L340 45 L340 65 L420 65 L420 20 L460 20 L460 5 L500 5 L500 20 L560 20 L560 50 L640 50 L640 25 L700 25 L700 55 L780 55 L780 35 L840 35 L840 60 L920 60 L920 40 L980 40 L980 65 L1080 65 L1080 90 Z"
        fill={color}
      />
    )}
  </svg>
);

function MonogramBadge({ theme }) {
  const base = {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Fraunces', serif",
    fontSize: 22,
    fontWeight: 600,
    flexShrink: 0,
  };

  if (theme.monogramShape === "square") {
    return (
      <div
        style={{
          ...base,
          borderRadius: 10,
          border: `1.5px solid ${theme.monogramBorder}`,
          background: theme.monogramBg,
          color: theme.monogramText,
        }}
      >
        {branding.monogram}
      </div>
    );
  }

  if (theme.monogramShape === "seal") {
    return (
      <div
        style={{
          ...base,
          borderRadius: "50%",
          border: `2px solid ${theme.monogramBorder}`,
          background: theme.monogramBg,
          color: theme.monogramText,
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        {branding.monogram}
      </div>
    );
  }

  // circle (default)
  return (
    <div
      style={{
        ...base,
        borderRadius: "50%",
        border: `1.5px solid ${theme.monogramBorder}`,
        background: theme.monogramBg,
        color: theme.monogramText,
      }}
    >
      {branding.monogram}
    </div>
  );
}

function BackgroundPattern({ theme }) {
  if (theme.pattern === "dots") {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${theme.patternColor} 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px",
        }}
      />
    );
  }
  if (theme.pattern === "lines") {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(90deg, ${theme.patternColor} 0, ${theme.patternColor} 1px, transparent 1px, transparent 54px)`,
        }}
      />
    );
  }
  return null;
}

function Frame({ theme }) {
  if (theme.frameStyle === "double") {
    return (
      <>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 26,
            border: `1.5px solid ${theme.frameColor}`,
            borderRadius: 4,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 34,
            border: `1px solid ${theme.frameColor}`,
            borderRadius: 2,
          }}
        />
      </>
    );
  }
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 28,
        border: `1.5px solid ${theme.frameColor}`,
        borderRadius: 20,
      }}
    />
  );
}

const PropertyPost = forwardRef(function PropertyPost(
  { title, location, price, highlights, themeId },
  ref
) {
  const theme = themes.find((t) => t.id === themeId) || themes.find((t) => t.id === defaultThemeId);
  const chips = splitHighlights(highlights);

  const titleFontFamily =
    theme.titleFont === "sans" ? "'Inter', system-ui, sans-serif" : "'Fraunces', serif";

  return (
    <div
      ref={ref}
      className="post-canvas"
      style={{
        width: 1080,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        background: theme.background,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: theme.textPrimary,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BackgroundPattern theme={theme} />
      <Frame theme={theme} />

      {/* Content column */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "72px 76px 0 76px",
        }}
      >
        {/* Eyebrow row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 20,
              letterSpacing: "0.28em",
              color: theme.accent,
              fontWeight: 500,
            }}
          >
            FEATURED LISTING
          </span>
          <MonogramBadge theme={theme} />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: titleFontFamily,
            fontWeight: theme.titleWeight,
            fontSize: titleSize(title),
            lineHeight: 1.12,
            margin: "40px 0 0 0",
            color: theme.textPrimary,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {title}
        </h2>

        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            marginTop: 22,
          }}
        >
          <div style={{ marginTop: 3 }}>
            <PinIcon color={theme.accent} />
          </div>
          <span
            style={{
              fontSize: locationSize(location),
              color: theme.textSecondary,
              lineHeight: 1.3,
              fontWeight: 400,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {location}
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, ${theme.frameColor}, transparent)`,
            margin: "40px 0 34px 0",
          }}
        />

        {/* Price block */}
        <div>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 17,
              letterSpacing: "0.22em",
              color: theme.textMuted,
            }}
          >
            PRICE
          </span>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: priceSize(price),
              color: theme.accent,
              marginTop: 8,
              lineHeight: 1.15,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {price}
          </div>
        </div>

        {/* Highlights */}
        <div style={{ marginTop: 36 }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 17,
              letterSpacing: "0.22em",
              color: theme.textMuted,
            }}
          >
            HIGHLIGHTS
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 14,
              maxHeight: 160,
              overflow: "hidden",
            }}
          >
            {chips.map((chip, i) => (
              <span
                key={i}
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: theme.textPrimary,
                  background: theme.chipBg,
                  border: `1px solid ${theme.chipBorder}`,
                  borderRadius: 14,
                  padding: "10px 20px",
                  lineHeight: 1.3,
                  wordBreak: "break-word",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skyline motif divider (only for themes that use it) */}
      {theme.skyline && (
        <div style={{ position: "relative", marginTop: 24 }}>
          <SkylineMotif
            color={theme.skylineColor}
            opacity={0.9}
            bold={theme.id === "midnight"}
          />
        </div>
      )}
      {!theme.skyline && <div style={{ marginTop: 40 }} />}

      {/* Footer / branding band */}
      <div
        style={{
          position: "relative",
          background: theme.footerBg,
          padding: "34px 76px 40px 76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          borderTop:
            theme.id === "ivory" ? "1px solid rgba(20,52,42,0.12)" : "none",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: 26,
              color: theme.textPrimary,
              lineHeight: 1.25,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {branding.companyName}
          </div>
          {branding.tagline && (
            <div
              style={{
                fontSize: 16,
                color: theme.textMuted,
                marginTop: 4,
              }}
            >
              {branding.tagline}
            </div>
          )}
        </div>
        <div
          style={{
            textAlign: "right",
            flexShrink: 0,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 19,
            color: theme.accent,
          }}
        >
          {branding.contactLabel}: {branding.contact}
        </div>
      </div>
    </div>
  );
});

export default PropertyPost;
