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
      <div className="flex flex-col min-h-screen">
        {!isLoginPage && <TeacherHeader />}
  
        <main className="flex-grow bg-slate-50">{children}</main>
  
        {!isLoginPage && <TeacherFooter />}
      </div>
    );
}
