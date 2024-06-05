import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t('heroTitle')}</h1>
          <p className="py-6">{t('heroSubtitle')}</p>
          <button className="btn btn-primary">{t('heroButton')}</button>
        </div>
      </div>
    </div>
  );
}
