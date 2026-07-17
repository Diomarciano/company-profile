import { getSiteSettings, getTeam } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat PT Manis Manja Grup — perusahaan pembiayaan alat berat terpercaya yang berdiri sejak 2015 dan telah melayani 200+ klien di Indonesia.",
  openGraph: {
    title: "Tentang Kami | PT Manis Manja Grup",
    description: "Kenali lebih dekat PT Manis Manja Grup dan tim profesional kami.",
  },
};

export const revalidate = 30;

export default async function TentangPage() {
  const settings = await getSiteSettings();
  const team = await getTeam();

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-20 px-6 text-center">
        <span className="inline-block bg-blue-700/50 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">Tentang kami</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{settings?.siteName ?? "PT Manis Manja Grup"}</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">{settings?.tagline}</p>
      </section>

      {/* Tentang perusahaan */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Siapa kami</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Mitra pembiayaan alat berat terpercaya</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT Manis Manja Grup adalah perusahaan pembiayaan alat berat yang berdiri sejak 2015. Kami hadir untuk membantu para pelaku usaha di Indonesia mendapatkan akses pembiayaan alat berat yang mudah, cepat, dan terpercaya.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dengan pengalaman lebih dari 10 tahun dan jaringan yang luas, kami telah membantu lebih dari 200 klien dari berbagai sektor industri — mulai dari konstruksi, pertambangan, perkebunan, hingga logistik.
            </p>
            <Link href="/kontak" className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-block">
              Konsultasi gratis
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2015", label: "Tahun berdiri" },
              { value: "200+", label: "Klien dilayani" },
              { value: "10+", label: "Tahun pengalaman" },
              { value: "99%", label: "Tingkat kepuasan" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-blue-900 mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Arah perusahaan</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Visi & Misi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-2xl">🎯</div>
              <h3 className="text-xl font-bold mb-3">Visi</h3>
              <p className="text-blue-200 leading-relaxed">
                Menjadi perusahaan pembiayaan alat berat terdepan di Indonesia yang memberikan solusi finansial inovatif dan terpercaya bagi pelaku usaha di seluruh nusantara.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-2xl">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Memberikan solusi pembiayaan yang cepat dan mudah",
                  "Membangun kepercayaan melalui transparansi dan integritas",
                  "Mendukung pertumbuhan bisnis klien dengan layanan profesional",
                  "Terus berinovasi untuk memenuhi kebutuhan industri",
                ].map((m) => (
                  <li key={m} className="flex gap-2 items-start">
                    <span className="text-blue-900 mt-0.5">✓</span>
                    <span className="text-sm leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai perusahaan */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Yang kami pegang</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Nilai perusahaan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🤝", title: "Kepercayaan", desc: "Membangun hubungan jangka panjang berbasis kejujuran" },
              { icon: "⚡", title: "Kecepatan", desc: "Proses cepat tanpa mengorbankan kualitas" },
              { icon: "💡", title: "Inovasi", desc: "Selalu mencari solusi terbaik untuk klien" },
              { icon: "🌟", title: "Profesionalisme", desc: "Tim berpengalaman yang siap melayani" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Orang-orang hebat kami</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Tim kami</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Profesional berpengalaman yang siap membantu kebutuhan pembiayaan Anda.</p>
          </div>
          {team.length === 0 ? (
            <p className="text-center text-gray-400 py-8">Belum ada data tim. Tambahkan di Studio CMS.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                  {member.photo ? (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image src={urlFor(member.photo).width(200).height(200).url()} alt={member.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-900 font-bold text-2xl">{member.name?.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-blue-900 text-sm font-medium mb-2">{member.position}</p>
                  {member.bio && <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap bekerja sama dengan kami?</h2>
          <p className="text-blue-200 mb-8">Hubungi tim kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan pembiayaan alat berat Anda.</p>
          <Link href="/kontak" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block">
            Mulai konsultasi
          </Link>
        </div>
      </section>
    </main>
  );
}
