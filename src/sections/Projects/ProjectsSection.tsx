import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig, getContentAlignmentForSection } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ProjectsGrid } from './ProjectsGrid';

export function ProjectsSection() {
  const { featureFlags, projects, contentAlignment } = clientConfig;
  const sectionContentAlignment = getContentAlignmentForSection('projects', contentAlignment);

  if (!featureFlags.projects) {
    return null;
  }

  return (
    <Section ariaLabel="Proyectos" id="proyectos" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Nuestro portafolio"
          title="Proyectos"
          subtitle="Experiencia real en implementación de soluciones en la industria energética."
        />
        <ProjectsGrid projects={projects} contentAlignment={sectionContentAlignment} />
      </div>
    </Section>
  );
}
