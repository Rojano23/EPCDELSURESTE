import { useEffect, useMemo, useRef, useState } from 'react';

import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { theme } from '../../data/theme';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import type { ProductItem } from '../../types';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

export function BrandsGallerySection() {
  const { featureFlags, gallery, company } = clientConfig;
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const publishedBrands = useMemo(
    () => gallery.brands.filter((brand) => brand.published).sort((a, b) => a.displayOrder - b.displayOrder),
    [gallery.brands],
  );

  const [selectedBrandId, setSelectedBrandId] = useState<string>(() => publishedBrands[0]?.id ?? '');

  const selectedBrand =
    publishedBrands.find((brand) => brand.id === selectedBrandId) ?? publishedBrands[0] ?? null;

  const publishedFamilies = useMemo(() => {
    if (!selectedBrand) {
      return [];
    }

    return selectedBrand.families
      .filter((family) => family.published)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, [selectedBrand]);

  const [selectedFamilyId, setSelectedFamilyId] = useState<string>(() => publishedFamilies[0]?.id ?? '');

  const selectedFamily =
    publishedFamilies.find((family) => family.id === selectedFamilyId) ?? publishedFamilies[0] ?? null;

  const familyProducts = useMemo(() => {
    if (!selectedBrand || !selectedFamily) {
      return [];
    }

    return (gallery.products ?? []).filter(
      (product) =>
        product.published &&
        product.brandId === selectedBrand.id &&
        product.familyIds.includes(selectedFamily.id),
    );
  }, [gallery.products, selectedBrand, selectedFamily]);

  function handleOpenProduct(product: ProductItem, trigger: HTMLButtonElement | null) {
    lastTriggerRef.current = trigger;
    setSelectedProduct(product);
  }

  function handleCloseProduct() {
    setSelectedProduct(null);
    lastTriggerRef.current?.focus();
  }

  useEffect(() => {
    if (!publishedBrands.some((brand) => brand.id === selectedBrandId)) {
      setSelectedBrandId(publishedBrands[0]?.id ?? '');
    }
  }, [publishedBrands, selectedBrandId]);

  useEffect(() => {
    if (!publishedFamilies.some((family) => family.id === selectedFamilyId)) {
      setSelectedFamilyId(publishedFamilies[0]?.id ?? '');
    }
  }, [publishedFamilies, selectedFamilyId]);

  if (!featureFlags.gallery || publishedBrands.length === 0) {
    return null;
  }

  return (
    <Section ariaLabel="Instrumentación industrial" id="marcas-galeria" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <div style={{ display: 'grid', gap: designTokens.spacing.sm }}>
          <h2
            style={{
              margin: 0,
              color: theme.textColor,
              fontFamily: theme.fontFamilyHeading,
              fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)',
            }}
          >
            {gallery.sectionTitle}
          </h2>
          <p style={{ margin: 0, color: theme.textSecondaryColor, maxWidth: '68ch', lineHeight: 1.65 }}>
            {gallery.sectionIntro}
          </p>
        </div>

        <div style={{ display: 'grid', gap: designTokens.spacing.md }}>
          <h3 style={{ margin: 0, color: theme.textColor, fontSize: '1rem' }}>{gallery.brandsTitle}</h3>
          <div className="instrumentation-brand-grid">
            {publishedBrands.map((brand) => {
              const isSelected = selectedBrand?.id === brand.id;
              const brandLogoClass =
                brand.id === 'current-instruments'
                  ? 'brand-logo--current'
                  : brand.id === 'winters-instruments'
                    ? 'brand-logo--winters'
                    : brand.id === 'r-stahl'
                      ? 'brand-logo--stahl'
                      : brand.id === 'bermad'
                        ? 'brand-logo--bermad'
                        : brand.id === 'draeger'
                          ? 'brand-logo--draeger'
                          : '';

              return (
                <button
                  key={brand.id}
                  type="button"
                  className="focus-ring instrumentation-brand-button"
                  aria-label={`Seleccionar fabricante ${brand.name}`}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedBrandId(brand.id);
                    setSelectedFamilyId(
                      brand.families
                        .filter((family) => family.published)
                        .sort((a, b) => a.displayOrder - b.displayOrder)[0]?.id ?? '',
                    );
                  }}
                >
                  <span className="instrumentation-brand-logo-wrap" aria-hidden="true">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.logoAlt ?? `Logotipo de ${brand.name}`}
                        className={`instrumentation-brand-logo ${brandLogoClass}`.trim()}
                        loading="lazy"
                      />
                    ) : null}
                  </span>
                  <span style={{ color: theme.accentColor, fontSize: '0.8rem', fontWeight: 600 }}>
                    {isSelected ? 'Seleccionado' : 'Seleccionar'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {selectedBrand ? (
          <div style={{ display: 'grid', gap: designTokens.spacing.md }}>
            <h3 style={{ margin: 0, color: theme.textColor, fontSize: '1rem' }}>{gallery.familiesTitle}</h3>
            <div className="instrumentation-family-list" role="tablist" aria-label={`Familias de ${selectedBrand.name}`}>
              {publishedFamilies.map((family) => {
                const isSelected = selectedFamily?.id === family.id;

                return (
                  <button
                    key={family.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className="focus-ring instrumentation-family-button"
                    onClick={() => setSelectedFamilyId(family.id)}
                  >
                    {family.name}
                  </button>
                );
              })}
            </div>

            {selectedFamily ? (
              <BaseCard ariaLabel={`Detalle de ${selectedFamily.name}`}>
                <div style={{ display: 'grid', gap: designTokens.spacing.sm }}>
                  <h4 style={{ margin: 0, color: theme.textOnDarkColor, fontSize: '1.05rem' }}>
                    {selectedFamily.name}
                  </h4>
                  <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.92, lineHeight: 1.65 }}>
                    {selectedFamily.shortDescription}
                  </p>
                  <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.82, fontSize: '0.9rem' }}>
                    Consulta el detalle técnico resumido y la documentación oficial disponible para cada producto.
                  </p>

                  {familyProducts.length > 0 ? (
                    <div style={{ display: 'grid', gap: designTokens.spacing.sm }}>
                      <h5 style={{ margin: 0, color: theme.textOnDarkColor, fontSize: '0.95rem' }}>
                        Productos disponibles
                      </h5>
                      <div
                        className="instrumentation-products-grid"
                        aria-label={`Productos de ${selectedFamily.name}`}
                      >
                        {familyProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onOpen={handleOpenProduct}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.86 }}>
                      Para esta familia, la presentación detallada de modelos se encuentra en proceso de validación
                      documental. Puedes solicitar asesoría para seleccionar la mejor opción según tu aplicación.
                    </p>
                  )}

                  <a
                    className="focus-ring"
                    href="#contacto"
                    style={{
                      justifySelf: 'start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      minHeight: '2.5rem',
                      borderRadius: designTokens.radius.sm,
                      border: `1px solid ${theme.primaryColor}`,
                      padding: `${designTokens.spacing.xs} ${designTokens.spacing.md}`,
                      color: theme.textOnDarkColor,
                      backgroundColor: theme.primaryColor,
                      textDecoration: 'none',
                      fontWeight: 700,
                    }}
                  >
                    Solicitar información comercial
                  </a>
                </div>
              </BaseCard>
            ) : null}
          </div>
        ) : null}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        whatsapp={company.whatsapp}
        onClose={handleCloseProduct}
      />
    </Section>
  );
}
