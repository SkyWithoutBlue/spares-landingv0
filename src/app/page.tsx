import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ContactForm } from '@/components/sections/contact-form';
import { CountriesPartners } from '@/components/sections/countries-partners';
import { Research } from '@/components/sections/research';
import { Products } from '@/components/sections/products';
import { Partners } from '@/components/sections/partners';
import { Contacts } from '@/components/sections/contacts';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CountriesPartners />
      <Research />
      <Products/>
      <Partners />
      <Contacts />
      <Footer />
    </main>
  );
}
