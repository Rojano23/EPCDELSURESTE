import { useEffect, useRef } from 'react';

import { theme } from '../../data/theme';
import type { ProductItem } from '../../types';

function buildWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/\D+/g, '');
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  whatsapp: string;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, whatsapp, onClose }: ProductDetailModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    panelRef.current?.focus();

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  const shouldShowTechnicalSheet = Boolean(product.technicalSheetUrl) && product.brandId !== 'winters-instruments';

  const whatsappMessage = `Hola, me interesa recibir información sobre el instrumento ${product.model} de ${product.brandId === 'current-instruments' ? 'Current Instruments' : 'Winters Instruments'}.`;

  return (
    <div className="instrumentation-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="instrumentation-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Ficha técnica de ${product.commercialName}`}
        tabIndex={-1}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="focus-ring instrumentation-modal-close"
          onClick={onClose}
          aria-label="Cerrar ficha técnica"
        >
          Cerrar
        </button>

        <div className="instrumentation-modal-content">
          {product.officialImage ? (
            <div className="instrumentation-modal-image-wrap">
              <img
                src={product.officialImage}
                alt={product.officialImageAlt ?? product.commercialName}
                className="instrumentation-modal-image"
              />
            </div>
          ) : null}

          <div className="instrumentation-modal-text">
            <h4 style={{ margin: 0, color: theme.textColor }}>{product.commercialName}</h4>
            <p style={{ margin: 0, color: theme.textSecondaryColor }}>Modelo: {product.model}</p>
            <p style={{ margin: 0, color: theme.textColor, lineHeight: 1.65 }}>{product.shortDescription}</p>

            {product.applicationSummary ? (
              <p style={{ margin: 0, color: theme.textColor, lineHeight: 1.65 }}>
                Aplicación: {product.applicationSummary}
              </p>
            ) : null}

            {product.measuredVariable ? (
              <p style={{ margin: 0, color: theme.textColor }}>Variable medida: {product.measuredVariable}</p>
            ) : null}

            {product.communicationTechnologies && product.communicationTechnologies.length > 0 ? (
              <p style={{ margin: 0, color: theme.textColor }}>
                Comunicación: {product.communicationTechnologies.join(' · ')}
              </p>
            ) : null}

            {product.mainSpecifications && product.mainSpecifications.length > 0 ? (
              <ul className="instrumentation-spec-list">
                {product.mainSpecifications.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            ) : null}

            <div className="instrumentation-modal-actions">
              <a
                className="focus-ring instrumentation-modal-link"
                href={product.officialPageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver producto oficial
              </a>

              {shouldShowTechnicalSheet ? (
                <a
                  className="focus-ring instrumentation-modal-link"
                  href={product.technicalSheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver ficha técnica oficial
                </a>
              ) : null}

              <a
                className="focus-ring instrumentation-modal-link"
                href={whatsapp ? buildWhatsAppUrl(whatsapp, whatsappMessage) : '#contacto'}
                target={whatsapp ? '_blank' : undefined}
                rel={whatsapp ? 'noopener noreferrer' : undefined}
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
