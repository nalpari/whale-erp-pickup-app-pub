import Header from "@/components/ui/Header";
import OrderHistoryContents from "@/components/orderhistory/OrderHistoryContents";

export default function OrderHistoryPage() {
  return (
    <div className="history-list-wrap">
      <Header url="/" title="주문내역" basket={false} />
      <OrderHistoryContents />
    </div>
  );
}
