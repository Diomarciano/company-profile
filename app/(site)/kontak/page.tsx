import { getSiteSettings } from "@/lib/queries";
import Link from "next/link";

export default async function KontakPage() {
  const settings = await getSiteSettings();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">Hubungi kami</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Kami siap membantu Anda. Kirim pesan dan tim kami akan merespons dalam 1x24 jam.</p>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Info kontak */}
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-gray-900 text-lg">Informasi kontak</h2>
          {[
            { icon: "✉", label: "Email", value: settings?.email },
            { icon: "☎", label: "Telepon", value: settings?.phone },
            { icon: "⊙", label: "Alamat", value: settings?.address },
          ].map((item) => item.value && (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-900">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                <p className="text-gray-700 text-sm">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400 mb-3 font-medium">JAM OPERASIONAL</p>
            <p className="text-sm text-gray-600">Senin – Jumat: 08.00 – 17.00</p>
            <p className="text-sm text-gray-600">Sabtu: 08.00 – 13.00</p>
          </div>
        </div>

        {/* Form kontak */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="font-bold text-gray-900 text-lg mb-6">Kirim pesan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Nama lengkap</label>
              <input type="text" placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
              <input type="email" placeholder="john@perusahaan.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Nomor telepon</label>
            <input type="tel" placeholder="08xx xxxx xxxx"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition" />
          </div>
          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Pesan</label>
            <textarea rows={5} placeholder="Tuliskan pesan atau pertanyaan Anda..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition resize-none" />
          </div>
          <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors">
            Kirim pesan
          </button>
        </div>
      </div>
    </main>
  );
}