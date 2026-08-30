const LIMITS = {
  title: 90,
  location: 70,
  price: 40,
  highlights: 140,
};

const FIELDS = [
  {
    key: "title",
    label: "Property & type",
    placeholder: "4 BHK Luxury Villa, Ansal Golf City",
    type: "text",
  },
  {
    key: "location",
    label: "Location",
    placeholder: "Sushant Golf City, Lucknow",
    type: "text",
  },
  {
    key: "price",
    label: "Price",
    placeholder: "₹2.5 Cr onwards",
    type: "text",
  },
  {
    key: "highlights",
    label: "Highlights",
    placeholder: "3000 sq.ft · Corner plot · Ready to move",
    type: "textarea",
  },
];

export default function PropertyForm({
  values,
  errors,
  onChange,
  onSubmit,
  onUseSample,
  isGenerated,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-forest/10 bg-white/60 p-5 shadow-soft sm:p-7"
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-semibold text-forest">
            Property details
          </h2>
          <p className="mt-1 text-sm text-charcoal/60">
            Fill in all four fields to generate your post.
          </p>
        </div>
        <button
          type="button"
          onClick={onUseSample}
          className="flex-shrink-0 rounded-full border border-brass/50 bg-brass/10 px-3.5 py-1.5 text-xs font-medium text-forest transition hover:bg-brass/20"
        >
          Use sample data
        </button>
      </div>

      <div className="space-y-5">
        {FIELDS.map((field) => {
          const value = values[field.key];
          const limit = LIMITS[field.key];
          const error = errors[field.key];
          const inputId = `field-${field.key}`;
          const errorId = `${inputId}-error`;
          const countId = `${inputId}-count`;
          const nearLimit = value.length > limit * 0.85;

          const sharedProps = {
            id: inputId,
            name: field.key,
            value,
            placeholder: field.placeholder,
            maxLength: limit,
            "aria-invalid": Boolean(error),
            "aria-describedby": `${countId}${error ? ` ${errorId}` : ""}`,
            onChange: (e) => onChange(field.key, e.target.value),
            className: `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 transition focus:border-forest focus:ring-2 focus:ring-forest/20 ${
              error ? "border-red-400" : "border-forest/15"
            }`,
          };

          return (
            <div key={field.key}>
              <div className="mb-1.5 flex items-baseline justify-between gap-2">
                <label
                  htmlFor={inputId}
                  className="text-sm font-medium text-charcoal/80"
                >
                  {field.label}
                  <span className="ml-1 text-brass-dark" aria-hidden="true">
                    *
                  </span>
                </label>
                <span
                  id={countId}
                  className={`text-xs tabular-nums ${
                    nearLimit ? "text-brass-dark" : "text-charcoal/35"
                  }`}
                >
                  {value.length}/{limit}
                </span>
              </div>

              {field.type === "textarea" ? (
                <textarea rows={2} {...sharedProps} />
              ) : (
                <input type="text" {...sharedProps} />
              )}

              {error && (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-forest px-6 py-3.5 text-center font-body text-sm font-semibold tracking-wide text-ivory shadow-soft transition hover:bg-forest-light active:scale-[0.99]"
      >
        {isGenerated ? "Regenerate Property Post" : "Generate Property Post"}
      </button>
    </form>
  );
}
