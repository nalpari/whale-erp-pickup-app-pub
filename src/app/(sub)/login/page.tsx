import Header from "@/components/ui/Header";
import LoginContents from "@/components/login/LoginContents";

export default function LoginPage() {
  return (
    <div className="login-wrap">
      <Header url="/" title="로그인" basket={false} />
      <LoginContents />
    </div>
  );
}
