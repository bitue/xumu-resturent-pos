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
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
