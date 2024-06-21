'use client';
import clsx from 'clsx';
import type { ReactNode, ComponentProps, FC } from 'react';
import s from './AuroraBackground.module.scss';

type Props = {
  children: ReactNode;
  showRadialGradient?: boolean;
} & ComponentProps<'div'>;

export const AuroraBackground: FC<Props> = (props) => {
  const { className, children, showRadialGradient = true, ...rest } = props;
  return (
    <div className={clsx(s.root, className)} {...rest}>
      <div className={s.wrapper}>
        <div className={clsx(s.gradient, showRadialGradient && s.radial)}></div>
      </div>
      {children}
    </div>
  );
};
