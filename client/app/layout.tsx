import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from './NavigationBar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'RecipeBook',
  description: 'A place for all your cooking recipes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-20`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
