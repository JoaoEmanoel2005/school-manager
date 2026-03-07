"use client";

import { usePathname } from "next/navigation";
import TeacherHeader from "@/app/components/teacher/teacherHeader";
import TeacherFooter from "@/app/components/teacher/teacherFooter";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname.endsWith("/login");

  return (
    <>
      {/* Só renderiza se NÃO for a página de login */}
      {!isLoginPage && <TeacherHeader />}
      <main className={!isLoginPage ? "min-h-screen bg-slate-50" : ""}>
        {children}
      </main>
      {!isLoginPage && <TeacherFooter />}
    </>
  );
}
