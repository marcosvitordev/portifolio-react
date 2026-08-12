import {
  Braces,
  BriefcaseBusiness,
  Camera,
  Code2,
  Database,
  FileCode2,
  GitFork,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Palette,
  Play,
  Send,
  Server,
  Terminal,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  api: Globe2,
  css: Palette,
  database: Database,
  figma: Palette,
  'file-code': FileCode2,
  git: GitBranch,
  github: GitFork,
  html: Code2,
  instagram: Camera,
  java: Braces,
  javascript: Braces,
  linkedin: BriefcaseBusiness,
  mail: Mail,
  'message-circle': MessageCircle,
  mysql: Database,
  nest: Layers3,
  next: Layers3,
  node: Server,
  php: Code2,
  postgres: Database,
  python: Braces,
  react: Code2,
  send: Send,
  server: Server,
  sqlite: Database,
  tailwind: Palette,
  terminal: Terminal,
  typescript: Braces,
  youtube: Play,
};

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name] ?? Code2;
  return <IconComponent aria-hidden="true" {...props} />;
}
