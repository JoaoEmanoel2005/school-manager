"use client";

import { usePathname } from "next/navigation";
import UserHeader from "@/app/components/user/userHeader";
import UserFooter from "@/app/components/user/userFooter";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname.endsWith("/login");

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <UserHeader />}

      <main className="flex-grow bg-slate-50">{children}</main>

      {!isLoginPage && <UserFooter />}
    </div>
  );
}
