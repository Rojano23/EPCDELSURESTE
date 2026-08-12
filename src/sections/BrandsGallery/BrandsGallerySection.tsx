import { Section } from '../../components/layout';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { BrandsMarquee } from './BrandsMarquee';
import { ProductsMarquee } from './ProductsMarquee';

export function BrandsGallerySection() {
  const { featureFlags, gallery } = clientConfig;

  if (!featureFlags.gallery || (!gallery.brands.length && !gallery.products.length)) {
    return null;
  }

  return (
    <Section ariaLabel="Galería de marcas y productos" id="marcas-galeria" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        {gallery.brands.length > 0 ? (
          <BrandsMarquee title={gallery.brandsTitle} items={gallery.brands} />
        ) : null}

        {gallery.products.length > 0 ? (
          <ProductsMarquee title={gallery.productsTitle} items={gallery.products} />
        ) : null}
      </div>
    </Section>
  );
}
