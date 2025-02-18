"use client";
import { signOut } from "next-auth/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <button
      className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
      onClick={handleSignOut}
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
