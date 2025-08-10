// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-auto text-center">
      <p>
        © {new Date().getFullYear()} MySite. All rights reserved.{" "}
        <Link href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>
      </p>
    </footer>
  );
}
