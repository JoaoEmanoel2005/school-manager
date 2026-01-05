
import TeacherHeader from '@/app/components/teacher/teacherHeader'
import TeacherFooter from '@/app/components/teacher/teacherFooter'

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TeacherHeader />
      <main>
        {children}
      </main>
      <TeacherFooter />
    </>
  )
}
