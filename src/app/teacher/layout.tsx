"use client";

import { usePathname } from "next/navigation";
import Header from "@/src/features/teacher/components/Header";
import Footer from "@/src/features/teacher/components/Footer";


export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname.endsWith("/login");

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Header />}

      <main className="flex-grow bg-slate-50">{children}</main>

      {!isLoginPage && <Footer />}
    </div>
  );
}
