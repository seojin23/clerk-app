import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()
  //   console.log(user)

  return (
    <div>
      <h1>Welcome Dashboard</h1>
      <p>
        반갑습니다, {user?.firstName} {user?.lastName}
      </p>
      <p>이메일: {user?.primaryEmailAddress?.emailAddress}</p>
      <p>등록시간: {user?.createdAt}</p>
    </div>
  )
}
