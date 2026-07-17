"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ siteName }: { siteName?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">{siteName?.charAt(0) ?? "C"}</span>
          </div>
          <span className="font-bold text-blue-900 text-lg">{siteName ?? "Company Profile"}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-900 transition-colors">Beranda</Link>
          <Link href="/tentang" className="hover:text-blue-900 transition-colors">Tentang</Link>
          <Link href="/#layanan" className="hover:text-blue-900 transition-colors">Layanan</Link>
          <Link href="/#blog" className="hover:text-blue-900 transition-colors">Blog</Link>
          <Link href="/kontak" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Hubungi kami
          </Link>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600 bg-white">
          <Link href="/" onClick={() => setOpen(false)}>Beranda</Link>
          <Link href="/tentang" onClick={() => setOpen(false)}>Tentang</Link>
          <Link href="/#layanan" onClick={() => setOpen(false)}>Layanan</Link>
          <Link href="/#blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/kontak" onClick={() => setOpen(false)} className="bg-blue-900 text-white px-4 py-2 rounded-lg text-center">
            Hubungi kami
          </Link>
        </div>
      )}
    </nav>
  );
}
