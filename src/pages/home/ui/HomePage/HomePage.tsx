import { Hero } from '@/sections/hero';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <main className={s.main}>
      <Hero />
    </main>
  );
};
