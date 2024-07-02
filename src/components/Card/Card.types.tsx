export interface CardProps {
  title: string;
  images: { src: string; text: string }[];
  ctaText?: string;
  ctaLink?: string;
  disabled?: boolean;
  variant?: 'default' | 'imageRight';
}
