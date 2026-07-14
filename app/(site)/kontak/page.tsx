import { getSiteSettings } from "@/lib/queries";

export default async function KontakPage() {
  const settings = await getSiteSettings();

  return (
    <main className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Kontak kami</h1>
      <div className="space-y-4 text-gray-600">
        {settings?.email && (
          <p>📧 <a href={`mailto:${settings.email}`} className="text-blue-700">{settings.email}</a></p>
        )}
        {settings?.phone && <p>📞 {settings.phone}</p>}
        {settings?.address && <p>📍 {settings.address}</p>}
      </div>
      <div className="mt-10 border rounded-xl p-6 bg-gray-50">
        <h2 className="font-semibold text-lg mb-4">Kirim pesan</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Nama lengkap" className="w-full border rounded-lg px-4 py-2 text-sm" />
          <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2 text-sm" />
          <textarea rows={4} placeholder="Pesan Anda..." className="w-full border rounded-lg px-4 py-2 text-sm" />
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-semibold">Kirim pesan</button>
        </div>
      </div>
    </main>
  );
}