import LoginFooter from '@/components/login/LoginFooter'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-contents">
      <div className="login-contents-inner">{children}</div>
      <LoginFooter />
    </div>
  )
}
