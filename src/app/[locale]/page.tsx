import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Indedx() {
  const t = useTranslations('Index');
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}
