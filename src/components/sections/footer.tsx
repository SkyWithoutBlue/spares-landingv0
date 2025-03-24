'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className={cn('w-full bg-white text-black relative', className)}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="border-t-3 border-black py-6 sm:py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-black.svg"
                  alt="logo"
                  width={160}
                  height={120}
                  className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                  priority
                />
              </Link>
              <p className="mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600">
                ALL RIGHT RESERVED, 2025
              </p>
            </div>

            <nav className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-x-6 gap-y-4 sm:gap-8 md:gap-12">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-[18px] sm:text-[20px] md:text-[24px] leading-none tracking-[0] uppercase font-medium hover:text-[#014B9F] transition-colors duration-200 text-center whitespace-nowrap"
              >
                О нас
              </a>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="text-[18px] sm:text-[20px] md:text-[24px] leading-none tracking-[0] uppercase font-medium hover:text-[#014B9F] transition-colors duration-200 text-center whitespace-nowrap"
              >
                Продукция
              </a>
              <a
                href="#partners"
                onClick={(e) => scrollToSection(e, 'partners')}
                className="text-[18px] sm:text-[20px] md:text-[24px] leading-none tracking-[0] uppercase font-medium hover:text-[#014B9F] transition-colors duration-200 text-center whitespace-nowrap"
              >
                Партнеры
              </a>
              <a
                href="#contacts"
                onClick={(e) => scrollToSection(e, 'contacts')}
                className="text-[18px] sm:text-[20px] md:text-[24px] leading-none tracking-[0] uppercase font-medium hover:text-[#014B9F] transition-colors duration-200 text-center whitespace-nowrap"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
