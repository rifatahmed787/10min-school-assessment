interface FeatureExplanation {
  title: string;
  description: string;
  icon?: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  values: FeatureExplanation[];
}