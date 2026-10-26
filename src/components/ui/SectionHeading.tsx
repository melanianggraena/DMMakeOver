import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  titleClassName = '',
}) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="font-heading font-600 text-primary-container text-xs tracking-[0.25em] uppercase">
          {label}
        </span>
      )}
      <h2
        className={`font-heading font-800 text-text-primary uppercase tracking-tight leading-none ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm leading-relaxed max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
