export interface DestinationType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface CrewType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface TechnologyType {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
