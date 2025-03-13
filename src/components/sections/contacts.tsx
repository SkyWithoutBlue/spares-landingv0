'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ContactsProps {
  className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <section id="contacts" className={cn('w-full bg-white text-black', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Карта */}
          <div className="w-full lg:w-2/3">
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=113.504698%2C52.030575&mode=poi&poi%5Bpoint%5D=113.504695%2C52.030539&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1085966603&z=16.8"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%' }}
              />
            </div>
          </div>

          {/* Контактная информация */}
          <div className="w-full lg:w-1/3 text-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="uppercase mb-2">АДРЕС:</h3>
                <p className="font-roboto-condensed">
                  ZAHLINICKA 1325,<br />
                  768 24 HULIN, CESKA REPUBLIKA
                </p>
              </div>

              <div>
                <h3 className="uppercase mb-2">НОМЕР ТЕЛЕФОНА:</h3>
                <Link
                  href="tel:+420571850123"
                  className="font-roboto-condensed hover:opacity-70 transition-opacity"
                >
                  +420 571 850 123
                </Link>
              </div>

              <div>
                <h3 className="uppercase mb-2">EMAIL:</h3>
                <Link
                  href="mailto:INFO@GACZ.CZ"
                  className="underline font-roboto-condensed hover:opacity-70 transition-opacity"
                >
                  INFO@GACZ.CZ
                </Link>
              </div>

              <div>
                <h3 className="uppercase mb-4">НАПИСАТЬ В ТЕЛЕГРАМ ИЛИ WHATS APP</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="lg:px-16 px-8 py-3 border-2 rounded-[7px] border-black uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    TELEGRAM
                  </Link>
                  <Link
                    href="#"
                    className="lg:px-16 px-8 py-3 border-2 border-black rounded-[7px] uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    WHATS APP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
