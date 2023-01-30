import React from 'react';
import { theme } from '../../theme/theme';

export interface MButtonProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export default function MButton(props: MButtonProps) {
  const smallButtonClasses = 'px-2 py-2 text-sm';
  const mediumButtonClasses = 'px-4 py-2 text-base h-10';
  const largeButtonClasses = 'px-5 py-3 text-lg';

  let sizeClasses = '';
  switch (props.size) {
    case 'small':
      sizeClasses = theme.buttonSmall;
      break;
    case 'large':
      sizeClasses = theme.buttonMedium;
      break;
    case 'medium':
    default:
      sizeClasses = theme.buttonLarge;
      break;
  }

  return (
    <button
      className={[
        'rounded-full',
        'shadow-lg',
        'shadow-neutral-900',
        'hover:shadow-md',
        'hover:shadow-neutral-900',
        'active:shadow-sm',
        'active:shadow-neutral-900',
        'transition-shadow',
        'bg-neutral-900',
        'text-neutral-50',
        sizeClasses,
      ].join(' ')}
    >
      {props.label}
    </button>
  );
}
