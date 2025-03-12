import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { robotoCondensed } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={cn(robotoCondensed.className)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
