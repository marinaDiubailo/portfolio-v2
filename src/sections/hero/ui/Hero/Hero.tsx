import { AuroraBackground, Button, Container } from '@/shared/ui';
import s from './Hero.module.scss';
import { TextGenerateEffect } from '../TextGenerateEffect/TextGenerateEffect';
import { ArrowUpRightIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <AuroraBackground>
      <section className={s.root}>
        <Container>
          <div className={s.wrapper}>
            <TextGenerateEffect words="Creating Interactive and Robust Interfaces for Seamless User Experiences" />
            <div className={s.greetings}>
              Hello, I&apos;m Marina,{' '}
              <h1 className={s.title}>a Front-End Developer </h1> based in
              Belarus
            </div>
            <Button className={s.button}>
              Download CV <ArrowUpRightIcon />
            </Button>
          </div>
        </Container>
      </section>
    </AuroraBackground>
  );
};
