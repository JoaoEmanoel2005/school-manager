
import UserHeader from '@/app/components/user/userHeader'
import UserFooter from '@/app/components/user/userFooter'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main>
        {children}
      </main>
      <UserFooter />
    </>
  )
}
