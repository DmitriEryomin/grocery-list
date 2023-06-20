import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>
        Grocery List <Link href="grocery">Application</Link>
      </h1>
      <h2>Technical task for Gojilabs</h2>
      <h3>Used technologies</h3>
      <ul>
        <li>Typescript</li>
        <li>Docker</li>
        <li>NextJS</li>
        <li>MongoDB</li>
        <li>Material UI</li>
        <li>React Query</li>
      </ul>
    </main>
  );
}
