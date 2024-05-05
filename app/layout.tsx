import '@radix-ui/themes/styles.css';
import './theme-config.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import NavBar from './NavBar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Problem Pro',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme accentColor='iris' radius='large'>
          <NavBar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
