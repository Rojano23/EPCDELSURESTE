import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'web-industrial-a',
    title: 'Sitio corporativo industrial',
    sector: 'Automatización',
    shortDescription: 'Implementación de plantilla corporativa para empresa del sector automatización.',
    detailedDescription:
      'Desarrollo completo de sitio web corporativo basado en la plantilla RX23, incluyendo configuración de branding, servicios, industrias y sección de contacto.',
    featured: true,
  },
  {
    id: 'web-engineering-b',
    title: 'Presencia digital para ingeniería',
    sector: 'Ingeniería',
    shortDescription: 'Sitio web para empresa de ingeniería técnica con foco en proyectos y experiencia.',
    detailedDescription:
      'Configuración y despliegue de sitio corporativo con sección de proyectos, diferenciadores y formulario de contacto integrado.',
    featured: true,
  },
  {
    id: 'web-energy-c',
    title: 'Portal sector energía',
    sector: 'Energía',
    shortDescription: 'Sitio responsivo para empresa de gestión energética.',
    detailedDescription:
      'Adaptación de la plantilla RX23 para cliente del sector energético con identidad visual diferenciada y sección de industrias personalizada.',
    featured: false,
  },
];
