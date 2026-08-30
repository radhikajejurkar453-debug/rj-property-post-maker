import { useEffect, useRef, useState } from "react";
import PropertyPost from "./PropertyPost.jsx";
import { themes } from "../config/themes.js";

const CANVAS_SIZE = 1080;

function useContainerWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  return [ref, width];
}

const EmptyState = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest/25 bg-white/40 p-10 text-center">
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest"
      aria-hidden="true"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 20V9.5L12 4l8 5.5V20H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </div>
    <p className="font-display text-lg font-medium text-forest">
      Your property post will appear here
    </p>
    <p className="max-w-xs text-sm text-charcoal/55">
      Fill in the four details on the left and select "Generate Property
      Post" to preview your creative.
    </p>
  </div>
);

function ThemePicker({ themeId, onChange }) {
  return (
    <div className="mb-5" role="radiogroup" aria-label="Post design">
      <span className="mb-2 block text-sm font-medium text-charcoal/80">
        Design
      </span>
      <div className="flex flex-wrap gap-2.5">
        {themes.map((theme) => {
          const selected = theme.id === themeId;
          return (
            <button
              key={theme.id}
              type="button"
              role="radio"
              aria-checked={selected}
              title={theme.description}
              onClick={() => onChange(theme.id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selected
                  ? "border-forest bg-forest text-ivory shadow-soft"
                  : "border-forest/20 bg-white text-charcoal/70 hover:border-forest/40"
              }`}
            >
              <span
                className="h-4 w-4 flex-shrink-0 rounded-full border border-black/10"
                style={{
                  background: `linear-gradient(135deg, ${theme.swatch[0]} 50%, ${theme.swatch[1]} 50%)`,
                }}
                aria-hidden="true"
              />
              {theme.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Preview({
  values,
  isGenerated,
  themeId,
  onThemeChange,
  postRef,
  onDownload,
  onReset,
  downloadState,
  downloadError,
}) {
  const [wrapRef, width] = useContainerWidth();
  const scale = width > 0 ? Math.min(width / CANVAS_SIZE, 1) : 0;
  const scaledHeight = CANVAS_SIZE * scale;

  return (
    <div className="rounded-2xl border border-forest/10 bg-white/60 p-5 shadow-soft sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-semibold text-forest">
            Preview
          </h2>
          <p className="mt-1 text-sm text-charcoal/60">
            Exports as a 1080 &times; 1080 PNG, ready for Instagram or
            WhatsApp.
          </p>
        </div>
      </div>

      {isGenerated && <ThemePicker themeId={themeId} onChange={onThemeChange} />}

      <div
        ref={wrapRef}
        className="post-scale-wrap mx-auto w-full max-w-[520px] rounded-xl"
        style={{ height: isGenerated ? scaledHeight || 1 : 420 }}
      >
        {isGenerated ? (
          <div
            style={{
              width: CANVAS_SIZE,
              height: CANVAS_SIZE,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <PropertyPost ref={postRef} {...values} themeId={themeId} />
          </div>
        ) : (
          <EmptyState />
        )}
      </div>

      {isGenerated && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onDownload}
            disabled={downloadState === "loading"}
            className="flex-1 rounded-xl bg-brass px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-forest-dark shadow-soft transition hover:bg-brass-light disabled:cursor-not-allowed disabled:opacity-60"
          >
            {downloadState === "loading" ? "Preparing PNG…" : "Download Post"}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="flex-1 rounded-xl border border-forest/25 bg-transparent px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-forest transition hover:bg-forest/5"
          >
            Create Another Post
          </button>
        </div>
      )}

      {downloadState === "error" && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-600">
          {downloadError ||
            "Something went wrong while creating the PNG. Please try again."}
        </p>
      )}
    </div>
  );
}
