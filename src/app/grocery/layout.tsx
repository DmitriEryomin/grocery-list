import {Roboto} from 'next/font/google';

const inter = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Groceries',
  description: 'Groceries app',
};

export default function GroceryLayout({children}: {children: React.ReactNode}) {
  return <section className={inter.className}>{children}</section>;
}
