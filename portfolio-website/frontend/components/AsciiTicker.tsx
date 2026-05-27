'use client';

const ITEMS = [
  'SYSTEMS',
  'SIGNAL',
  'NETWORKS',
  'AI',
  'DISTRIBUTED',
  'RELIABILITY',
  'PRODUCT',
  'CRAFT',
];

export default function AsciiTicker() {
  const text = ITEMS.map((item) => `// ${item} `).join(' ::: ');

  return (
    <div className="ascii-ticker" aria-hidden="true">
      <div>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
