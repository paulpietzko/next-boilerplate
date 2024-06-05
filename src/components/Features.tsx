import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('Features');

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">{t('featuresTitle')}</h2>
      <p className="mb-4">{t('featuresContent')}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-200 shadow-md p-4">
          <h3 className="text-xl font-semibold">Feature 1</h3>
          <p>Description of feature 1.</p>
        </div>
        <div className="card bg-base-200 shadow-md p-4">
          <h3 className="text-xl font-semibold">Feature 2</h3>
          <p>Description of feature 2.</p>
        </div>
        <div className="card bg-base-200 shadow-md p-4">
          <h3 className="text-xl font-semibold">Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
      </div>
    </div>
  );
}
