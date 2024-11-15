import './globals.css';
import type { Metadata } from 'next';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';



export const metadata: Metadata = {
  title: 'ICMI 2024 - International Conference on Multimodal Interaction',
  description: 'Join us at IIT Jodhpur for ICMI 2024, the premier international conference on multimodal interaction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <div className=''>
        <Navbar />

        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}