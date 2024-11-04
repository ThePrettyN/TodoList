import { Metadata } from 'next';
import RecoilContextProvider from './provider/RecoilContextProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'This is an app to manage tasks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  );
}
