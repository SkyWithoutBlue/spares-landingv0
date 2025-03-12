import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Products } from '@/components/sections/products';
import { Partners } from '@/components/sections/partners';
import { Contacts } from '@/components/sections/contacts';
import { ContactForm } from '@/components/sections/contact-form';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Partners />
      <Contacts />
      <ContactForm />
    </main>
  );
}
