import type { ProductItem } from '../../types';
import { SectionTitle } from '../../components/ui';
import { designTokens } from '../../styles/tokens';

export interface ProductsMarqueeProps {
  title: string;
  items: ProductItem[];
}

export function ProductsMarquee({ title, items }: ProductsMarqueeProps) {
  if (!items.length) {
    return null;
  }

  const duplicatedItems = [...items, ...items];

  return (
    <section aria-label={title} style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <SectionTitle as="h3" title={title} />
      <div className="gallery-marquee" aria-label={title}>
        <div className="gallery-marquee-track">
          {duplicatedItems.map((product, index) => (
            <div key={`${product.title}-${index}`} className="gallery-marquee-item gallery-product-item">
              <img src={product.image} alt={product.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
