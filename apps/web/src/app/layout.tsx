import './globals.css';
import { fontDisplay, fontBody } from './fonts';
import { Providers } from './providers';

export const metadata = {
  title: 'Xuma Restaurant POS',
  description: 'Frontend for Xuma Restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
