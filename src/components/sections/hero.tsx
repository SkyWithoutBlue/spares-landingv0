'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BurgerMenu } from '@/components/ui/burger-menu';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <section className={cn('w-full h-screen bg-black text-white relative', className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Car parts"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="relative h-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[24px] sm:text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium">
              Логотип
            </Link>

            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                О нас
              </a>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                Продукция
              </a>
              <a
                href="#partners"
                onClick={(e) => scrollToSection(e, 'partners')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                Партнеры
              </a>
              <a
                href="#contacts"
                onClick={(e) => scrollToSection(e, 'contacts')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                Контакты
              </a>
              <a
                href="#contact-form"
                onClick={(e) => scrollToSection(e, 'contact-form')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium px-4 xl:px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                Связаться
              </a>
            </nav>

            <div className="lg:hidden">
              <BurgerMenu
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>

          <div
            className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform duration-300 lg:hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className="h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-8">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  О нас
                </a>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  Продукция
                </a>
                <a
                  href="#partners"
                  onClick={(e) => scrollToSection(e, 'partners')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  Партнеры
                </a>
                <a
                  href="#contacts"
                  onClick={(e) => scrollToSection(e, 'contacts')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  Контакты
                </a>
                <a
                  href="#contact-form"
                  onClick={(e) => scrollToSection(e, 'contact-form')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors"
                >
                  Связаться
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-roboto-condensed uppercase max-w-[800px] leading-tight mb-8">
            ДЕТАЛИ ДЛЯ РЕМОНТА АВТОМОБИЛЕЙ ОПТОМ
          </h1>
          <a
            href="#products"
            onClick={(e) => scrollToSection(e, 'products')}
            className="inline-flex px-8 py-4 border-2 border-white uppercase text-lg hover:bg-white hover:text-black transition-colors w-fit"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};
