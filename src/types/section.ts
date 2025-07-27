
import { Section } from './product';

export type InstructorsSection = Section & {
  type: 'pointers';
  values: Array<{
    text: string;
    icon?: string;
  }>;
};
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

export type FeaturesExplanationsSection = Section & {
  type: 'feature_explanations';
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
export function isInstructorsSection(section: Section): section is InstructorsSection {
  return section.type === 'instructors';
}

export function isPointersSection(section: Section): section is PointersSection {
  return section.type === 'pointers';
}

export function isFeaturesSection(section: Section): section is FeaturesSection {
  return section.type === 'features';
}
export function isFeaturesExplanationsSection(section: Section): section is FeaturesExplanationsSection {
  return section.type === 'feature_explanations';
}

export function isAboutSection(section: Section): section is AboutSection {
  return section.type === 'about';
}