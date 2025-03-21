import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ContactForm } from '@/components/sections/contact-form';
import { CountriesPartners } from '@/components/sections/countries-partners';
import { Research } from '@/components/sections/research';
import { Products } from '@/components/sections/products';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CountriesPartners />
      <Research />
      <Products/>
      <ContactForm />
    </main>
  );
}
