import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Supported button variants.
 */
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button which controls its styling.
   */
  variant?: ButtonVariant;
}

/**
 * A reusable button component with brand-aware styling.  
 * Buttons can be rendered in several variants including primary,
 * secondary, outline, and ghost.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  children,
  ...props
}) => {
  const baseClasses =
    'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2';
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-gold text-background hover:bg-gold/90',
    secondary: 'bg-gray text-background hover:bg-gray/90',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-background',
    ghost: 'bg-transparent text-gold hover:bg-gold/10',
  };
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;