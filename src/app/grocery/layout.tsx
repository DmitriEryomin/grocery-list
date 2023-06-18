import Providers from './providers';

export const metadata = {
  title: 'Groceries',
  description: 'Groceries app',
};

export default function GroceryLayout({children}: {children: React.ReactNode}) {
  return <Providers>{children}</Providers>;
}
