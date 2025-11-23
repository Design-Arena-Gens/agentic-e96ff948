import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Retrato dorado ? Est?tica moderna y elegante',
  description:
    'Retrato hiperrealista en golden hour: mujer joven con estilo moderno, segura y sofisticada.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
