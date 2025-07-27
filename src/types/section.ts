
import { Section } from './product';

export type PointersSection = Section & {
  type: 'pointers';
  values: Array<{
    text: string;
    icon?: string;
  }>;
};

export type FeaturesSection = Section & {
  type: 'features';
  values: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
};

export type AboutSection = Section & {
  type: 'about';
  values: Array<{
    title: string;
    description: string;
  }>;
};

// Type guard functions
export function isPointersSection(section: Section): section is PointersSection {
  return section.type === 'pointers';
}

export function isFeaturesSection(section: Section): section is FeaturesSection {
  return section.type === 'features';
}

export function isAboutSection(section: Section): section is AboutSection {
  return section.type === 'about';
}