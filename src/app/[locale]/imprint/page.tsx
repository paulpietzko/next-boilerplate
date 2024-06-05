import { useTranslations } from 'next-intl';

export default function Imprint() {
  const t = useTranslations('Imprint');

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('imprintTitle')}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {t('companyDetailsTitle')}
        </h2>
        <p className="whitespace-pre-line bg-gray-100 p-4 rounded-md shadow-md">
          {t('companyDetailsContent')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {t('commercialRegisterTitle')}
        </h2>
        <p className="whitespace-pre-line bg-gray-100 p-4 rounded-md shadow-md">
          {t('commercialRegisterContent')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('vatNumberTitle')}</h2>
        <p className="whitespace-pre-line bg-gray-100 p-4 rounded-md shadow-md">
          {t('vatNumberContent')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {t('disputeResolutionTitle')}
        </h2>
        <p className="whitespace-pre-line bg-gray-100 p-4 rounded-md shadow-md">
          {t('disputeResolutionContent')}
        </p>
      </section>
    </div>
  );
}
