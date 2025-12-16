import React from 'react';

export type BadgeVariant = 'primary-light' | 'primary-medium' | 'primary-dark';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /**
   * The text content to display in the badge
   */
  label: string;
  /**
   * The color variant of the badge
   * - primary-light: bg-primary-100 text-primary-800
   * - primary-medium: bg-primary-200 text-primary-800
   * - primary-dark: bg-primary-300 text-primary-900
   */
  variant?: BadgeVariant;
  /**
   * The size of the badge
   * - sm: px-2 py-0.5 text-xs (for compact areas like Experience)
   * - md: px-2.5 py-1 text-xs (default, for main areas like About)
   */
  size?: BadgeSize;
  /**
   * Additional CSS classes to apply to the badge
   */
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  'primary-light': 'bg-primary-100 text-primary-800',
  'primary-medium': 'bg-primary-200 text-primary-800',
  'primary-dark': 'bg-primary-300 text-primary-900',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
};

/**
 * A reusable badge component for displaying skills, tags, or labels
 */
const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary-light',
  size = 'md',
  className = ''
}) => {
  const variantClasses = variantStyles[variant];
  const sizeClasses = sizeStyles[size];

  return (
    <span
      className={`${variantClasses} ${sizeClasses} rounded font-medium ${className}`.trim()}
    >
      {label}
    </span>
  );
};

export default Badge;
