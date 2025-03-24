'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import Link from 'next/link';

interface ContactsProps {
  className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <section id="contacts" className={cn('w-full relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[#014B9F]" />
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 translate-y-1/2" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-32 text-white">
        <div className="flex flex-col xl:flex-row justify-between gap-8 md:gap-12 lg:gap-16 p-4 sm:p-6 md:p-8 lg:p-12">
          <motion.h2
            {...fadeInLeft}
            className="text-[32px] md:text-[48px] lg:text-[60px] font-bold md:pr-12 lg:pr-16"
          >
            КОНТАКТЫ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-between flex-1">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                  ПРЕДСТАВИТЕЛЬСТВО В РОССИИ:
                </h3>
                <div className="space-y-3">
                  <p className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-[16px] sm:text-[18px] md:text-[20px]">
                    <span className="min-w-[80px] md:min-w-[100px]">E-MAIL:</span>
                    <Link href="mailto:0710INNOLINK@GMAIL.COM" className="hover:underline break-all md:break-normal">
                      0710INNOLINK@GMAIL.COM
                    </Link>
                  </p>
                  <p className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-[16px] sm:text-[18px] md:text-[20px]">
                    <span className="min-w-[80px] md:min-w-[100px]">TEL:</span>
                    <Link href="tel:+79144832989" className="hover:underline">
                      +7 914 483 29 89
                    </Link>
                  </p>
                  <p>
                    <Link href="https://WWW.INNO-LINK.RU" target="_blank" className="hover:underline text-[16px] sm:text-[18px] md:text-[20px] break-all md:break-normal">
                      WWW.INNO-LINK.RU
                    </Link>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                  НАПИСАТЬ В ТЕЛЕГРАМ ИЛИ WHATS APP
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 text-[16px] sm:text-[18px] md:text-[20px]">
                  <Link
                    href="https://t.me/your_telegram"
                    target="_blank"
                    className="text-center px-4 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 border-2 border-white rounded hover:bg-white hover:text-[#014B9F] transition-colors"
                  >
                    TELEGRAM
                  </Link>
                  <Link
                    href="https://wa.me/your_whatsapp"
                    target="_blank"
                    className="text-center px-4 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 border-2 border-white rounded hover:bg-white hover:text-[#014B9F] transition-colors text-nowrap"
                  >
                    WHATS APP
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                ОФИС В КИТАЕ:
              </h3>
              <div className="space-y-3">
                <p className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-[16px] sm:text-[18px] md:text-[20px]">
                  <span className="min-w-[80px] md:min-w-[100px]">E-MAIL:</span>
                  <Link href="mailto:DK0122INNOLINK@GMAIL.COM" className="hover:underline break-all md:break-normal">
                    DK0122INNOLINK@GMAIL.COM
                  </Link>
                </p>
                <p className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-[16px] sm:text-[18px] md:text-[20px]">
                  <span className="min-w-[80px] md:min-w-[100px]">TEL:</span>
                  <Link href="tel:+8615618325803" className="hover:underline">
                    +86 15618325803
                  </Link>
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px]">
                  4008 JINTIAN ROAD FUTIAN DISTRICT,<br />
                  SHENZHEN,GUANGDONG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
