import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">{t('contactFormTitle')}</h2>
      <p className="mb-4">{t('contactFormSubtitle')}</p>
      <form className="bg-base-200 p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            {t('contactFormName')}
          </label>
          <input className="w-full p-2" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            {t('contactFormEmail')}
          </label>
          <input className="w-full p-2" type="email" id="email" name="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            {t('contactFormMessage')}
          </label>
          <textarea
            className="w-full p-2"
            id="message"
            name="message"
            rows={4}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          {t('contactFormSubmit')}
        </button>
      </form>
    </div>
  );
}
