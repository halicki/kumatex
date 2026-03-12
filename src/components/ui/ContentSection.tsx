export function ContentSection({
  content,
}: {
  content: { originalText: string[]; seoText: string[] };
}) {
  if (!content.originalText.length && !content.seoText.length) return null;

  return (
    <div className="mt-8 max-w-3xl space-y-4">
      {content.originalText.map((p, i) => (
        <p key={`o-${i}`} className="text-dark leading-relaxed">
          {p}
        </p>
      ))}
      {content.seoText.map((p, i) => (
        <p key={`s-${i}`} className="text-dark leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}
