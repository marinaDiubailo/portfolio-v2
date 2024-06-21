import { Hero } from '@/sections/hero';
import s from './HomePage.module.scss';
import { Container, ScrollArea } from '@/shared/ui';

export const HomePage = () => {
  return (
    <main className={s.main}>
      <ScrollArea>
        <Hero />
        <section>
          <Container>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis nobis laudantium. Ex perferendis reiciendis suscipit vitae
              rem numquam doloribus quos eos quo excepturi vel totam quidem
              asperiores ad omnis neque ea tempora voluptas, et sunt odio
              explicabo nisi perspiciatis? Natus modi labore nam autem, est
              incidunt voluptatibus repellat exercitationem?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis nobis laudantium. Ex perferendis reiciendis suscipit vitae
              rem numquam doloribus quos eos quo excepturi vel totam quidem
              asperiores ad omnis neque ea tempora voluptas, et sunt odio
              explicabo nisi perspiciatis? Natus modi labore nam autem, est
              incidunt voluptatibus repellat exercitationem?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis nobis laudantium. Ex perferendis reiciendis suscipit vitae
              rem numquam doloribus quos eos quo excepturi vel totam quidem
              asperiores ad omnis neque ea tempora voluptas, et sunt odio
              explicabo nisi perspiciatis? Natus modi labore nam autem, est
              incidunt voluptatibus repellat exercitationem?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis nobis laudantium. Ex perferendis reiciendis suscipit vitae
              rem numquam doloribus quos eos quo excepturi vel totam quidem
              asperiores ad omnis neque ea tempora voluptas, et sunt odio
              explicabo nisi perspiciatis? Natus modi labore nam autem, est
              incidunt voluptatibus repellat exercitationem?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              debitis nobis laudantium. Ex perferendis reiciendis suscipit vitae
              rem numquam doloribus quos eos quo excepturi vel totam quidem
              asperiores ad omnis neque ea tempora voluptas, et sunt odio
              explicabo nisi perspiciatis? Natus modi labore nam autem, est
              incidunt voluptatibus repellat exercitationem?
            </div>
          </Container>
        </section>
      </ScrollArea>
    </main>
  );
};
