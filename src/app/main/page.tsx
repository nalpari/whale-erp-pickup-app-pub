import MainHeader from "@/components/main/MainHeader";
import Footer from "@/components/ui/Footer";
import MainContents from "@/components/main/MainContents";

export default function Main() {
  return (
    <div className="wrap">
      <MainHeader />
      <div className="main-container">
        <MainContents />
      </div>
      <Footer />
    </div>
  );
}
