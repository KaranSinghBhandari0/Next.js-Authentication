export const dynamic = "force-dynamic";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="w-full border-b border-gray-300 h-16">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-16 px-2">
        <Link href="/" className="font-bold text-xl">
          AuthPortal
        </Link>

        <div className="flex gap-4">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/services" className="font-medium">
            Services
          </Link>
          <Link href="/admin/dashboard" className="font-medium">
            Admin
          </Link>
          {
            user ?
            <Link href="/profile" className="font-medium">
              Profile
            </Link>
            :
            <Link href="/login" className="font-medium">
              Login
            </Link>
          }
        </div>
      </div>
    </header>
  );
}
