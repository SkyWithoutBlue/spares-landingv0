'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/constants/animations';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Send, MessageCircle, Globe } from 'lucide-react';

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

const TELEGRAM_BOT_TOKEN = '8081103752:AAEsowXrEw39bM2uwOPr25OoWmBXnm1WX7M';
const TELEGRAM_CHAT_ID = '492759728';
const COOLDOWN_TIME = 60; // Время ожидания между отправками в секундах
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

export const Contacts = ({ className }: ContactsProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cooldown, setCooldown] = useState(0);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение';
    } else if (formData.message.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Сообщение должно содержать минимум ${MIN_MESSAGE_LENGTH} символов`;
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Сообщение не должно превышать ${MAX_MESSAGE_LENGTH} символов`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
Новое сообщение с сайта:
Имя: ${data.name}
Email: ${data.email}
Сообщение: ${data.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return true;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cooldown > 0) {
      setSubmitStatus('error');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendToTelegram(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCooldown(COOLDOWN_TIME);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                    <MapPin className="w-5 h-5" />
                    <span>Москва</span>
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
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5" />
                    <Link href="https://www.inno-link.ru" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      www.inno-link.ru
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
                    className={cn(
                      "w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20",
                      errors.name ? "border-red-400" : "border-white/10"
                    )}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20",
                      errors.email ? "border-red-400" : "border-white/10"
                    )}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={cn(
                      "w-full bg-white/5 border rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-white/20",
                      errors.message ? "border-red-400" : "border-white/10"
                    )}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    (isSubmitting || cooldown > 0)
                      ? "bg-white/50 cursor-not-allowed"
                      : "bg-white text-[#014B9F] hover:bg-gray-100"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#014B9F] border-t-transparent rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : cooldown > 0 ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#014B9F] border-t-transparent rounded-full animate-spin" />
                      Подождите {cooldown} сек...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Сообщение успешно отправлено!</p>
                )}
                {submitStatus === 'error' && cooldown === 0 && (
                  <p className="text-red-400 text-center">Произошла ошибка при отправке. Попробуйте позже.</p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
