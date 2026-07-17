import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PT Manis Manja Grup — Solusi Pembiayaan Alat Berat",
    template: "%s | PT Manis Manja Grup",
  },
  description: "PT Manis Manja Grup adalah perusahaan pembiayaan alat berat terpercaya di Indonesia. Proses cepat, bunga kompetitif, tenor fleksibel.",
  keywords: ["pembiayaan alat berat", "kredit alat berat", "leasing alat berat", "refinancing alat berat", "PT Manis Manja Grup"],
  authors: [{ name: "PT Manis Manja Grup" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://company-profile-xi-red.vercel.app",
    siteName: "PT Manis Manja Grup",
    title: "PT Manis Manja Grup — Solusi Pembiayaan Alat Berat",
    description: "Pembiayaan alat berat terpercaya di Indonesia. Proses cepat, bunga kompetitif, tenor fleksibel hingga 5 tahun.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Manis Manja Grup — Solusi Pembiayaan Alat Berat",
    description: "Pembiayaan alat berat terpercaya di Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
