export type Theme = 'light' | 'dark';

export type ProjectCategory =
  | 'Full Stack'
  | 'Front-end'
  | 'Back-end'
  | 'Sistemas'
  | 'Acadêmicos'
  | 'Mobile';

export type ProjectStatus = 'Concluído' | 'Em evolução' | 'Privado';

export interface Technology {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  categories: ProjectCategory[];
  repositoryUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
  year?: number;
  featured: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  course: string;
  institution: string;
  period: string;
  status: 'Concluído' | 'Cursando';
  description?: string;
}

export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  workload: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}

export interface NavigationItem {
  label: string;
  href: `#${string}`;
  sectionId: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  company: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
