import MenuContents from "@/components/storedetail/MenuContents";
import Header from "@/components/ui/Header";

export default function MenuDetailPage() {
  return (
    <div className="menu-wrap">
      <Header url="/storedetail" title={""} basket={true} />
      <MenuContents />
    </div>
  );
}
