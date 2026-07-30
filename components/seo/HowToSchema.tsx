interface HowToSchemaProps {
  title: string;
  description: string;
  steps: {
    name: string;
    text: string;
    url?: string;
  }[];
  totalTime?: string;
  estimatedCost?: string;
}

export function HowToSchema({
  title,
  description,
  steps,
  totalTime,
  estimatedCost,
}: HowToSchemaProps) {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    headline: title,
    name: title,
    description: description,
    ...(totalTime && { totalTime: `PT${totalTime}M` }),
    ...(estimatedCost && { estimatedCost: { "@type": "MonetaryAmount", value: estimatedCost, currency: "USD" } }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
    />
  );
}
