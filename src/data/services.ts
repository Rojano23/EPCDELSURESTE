import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Estrategia digital',
    shortDescription: 'Definición de propuesta de valor y estructura de contenido.',
    detailedDescription:
      'Análisis inicial del cliente, identificación de diferenciadores y definición de la arquitectura de información del sitio.',
    icon: '',
    featured: true,
  },
  {
    id: 'development',
    title: 'Desarrollo web',
    shortDescription: 'Implementación base de la plantilla y arquitectura reutilizable.',
    detailedDescription:
      'Construcción del sitio corporativo sobre la plantilla RX23 con configuración personalizada de branding, contenido y funcionalidades.',
    icon: '',
    featured: true,
  },
  {
    id: 'deployment',
    title: 'Publicación y deploy',
    shortDescription: 'Despliegue en hosting estático con dominio personalizado.',
    detailedDescription:
      'Configuración del entorno de producción, optimización de build y publicación en plataformas compatibles como Cloudflare Pages, Vercel o GitHub Pages.',
    icon: '',
    featured: false,
  },
];
