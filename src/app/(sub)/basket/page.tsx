import Header from "@/components/ui/Header";
import BasketContents from "@/components/basket/BasketContents";

export default function BasketPage() {
  return (
    <div className="basket-wrap">
      <Header url="/" title="장바구니" basket={false} />
      <BasketContents />
    </div>
  );
}
