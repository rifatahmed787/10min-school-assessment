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
}