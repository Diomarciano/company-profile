import { getSiteSettings } from "@/lib/queries";
import Navbar from "../components/Navbar";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar siteName={settings?.siteName} />
      {children}
    </>
  );
}