import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:bg-accent-hover font-heading font-700 tracking-widest uppercase',
  secondary:
    'bg-surface-card text-text-primary border border-border-strong hover:bg-surface-interactive font-heading font-600 tracking-widest uppercase',
  outline:
    'bg-transparent text-text-primary border border-text-primary hover:bg-surface-elevated font-heading font-600 tracking-widest uppercase',
  ghost:
    'bg-transparent text-text-muted hover:text-text-primary hover:bg-surface-interactive font-heading font-500 tracking-wider uppercase',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2',
        'transition-colors duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
