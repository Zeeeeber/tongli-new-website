export const metadata = {
  title: "French Page Pilot | Tongli Timber",
  description: "Pilot French multilingual page for Tongli Timber.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FrenchPilotPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm border border-stone-200 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-800 font-medium mb-6">
          Tongli Timber
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-6">
          Page en français
        </h1>
        <p className="text-base text-stone-700 leading-relaxed mb-10">
          This is a pilot multilingual page. Full French content will be
          added later.
        </p>
        <a
          href="/"
          className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded transition-colors"
        >
          Back to English Website
        </a>
      </div>
    </main>
  );
}
