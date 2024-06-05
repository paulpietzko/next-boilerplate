import { useTranslations } from 'next-intl';
import { Link } from '../navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <div>
        <p>{t('footerText')}</p>
        <p>
          <Link href="/imprint">{t('imprintTitle')}</Link>
        </p>
      </div>
    </footer>
  );
}
