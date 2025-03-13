'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BurgerMenu } from '@/components/ui/burger-menu';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp } from '@/lib/constants/animations';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Создаем эффект параллакса для фона
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0.2]);

  useEffect(() => {
    // Сброс позиции скролла при загрузке страницы
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Обработка хэша в URL при загрузке
    const handleInitialScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    window.addEventListener('load', handleInitialScroll);
    return () => window.removeEventListener('load', handleInitialScroll);
  }, []);

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
      // Обновляем URL без перезагрузки страницы
      window.history.pushState({}, '', `#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <section className={cn('w-full h-screen bg-black text-white relative overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          willChange: 'transform'
        }}
      >
        <motion.div
          style={{ opacity }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Car parts"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjQ2UFdaSk9KR0v/2wBDAR4eHh0aHRgYHRpFOTQ5RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </motion.div>
      </motion.div>

      <div className="relative h-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[24px] sm:text-[28px] md:text-[32px] leading-none tracking-[0] uppercase font-medium">
              Логотип
            </Link>

            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              <motion.a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ willChange: 'transform' }}
              >
                О нас
              </motion.a>
              <motion.a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ willChange: 'transform' }}
              >
                Продукция
              </motion.a>
              <motion.a
                href="#partners"
                onClick={(e) => scrollToSection(e, 'partners')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ willChange: 'transform' }}
              >
                Партнеры
              </motion.a>
              <motion.a
                href="#contacts"
                onClick={(e) => scrollToSection(e, 'contacts')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ willChange: 'transform' }}
              >
                Контакты
              </motion.a>
              <motion.a
                href="#contact-form"
                onClick={(e) => scrollToSection(e, 'contact-form')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium px-4 xl:px-6 py-2 border-2 border-white rounded-[4px] hover:bg-white hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ willChange: 'transform' }}
              >
                Связаться
              </motion.a>
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
              <motion.div
                className="flex flex-col items-center gap-8"
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
              >
                <motion.a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: 'transform' }}
                >
                  О нас
                </motion.a>
                <motion.a
                  href="#products"
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: 'transform' }}
                >
                  Продукция
                </motion.a>
                <motion.a
                  href="#partners"
                  onClick={(e) => scrollToSection(e, 'partners')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: 'transform' }}
                >
                  Партнеры
                </motion.a>
                <motion.a
                  href="#contacts"
                  onClick={(e) => scrollToSection(e, 'contacts')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium hover:opacity-70 transition-opacity"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: 'transform' }}
                >
                  Контакты
                </motion.a>
                <motion.a
                  href="#contact-form"
                  onClick={(e) => scrollToSection(e, 'contact-form')}
                  className="text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium px-6 py-2 border-2 border-white rounded-[4px] hover:bg-white hover:text-black transition-colors"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: 'transform' }}
                >
                  Связаться
                </motion.a>
              </motion.div>
            </nav>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <motion.h1
            {...fadeInUp}
            className="text-[40px] md:text-[60px] lg:text-[100px] font-roboto-condensed uppercase max-w-[1200px] leading-tight mb-8"
          >
            ДЕТАЛИ ДЛЯ РЕМОНТА АВТОМОБИЛЕЙ ОПТОМ
          </motion.h1>
          <motion.a
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            href="#products"
            onClick={(e) => scrollToSection(e, 'products')}
            className="inline-flex px-[63px] py-[10px] border-[2px] border-white uppercase text-lg hover:bg-white hover:text-black transition-colors w-fit rounded-[4px] md:text-3xl lg:text-[40px]"
          >
            Узнать больше
          </motion.a>
        </div>
      </div>
    </section>
  );
};
