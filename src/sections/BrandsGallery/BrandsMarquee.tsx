import type { BrandItem } from '../../types';
import { SectionTitle } from '../../components/ui';
import { designTokens } from '../../styles/tokens';

export interface BrandsMarqueeProps {
  title: string;
  items: BrandItem[];
}

export function BrandsMarquee({ title, items }: BrandsMarqueeProps) {
  if (!items.length) {
    return null;
  }

  const duplicatedItems = [...items, ...items];

  return (
    <section aria-label={title} style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <SectionTitle as="h3" title={title} />
      <div className="gallery-marquee" aria-label={title}>
        <div className="gallery-marquee-track">
          {duplicatedItems.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="gallery-marquee-item gallery-brand-item">
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
