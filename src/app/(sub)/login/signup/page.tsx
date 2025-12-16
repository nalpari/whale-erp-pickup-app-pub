import Header from "@/components/ui/Header";
import SingUpContents from "@/components/login/SingUpContents";

export default function SignupPage() {
  return (
    <div className="signup-wrap">
      <Header url="/login" title="회원가입" basket={false} />
      <SingUpContents />
    </div>
  );
}
