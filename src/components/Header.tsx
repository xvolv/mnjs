import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white flex justify-between items-center p-4 px-8">
      <h1 className="text-xl font-bold">
        <Link href="/" className="hover:underline">
          MySite
        </Link>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
