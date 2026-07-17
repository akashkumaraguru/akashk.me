import { 
  Sparkles, Hammer, Lightbulb, Bot, Rocket, Zap, 
  Cpu, Target, Compass, Code2, Feather, Layers, 
  Users, HelpCircle, Grid, Sunrise, Eye, Workflow, 
  Globe, Heart, type LucideIcon 
} from 'lucide-react';

export interface Badge {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const BADGES: Badge[] = [
  { name: 'Creative Explorer', icon: Sparkles, color: '#d97757' },
  { name: 'Product Builder', icon: Hammer, color: '#6a9bcc' },
  { name: 'Design Thinker', icon: Lightbulb, color: '#788c5d' },
  { name: 'AI Explorer', icon: Bot, color: '#6a9bcc' },
  { name: 'Future Founder', icon: Rocket, color: '#d97757' },
  { name: 'Innovation Catalyst', icon: Zap, color: '#788c5d' },
  { name: 'Tech Innovator', icon: Cpu, color: '#6a9bcc' },
  { name: 'Problem Solver', icon: Target, color: '#788c5d' },
  { name: 'UX Pioneer', icon: Compass, color: '#d97757' },
  { name: 'Code Craftsman', icon: Code2, color: '#6a9bcc' },
  { name: 'Visual Storyteller', icon: Feather, color: '#788c5d' },
  { name: 'Product Strategist', icon: Layers, color: '#d97757' },
  { name: 'Collaborative Ally', icon: Users, color: '#6a9bcc' },
  { name: 'Curious Learner', icon: HelpCircle, color: '#788c5d' },
  { name: 'Pixel Perfector', icon: Grid, color: '#d97757' },
  { name: 'Dreamer & Doer', icon: Sunrise, color: '#6a9bcc' },
  { name: 'Critical Thinker', icon: Eye, color: '#788c5d' },
  { name: 'System Architect', icon: Workflow, color: '#d97757' },
  { name: 'Global Impact Maker', icon: Globe, color: '#6a9bcc' },
  { name: 'Warm Communicator', icon: Heart, color: '#788c5d' },
];

export function pickRandomBadge(): Badge {
  return BADGES[Math.floor(Math.random() * BADGES.length)];
}

export type Gender = 'male' | 'female' | 'unspecified';

// Akash's figure in the illustration is fixed to the brand orange (#d97757),
// so visitor colors below intentionally avoid it to stay visually distinct.
export const GENDER_COLORS: Record<Gender, string> = {
  male: '#6a9bcc',
  female: '#788c5d',
  unspecified: '#b0aea5',
};

export const AKASH_LINKEDIN = 'https://www.linkedin.com/in/akash-kumaraguru/';
export const AKASH_EMAIL = 'dev.iamakash@gmail.com';
export const AKASH_PHONE = '+91 9345509223';
