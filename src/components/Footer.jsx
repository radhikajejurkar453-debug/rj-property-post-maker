import { appMeta } from "../config/branding.js";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-ivory py-6">
      <div className="mx-auto max-w-6xl px-5 text-center text-xs text-charcoal/50 sm:px-8">
        <p>
          Property Post Maker &middot; Built by{" "}
          <span className="font-medium text-charcoal/70">
            {appMeta.builtBy}
          </span>
        </p>
      </div>
    </footer>
  );
}
