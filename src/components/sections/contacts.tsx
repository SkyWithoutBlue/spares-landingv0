'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Mail, Phone, Send, MessageCircle } from 'lucide-react';

interface ContactsProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Contacts = ({ className }: ContactsProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contacts" className={cn('w-full relative overflow-hidden bg-gradient-to-b from-[#014B9F] to-[#003366]', className)}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-white transform -skew-y-3 translate-y-1/2" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 py-32 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col xl:flex-row justify-between gap-8 md:gap-12 lg:gap-16 p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="xl:w-1/2">
            <motion.h2
              {...fadeInLeft}
              className="text-[32px] md:text-[48px] lg:text-[60px] font-bold mb-8"
            >
              Свяжитесь с нами
            </motion.h2>
            <p className="text-lg mb-12 text-gray-200">
              Мы всегда на связи и готовы ответить на ваши вопросы
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold mb-4">Представительство в России:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">

                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <Link href="mailto:0710innolink@gmail.com" className="hover:underline">
                      0710innolink@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <Link href="tel:+79144832989" className="hover:underline">
                      +7 914 483 29 89
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <h3 className="text-xl font-semibold mb-4">Китай</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Шэньчжэнь</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <Link href="mailto:dk0122innolink@gmail.com" className="hover:underline">
                      dk0122innolink@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <Link href="tel:+8615618325803" className="hover:underline">
                      +86 15618325803
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              <Link
                href="https://t.me/your_telegram"
                target="_blank"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.89.03-.25.37-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z"/>
                </svg>
                Telegram
              </Link>
              <Link
                href="https://wa.me/your_whatsapp"
                target="_blank"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                </svg>
                WhatsApp
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="xl:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Отправьте сообщение</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-white/20"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#014B9F] py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Отправить
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
