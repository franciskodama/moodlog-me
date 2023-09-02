import { Loading } from '@/ui/Loading';
import { cn } from '@/lib/cn';
import { CheckIcon } from 'lucide-react';

import { ComponentProps, Ref, forwardRef } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'link';

export type ButtonProps = {
  variant?: ButtonVariant;
  small?: boolean;
  square?: boolean;
  loading?: boolean;
  success?: boolean;
} & ComponentProps<'button'>;

export const Button = forwardRef(ButtonWithRef);

export function ButtonWithRef(
  {
    variant = 'primary',
    small = false,
    square = false,
    loading = false,
    success = false,
    children,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        getButtonClassNames(variant, small, square),
        props?.className
      )}
    >
      {loading && <Loading />}
      {success && <CheckIcon />}
      {square && loading ? null : children}
    </button>
  );
}

export function getButtonClassNames(
  variant: ButtonVariant,
  small: boolean,
  square: boolean
) {
  return [
    'flex flex-row items-center justify-center gap-1 cursor-pointer',
    'whitespace-nowrap text-center font-semibold tracking-[0.8px]',
    'focus:outline-none transition-all',
    'enabled:active:scale-95 enabled:active:opacity-80',
    'disabled:opacity-50',
    {
      'text-base leading-tight border-2 h-8 px-[22px]': small,
      'h-8 w-8 px-0 py-0': small && square,
    },
    {
      'text-xl leading-tight border-2 h-12 px-[22px]': !small,
      'h-12 w-12 px-0 py-0': !small && square,
    },
    variant === 'primary' && [
      'bg-primary border-primary text-white',
      'enabled:hover:bg-secondary enabled:hover:border-secondary',
    ],
    variant === 'secondary' && [
      'bg-transparent border-primary text-primary',
      'enabled:hover:border-secondary enabled:hover:text-secondary',
    ],
    variant === 'tertiary' && [
      'bg-transparent border-transparent text-primary underline',
      'enabled:hover:text-secondary',
    ],
    variant === 'ghost' && [
      'bg-transparent border-transparent text-primary',
      'enabled:hover:bg-secondary/40',
    ],
  ];
}
