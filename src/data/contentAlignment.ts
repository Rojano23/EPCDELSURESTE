import type {
    ContentAlignmentConfig,
    ContentAlignmentSectionKey,
    ContentTextAlignment,
} from '../types';

const DEFAULT_CONTENT_ALIGNMENT: ContentTextAlignment = 'left';

export const contentAlignment: ContentAlignmentConfig = {
    default: DEFAULT_CONTENT_ALIGNMENT,
    sections: {
        about: 'justify',
        services: 'justify',
        projects: 'justify',
    },
};

export function getContentAlignmentForSection(
    sectionKey: ContentAlignmentSectionKey,
    config: ContentAlignmentConfig,
): ContentTextAlignment {
    return config.sections?.[sectionKey] ?? config.default;
}
