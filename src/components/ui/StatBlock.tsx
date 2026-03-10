interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-inter)] text-5xl font-black text-dark">{value}</p>
      <p className="mt-2 text-sm font-medium text-dark/80 uppercase tracking-wide">{label}</p>
    </div>
  );
}
