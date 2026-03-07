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
    <>
      {/* Só renderiza se NÃO for a página de login */}
      {!isLoginPage && <UserHeader />}
      <main className={!isLoginPage ? "min-h-screen bg-slate-50" : ""}>
        {children}
      </main>
      {!isLoginPage && <UserFooter />}
    </>
  );
}
