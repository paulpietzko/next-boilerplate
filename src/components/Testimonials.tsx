import { useTranslations } from 'next-intl';
import React from 'react';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">{t('testimonialsTitle')}</h2>
      <p className="mb-4">{t('testimonialsContent')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card bg-base-200 shadow-md p-4">
          <p>&quot;This product is amazing! Highly recommend.&quot;</p>
          <p className="text-right">- Customer 1</p>
        </div>
        <div className="card bg-base-200 shadow-md p-4">
          <p>&quot;Excellent service and great quality.&quot;</p>
          <p className="text-right">- Customer 2</p>
        </div>
      </div>
    </div>
  );
}
