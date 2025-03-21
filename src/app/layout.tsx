import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
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
  return (
    <html lang="en">
      <body className={robotoCondensed.variable}>{children}</body>
    </html>
  );
}
