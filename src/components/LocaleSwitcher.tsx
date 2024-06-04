'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function LocaleSwitcher() {
  const [lng, setLng] = useState('en');

  useEffect(() => {
    const locale = Cookies.get('NEXT_LOCALE');
    if (locale) {
      setLng(locale);
    }
  }, []);

  const pathname = usePathname() || '';
  const filteredPath = pathname.split('/').slice(2).join('/');

  return (
    <details>
      <summary>
        <span>{lng.toUpperCase()}</span>
      </summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        <li>
          <Link href={`/en/${filteredPath}`} onClick={() => setLng('en')}>
            English
          </Link>
        </li>
        <li>
          <Link href={`/de/${filteredPath}`} onClick={() => setLng('de')}>
            Deutsch
          </Link>
        </li>
        <li>
          <Link href={`/jn/${filteredPath}`} onClick={() => setLng('jn')}>
            日本語
          </Link>
        </li>
      </ul>
    </details>
  );
}
