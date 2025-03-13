'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact-form" className={cn('w-full bg-white text-black', className)}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Форма */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[60px] font-roboto-condensed uppercase mb-8">
              ЕСТЬ ВОПРОС? НАПИШИ НАМ
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block uppercase mb-2 text-3xl">ИМЯ</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-black p-3 border-[2px] rounded-[6px]"
                  required
                />
              </div>
              <div>
                <label className="block uppercase mb-2 text-3xl">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-black p-3 border-[2px] rounded-[6px]"
                  required
                />
              </div>
              <div>
                <label className="block uppercase mb-2 text-3xl">ТЕМА ВОПРОСА</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border-black p-3 border-[2px] rounded-[6px]"
                  required
                />
              </div>
              <div>
                <label className="block uppercase mb-2 text-3xl ">СООБЩЕНИЕ</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-black p-3 min-h-[120px] border-[2px] rounded-[6px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full border-[3px] rounded-[7px] border-black py-3 uppercase hover:bg-black hover:text-white transition-colors cursor-pointer text-3xl"
              >
                ОТПРАВИТЬ
              </button>
            </form>
          </div>

          {/* Изображение */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/contact-form.jpg"
                alt="Contact form"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
