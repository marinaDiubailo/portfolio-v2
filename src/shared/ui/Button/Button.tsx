<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>;

import type {
  ElementType,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';

import { forwardRef } from 'react';

import { clsx } from 'clsx';

import s from './Button.module.scss';

type AsPolymorphProp<T extends ElementType> = {
  as?: T;
};

type PolymorphProps<
  T extends ElementType,
  ElementProps = {},
> = AsPolymorphProp<T> &
  ElementProps &
  Omit<ComponentPropsWithoutRef<T>, keyof (ElementProps & AsPolymorphProp<T>)>;

type PolymorphRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

type PolymorphPropRef<T extends ElementType> = { ref?: PolymorphRef<T> };

type PolymorphPropsWithRef<
  T extends ElementType,
  ElementProps = {},
> = PolymorphProps<T, ElementProps> & PolymorphPropRef<T>;

type ButtonVariant = 'primary' | 'text';

type ElementProps = {
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

type TagComponent = <T extends ElementType = 'button'>(
  props: PolymorphPropsWithRef<T, ElementProps>,
) => ReactNode;

const ButtonPolymorph: TagComponent = forwardRef(
  <T extends ElementType = 'button'>(
    props: PolymorphPropsWithRef<T>,
    ref?: PolymorphRef<T>,
  ) => {
    const {
      as: Tag = 'button',
      children,
      className = '',
      fullWidth,
      variant = 'primary',
      ...rest
    } = props;

    const tagClassName = clsx(
      s.button,
      s[variant],
      fullWidth && s.fullWidth,
      className,
    );

    return (
      <Tag className={tagClassName} ref={ref} {...rest}>
        <span className={s.offset} aria-hidden />
        <span className={s.wrapper}>{children}</span>
      </Tag>
    );
  },
);
export const Button = ButtonPolymorph;
