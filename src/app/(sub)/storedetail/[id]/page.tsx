import MenuContents from "@/components/storedetail/MenuContents";
import Header from "@/components/ui/Header";

export default function MenuDetailPage() {
  return (
    <div className="menu-wrap">
      <Header
        url="/storedetail"
        title={"스위츠 복숭아 아이스티"}
        basket={true}
      />
      <MenuContents />
    </div>
  );
}
