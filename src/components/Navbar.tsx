import LocaleSwitcher from '@/components/LocaleSwitcher';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">Boilerplate</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <LocaleSwitcher />
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
