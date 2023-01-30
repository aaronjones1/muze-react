import React from 'react';
import { theme } from '../../theme/theme';

export interface MTextProps {
  value?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function MText(props: MTextProps) {
  let txtClasses = theme.txtMd;
  switch (props.size) {
    case 'small':
      txtClasses = theme.txtSm;
      break;
    case 'large':
      txtClasses = theme.txtLg;
      break;
    default:
    case 'medium':
      txtClasses = theme.txtMd;
      break;
  }

  return (
    <input
      className={[
        'w-full',
        'shadow-lg',
        'shadow-neutral-900',
        'hover:shadow-md',
        'hover:shadow-neutral-900',
        'focus:shadow-sm',
        'focus:shadow-neutral-900',
        'transition-shadow',
        'bg-neutral-900',
        'text-neutral-200',
        txtClasses,
      ].join(' ')}
      value={props.value}
    />
  );
}
