import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MyPageMain from "@/components/mypage/MyPageMain";

export default function MyPage() {
  return (
    <div className="mypage-wrap">
      <Header url="/" title="마이페이지" basket={false} />
      <div className="mypage-container">
        <MyPageMain />
      </div>
      <Footer />
    </div>
  );
}
