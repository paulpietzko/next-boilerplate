import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';
import { locales } from '../lib/locales';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|jn)/:path*'],
};
