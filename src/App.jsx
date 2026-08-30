import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PropertyForm from "./components/PropertyForm.jsx";
import Preview from "./components/Preview.jsx";
import { defaultThemeId, getThemeById } from "./config/themes.js";

const EMPTY_VALUES = {
  title: "",
  location: "",
  price: "",
  highlights: "",
};

const SAMPLE_VALUES = {
  title: "4 BHK Luxury Apartment, Hiranandani Estate",
  location: "Hiranandani Estate, Mumbai, Maharashtra",
  price: "₹10.5 Cr onwards",
  highlights: "3000 sq.ft · Corner plot · Ready to move · 3 balconies · 2 car parking",
};

const FIELD_LABELS = {
  title: "Property & type",
  location: "Location",
  price: "Price",
  highlights: "Highlights",
};

export default function App() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [generatedValues, setGeneratedValues] = useState(null);
  const [errors, setErrors] = useState({});
  const [downloadState, setDownloadState] = useState("idle"); // idle | loading | error
  const [downloadError, setDownloadError] = useState("");
  const [themeId, setThemeId] = useState(defaultThemeId);

  const postRef = useRef(null);
  const previewSectionRef = useRef(null);

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const validate = (data) => {
    const nextErrors = {};
    Object.keys(FIELD_LABELS).forEach((key) => {
      if (!data[key] || !data[key].trim()) {
        nextErrors[key] = `${FIELD_LABELS[key]} is required.`;
      }
    });
    return nextErrors;
  };

  const handleSubmit = () => {
    const trimmed = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, v.trim()])
    );
    const nextErrors = validate(trimmed);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setValues(trimmed);
    setGeneratedValues(trimmed);
    setDownloadState("idle");
    setDownloadError("");

    // Move focus/scroll to the preview on small screens once it renders.
    requestAnimationFrame(() => {
      if (window.innerWidth < 1024 && previewSectionRef.current) {
        previewSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  const handleUseSample = () => {
    setValues(SAMPLE_VALUES);
    setErrors({});
  };

  const handleReset = () => {
    setValues(EMPTY_VALUES);
    setGeneratedValues(null);
    setErrors({});
    setDownloadState("idle");
    setDownloadError("");
    setThemeId(defaultThemeId);
  };

  const handleDownload = async () => {
    if (!postRef.current) return;
    setDownloadState("loading");
    setDownloadError("");
    try {
      // Ensure web fonts are fully loaded before rasterizing, otherwise the
      // exported PNG can briefly fall back to system fonts.
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const dataUrl = await toPng(postRef.current, {
        width: 1080,
        height: 1080,
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: getThemeById(themeId).footerBg,
      });

      const link = document.createElement("a");
      link.download = "property-post.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadState("idle");
    } catch (err) {
      console.error("Failed to export property post:", err);
      setDownloadState("error");
      setDownloadError(
        "We couldn't generate the PNG. Please try again, or reload the page if the issue continues."
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <section aria-labelledby="form-heading">
            <PropertyForm
              values={values}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onUseSample={handleUseSample}
              isGenerated={Boolean(generatedValues)}
            />
          </section>

          <section aria-labelledby="preview-heading" ref={previewSectionRef}>
            <Preview
              values={generatedValues || SAMPLE_VALUES}
              isGenerated={Boolean(generatedValues)}
              themeId={themeId}
              onThemeChange={setThemeId}
              postRef={postRef}
              onDownload={handleDownload}
              onReset={handleReset}
              downloadState={downloadState}
              downloadError={downloadError}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
