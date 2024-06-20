'use client';
import clsx from 'clsx';
import type { ReactNode, ComponentProps } from 'react';
import s from './AuroraBackground.module.scss';

type AuroraBackgroundProps = {
  children: ReactNode;
  showRadialGradient?: boolean;
} & ComponentProps<'div'>;

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div className={clsx(s.root, className)} {...props}>
      <div className={s.wrapper}>
        <div className={clsx(s.gradient, showRadialGradient && s.radial)}></div>
      </div>
      {children}
    </div>
  );
};
