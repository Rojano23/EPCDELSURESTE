import type { KeyboardEvent } from 'react';

import { theme } from '../../data/theme';
import type { ProductItem } from '../../types';

export interface ProductCardProps {
  product: ProductItem;
  onOpen: (product: ProductItem, trigger: HTMLButtonElement | null) => void;
}

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const isTemperatureFamily = product.familyIds.includes('current-temperature');
  const temperatureCardHint = product.communicationTechnologies?.includes('LoRaWAN')
    ? 'Sensor inalámbrico LoRaWAN'
    : 'Transmisor industrial';

  function handleKeyboardOpen(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(product, event.currentTarget);
    }
  }

  return (
    <article
      className={`instrumentation-product-card${isTemperatureFamily ? ' instrumentation-product-card--temperature' : ''}`}
      aria-label={`${product.commercialName} de catálogo`}
    >
      {product.officialImage ? (
        <div
          className={`instrumentation-product-media-wrap${isTemperatureFamily ? ' instrumentation-product-media-wrap--temperature' : ''}`}
        >
          <img
            src={product.officialImage}
            alt={product.officialImageAlt ?? product.commercialName}
            loading="lazy"
            className={`instrumentation-product-media${isTemperatureFamily ? ' instrumentation-product-media--temperature' : ''}`}
          />
        </div>
      ) : null}

      <div className="instrumentation-product-content">
        <h5 className="instrumentation-product-title">{product.commercialName}</h5>
        <p className="instrumentation-product-model">Modelo: {product.model}</p>
        {isTemperatureFamily ? (
          <p className="instrumentation-product-quick-type">{temperatureCardHint}</p>
        ) : null}
        <p
          className={`instrumentation-product-description${isTemperatureFamily ? ' instrumentation-product-description--temperature' : ''}`}
        >
          {product.shortDescription}
        </p>
        {product.familyLabel ? <p className="instrumentation-product-family">Familia: {product.familyLabel}</p> : null}
      </div>

      <button
        type="button"
        className="focus-ring instrumentation-product-open"
        onClick={(event) => onOpen(product, event.currentTarget)}
        onKeyDown={handleKeyboardOpen}
        aria-label={`Ver ficha técnica resumida de ${product.commercialName}`}
        style={{
          borderColor: theme.primaryColor,
          backgroundColor: theme.primaryColor,
          color: theme.textOnDarkColor,
        }}
      >
        Ver ficha técnica
      </button>
    </article>
  );
}
