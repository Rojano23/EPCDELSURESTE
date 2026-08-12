import type { GalleryContent } from '../types';

export const gallery: GalleryContent = {
    brandsTitle: 'Marcas de referencia',
    productsTitle: 'Instrumentación y equipos de control',
    brands: [
        { name: 'ABB', logo: new URL('../assets/client/Gallery/brands/ABB.jpg', import.meta.url).href },
        { name: 'E+H', logo: new URL('../assets/client/Gallery/brands/E+H.jpg', import.meta.url).href },
        { name: 'Emerson', logo: new URL('../assets/client/Gallery/brands/Emerson.jpg', import.meta.url).href },
        { name: 'Honeywell', logo: new URL('../assets/client/Gallery/brands/Honeywell.jpg', import.meta.url).href },
        { name: 'Krohne', logo: new URL('../assets/client/Gallery/brands/Krohne.jpg', import.meta.url).href },
        { name: 'RA', logo: new URL('../assets/client/Gallery/brands/RA.jpg', import.meta.url).href },
        { name: 'Schneider', logo: new URL('../assets/client/Gallery/brands/Schneider.jpg', import.meta.url).href },
        { name: 'Siemens', logo: new URL('../assets/client/Gallery/brands/siemens.jpg', import.meta.url).href },
        { name: 'Yoko', logo: new URL('../assets/client/Gallery/brands/Yoko.jpg', import.meta.url).href },
    ],
    products: [
        { title: 'CF3', image: new URL('../assets/client/Gallery/products/CF3.jpg', import.meta.url).href },
        { title: 'Caudal', image: new URL('../assets/client/Gallery/products/caudal.jpg', import.meta.url).href },
        { title: 'Caudal 2', image: new URL('../assets/client/Gallery/products/caudal2.jpg', import.meta.url).href },
        { title: 'CFABB', image: new URL('../assets/client/Gallery/products/cfabb.jpg.png', import.meta.url).href },
        { title: 'Masicos', image: new URL('../assets/client/Gallery/products/Masicos.png', import.meta.url).href },
        { title: 'Radar', image: new URL('../assets/client/Gallery/products/Radar.png', import.meta.url).href },
        { title: 'Spirit', image: new URL('../assets/client/Gallery/products/spirit.jpg', import.meta.url).href },
        { title: 'TP', image: new URL('../assets/client/Gallery/products/TP.png', import.meta.url).href },
        { title: 'TP2', image: new URL('../assets/client/Gallery/products/TP2.jpg', import.meta.url).href },
        { title: 'TP3', image: new URL('../assets/client/Gallery/products/TP3.jpg', import.meta.url).href },
        { title: 'TP4', image: new URL('../assets/client/Gallery/products/TP4.jpg', import.meta.url).href },
        { title: 'Imagen 1', image: new URL('../assets/client/Gallery/products/Imagen 1.jpg', import.meta.url).href },
    ],
};
