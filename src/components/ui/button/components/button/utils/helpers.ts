import clsx from 'clsx';
import { createElement } from 'react';

import {
  ButtonIconPositions,
  ButtonProps,
  ButtonSizes,
  ButtonVariants,
} from './types';

export const disabledStyles = 'disabled:cursor-not-allowed disabled:opacity-75';

export function buttonBlockStyles(
  block?: boolean,
  iconPosition: ButtonIconPositions = 'left'
) {
  return [
    block ? 'flex' : 'inline-flex',
    iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
  ];
}

export function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return 'px-4 py-1 text-caption3';
    }
    case 'xs': {
      return 'px-4 py-1.5 text-caption2';
    }
    case 'sm': {
      return 'px-5 py-2.5 text-caption';
    }
    case 'md': {
      return 'px-6 py-3.5 text-callout';
    }
    case 'lg': {
      return 'px-6 py-4 text-body';
    }
    case 'xl': {
      return 'px-8 py-5 text-body';
    }
    default: {
      return 'px-6 py-3.5 text-callout';
    }
  }
}

export function loadingIconSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xxs': {
      return 24;
    }
    case 'xs': {
      return 32;
    }
    case 'sm': {
      return 40;
    }
    case 'md': {
      return 48;
    }
    case 'lg': {
      return 56;
    }
    case 'xl': {
      return 60;
    }
    default: {
      return 48;
    }
  }
}

export function buttonIconClasses(
  size?: ButtonSizes,
  iconPosition: ButtonIconPositions = 'left'
) {
  switch (size) {
    case 'xxs': {
      return [
        iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2',
        'h-3 w-3',
      ];
    }
    case 'xs': {
      return [
        iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2',
        'h-5 w-5',
      ];
    }
    case 'sm': {
      return [
        iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2',
        'h-6 w-6',
      ];
    }
    case 'md': {
      return [
        iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2',
        'h-6 w-6',
      ];
    }
    case 'lg': {
      return [
        iconPosition === 'right' ? 'ml-3 -mr-1' : '-ml-1 mr-3',
        'h-6 w-6',
      ];
    }
    case 'xl': {
      return [
        iconPosition === 'right' ? 'ml-3 -mr-1' : '-ml-1 mr-3',
        'h-6 w-6',
      ];
    }
    default: {
      return [
        iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2',
        'h-6 w-6',
      ];
    }
  }
}

export function buttonVariant(variant?: ButtonVariants) {
  switch (variant) {
    case 'primary': {
      return 'text-neutrals-0 border-transparent bg-brand-main-500 hover:bg-brand-main-600 focus:ring-brand-main-500';
    }
    case 'secondary': {
      return 'border-brand-main-500 text-brand-main-500 hover:border-brand-main-600 hover:text-brand-main-600 focus:outline-none';
    }
    case 'subtle': {
      return 'border-brand-main-100 text-brand-main-500 hover:border-brand-main-200 hover:text-brand-main-600 focus:ring-brand-main-500';
    }
    case 'tertiary': {
      return 'text-brand-main-500 hover:text-brand-main-600 border-transparent';
    }
    default: {
      return 'text-neutrals-0 border-transparent bg-brand-main-500 hover:bg-brand-main-600 focus:ring-brand-main-500';
    }
  }
}

export function renderButtonIcon({
  icon,
  size,
  additionalClasses,
  iconPosition = 'left',
}: {
  icon?: ButtonProps['icon'];
  size?: ButtonSizes;
  additionalClasses?: string;
  iconPosition?: ButtonIconPositions;
}) {
  if (icon) {
    return createElement(icon, {
      className: clsx(buttonIconClasses(size, iconPosition), additionalClasses),
      'aria-hidden': true,
      fill: 'currentColor',
    });
  }

  return null;
}
