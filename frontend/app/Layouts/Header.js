import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 h-24 flex justify-between items-center">
        <div className="text-xl font-bold">Blood Donation System</div>
        <div>
          <Link href="/login">
          <button className="mr-4">Login</button>
          </Link>
          <Link href="/signup">
          <button>Signup</button>
          </Link>
        </div>
      </header>
    </>
  );
}
