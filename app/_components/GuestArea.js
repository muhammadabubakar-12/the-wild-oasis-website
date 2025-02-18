"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
function GuestArea() {
  const { data: session } = useSession();
  return session?.user?.image ? (
    <Link
      href="/account"
      className="hover:text-accent-400 transition-colors flex items-center gap-4"
    >
      <img
        src={session.user.image}
        alt={session.user.name}
        className="h-8 rounded-full"
        referrerPolicy="no-refferrer"
      />
      <span>Guest area</span>
    </Link>
  ) : (
    <Link href="/account" className="hover:text-accent-400 transition-colors">
      Guest area
    </Link>
  );
}

export default GuestArea;
