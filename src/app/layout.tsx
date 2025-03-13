'use client';

import { useEffect } from 'react';
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto-condensed',
});

export const metadata: Metadata = {
  title: "Автозапчасти оптом",
  description: "Детали для ремонта автомобилей оптом",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Сброс позиции скролла при загрузке страницы
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <html lang="ru" className={`${inter.className} ${robotoCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
