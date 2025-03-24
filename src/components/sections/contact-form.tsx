'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  return (
    <section id="contact-form" className={cn('w-full bg-white', className)}>
      <motion.h2
        {...fadeInLeft}
        className="text-[32px] md:text-[80px] font-bold bg-[url('/images/label-bg.png')] text-center bg-cover text-white h-[270px] flex items-center justify-center mb-16"
      >
        ЗАДАТЬ ВОПРОС
      </motion.h2>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 pb-16">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <div className="space-y-2 ">
            <label className="block text-black font-bold">ИМЯ</label>
            <input
              type="text"
              className="w-full h-12 border-[2px] border-[#014B9F] rounded-[6px] bg-transparent px-4"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-black font-bold">ЭЛЕКТРОННАЯ ПОЧТА</label>
            <input
              type="email"
              className="w-full h-12 border-[2px] border-[#014B9F] rounded-[6px] bg-transparent px-4"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-black font-bold">ТЕМА ВОПРОСА</label>
            <input
              type="text"
              className="w-full h-12 border-[#014B9F] rounded-[6px] border-[2px] bg-transparent px-4"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black font-bold ">СООБЩЕНИЕ</label>
            <textarea
              className="w-full h-12 border-[2px] border-[#014B9F] content-center rounded-[6px] bg-transparent px-4 resize-none"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-1 bg-[#014B9F] text-white font-bold py-4 rounded hover:bg-[#005291] transition-colors cursor-pointer"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </button>

        </form>
      </div>
    </section>
  );
};
