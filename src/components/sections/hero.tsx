'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { BurgerMenu } from '@/components/ui/burger-menu';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/constants/animations';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { scrollY } = useScroll();

  const words = ["ЦЕНА", "КАЧЕСТВО", "СКОРОСТЬ"];

  const switchWord = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(switchWord, 3000);
    return () => clearInterval(interval);
  }, [switchWord]);

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0.2]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState({}, '', `#${sectionId}`);
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <section className={cn('w-full h-screen bg-black text-white relative overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          willChange: 'transform'
        }}
      >
        <motion.div style={{ opacity }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </motion.div>

      <div className="relative h-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col">
        <header className="py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={200}
                height={150}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {[
                { href: '#about', text: 'О нас' },
                { href: '#products', text: 'Продукция' },
                { href: '#partners', text: 'Партнеры' },
                { href: '#contacts', text: 'Контакты' },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium relative group"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.text}
                  <span className="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[#014B9F] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.a>
              ))}
              <motion.a
                href="#contact-form"
                onClick={(e) => scrollToSection(e, 'contact-form')}
                className="text-[20px] xl:text-[32px] leading-none tracking-[0] uppercase font-medium px-4 xl:px-6 py-2 border-2 border-white rounded-[4px] hover:bg-white hover:text-black transition-all duration-300]"
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
        </header>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-40 lg:hidden"
            >
              <nav className="h-full flex flex-col items-center justify-center">
                <motion.div
                  className="flex flex-col items-center gap-8"
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {[
                    { href: '#about', text: 'О нас' },
                    { href: '#products', text: 'Продукция' },
                    { href: '#partners', text: 'Партнеры' },
                    { href: '#contacts', text: 'Контакты' },
                    { href: '#contact-form', text: 'Связаться', isButton: true }
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href.slice(1))}
                      className={cn(
                        "text-[24px] sm:text-[32px] leading-none tracking-[0] uppercase font-medium",
                        item.isButton
                          ? "px-6 py-2 border-2 border-white rounded-[4px] hover:bg-white hover:text-black transition-colors"
                          : "hover:opacity-70 transition-opacity"
                      )}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-grow flex flex-col justify-center">
          <div className="relative h-[60px] md:h-[80px] lg:h-[100px] mb-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full text-6xl md:text-8xl lg:text-9xl font-roboto-condensed font-bold uppercase"
              >
                {words[currentWordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.a
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            href="#products"
            onClick={(e) => scrollToSection(e, 'products')}
            className="absolute bottom-20 inline-flex px-[63px] py-[10px] border-[2px] border-white uppercase text-lg hover:bg-white hover:text-black transition-colors w-fit rounded-[4px] md:text-3xl lg:text-[40px]"
          >
            Узнать больше
          </motion.a>
        </div>
      </div>
    </section>
  );
};
