export interface Project {
  id: string;
  title: string;
  location: string;
  year: number | string;
  description: string;
  fullDescription?: string;
  technicalSpecs?: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio?: string;
  photo: string;
}
