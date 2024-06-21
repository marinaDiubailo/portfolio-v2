import clsx from 'clsx';
import type { ReactNode, ComponentProps, FC } from 'react';
import gridBg from '@/shared/assets/icons/grid.svg';
import s from './GridBackground.module.scss';

type Props = {
  children: ReactNode;
} & ComponentProps<'div'>;

export const GridBackground: FC<Props> = ({ children, className, ...rest }) => {
  const style = {
    backgroundImage: `url(${gridBg.src})`,
  };

  return (
    <div className={clsx(s.root, className)} {...rest} style={style}>
      {children}
    </div>
  );
};
