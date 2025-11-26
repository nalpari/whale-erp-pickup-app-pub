import Header from "@/components/ui/Header";
import HistoryDetail from "@/components/orderhistory/HistoryDetail";
export default function OrderHistoryPage() {
  return (
    <div className="history-list-wrap">
      <Header url="/orderhistory" title="주문 상세 내역" basket={false} />
      <HistoryDetail />
    </div>
  );
}
