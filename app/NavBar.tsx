import Link from 'next/link';
import React from 'react';
import { IoBug } from 'react-icons/io5';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Problems', href: '/problems' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <IoBug />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
