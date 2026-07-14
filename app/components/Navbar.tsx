import Link from "next/link";

export default function Navbar({ siteName }: { siteName?: string }) {
  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-blue-900 text-lg">
        {siteName ?? "Company Profile"}
      </Link>
      <div className="flex gap-6 text-sm text-gray-600">
        <Link href="/">Beranda</Link>
        <Link href="/#layanan">Layanan</Link>
        <Link href="/kontak">Kontak</Link>
      </div>
    </nav>
  );
}