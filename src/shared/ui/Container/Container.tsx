import s from './Container.module.scss';
import type { ComponentProps, FC } from 'react';

export const Container: FC<ComponentProps<'div'>> = ({
  children,
  ...rest
}: ComponentProps<'div'>) => {
  return (
    <div className={s.root} {...rest}>
      {children}
    </div>
  );
};
