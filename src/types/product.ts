
export type Language = 'en' | 'bn';

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color?: string;
  order_idx: number;
  values: SectionItem[];
}

export interface SectionItem {
  id?: string;
  title: string;
  description: string;
  text?: string;       
  icon?: string;       
  resource_type?: string;
  resource_value?: string;
}

interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description?: string; 
  media?: MediaItem[];
  price_type?: string;
  price_details?: {
    text?: string;
  };
  sections: Section[];
}