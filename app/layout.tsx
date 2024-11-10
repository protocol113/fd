import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FliteDek - The Future of Competitive Motorsports',
  description: "Join the pioneering community that's shaping the FPV drone racing industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body> {/* Albert Sans will apply as the body font */}
    </html>
  );
}