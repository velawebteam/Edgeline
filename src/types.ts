export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  description: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}
