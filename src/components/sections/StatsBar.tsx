export function StatsBar() {
  const stats = [
    { value: "15+", label: "lat doświadczenia" },
    { value: "21+", label: "naprawianych marek" },
    { value: "4.7", label: "ocena klientów" },
    { value: "25+", label: "wykwalifikowanych mechaników" },
  ];
  return (
    <section className="w-full bg-primary">
      <div className="mx-auto flex max-w-[1440px] items-center justify-around py-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-[family-name:var(--font-inter)] text-5xl font-black text-dark">{s.value}</p>
            <p className="mt-2 text-sm font-medium text-dark/80 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
