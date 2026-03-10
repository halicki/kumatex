export function StatsBar() {
  const stats = [
    { value: "15+", label: "lat doświadczenia" },
    { value: "21+", label: "naprawianych marek" },
    { value: "4.7", label: "ocena klientów" },
    { value: "25+", label: "wykwalifikowanych mechaników" },
  ];
  return (
    <section className="w-full bg-primary">
      <div className="mx-auto max-w-[1440px] grid grid-cols-2 gap-4 md:flex md:justify-around px-4 md:px-8 py-6 lg:py-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-[family-name:var(--font-inter)] text-3xl lg:text-5xl font-black text-dark">{s.value}</p>
            <p className="mt-2 text-sm font-medium text-dark/80 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
