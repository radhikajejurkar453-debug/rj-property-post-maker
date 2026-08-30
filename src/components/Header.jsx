export default function Header() {
  return (
    <header className="border-b border-forest/10 bg-ivory">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-6 sm:px-8">

        {/* Company Logo */}
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brass/60 bg-forest shadow-soft overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Property Post Maker"
          />
        </div>

        {/* Website Title */}
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl">
            Property Post Maker
          </h1>

          <p className="mt-0.5 truncate font-body text-sm text-charcoal/70 sm:text-base">
            Create professional property posts in seconds
          </p>
        </div>

      </div>
    </header>
  );
}
