import Header from "@/components/ui/Header";

export default function OrderDetailPage() {
  return (
    <div className="order-detail-wrap">
      <Header url="/" title="주문내역" basket={false} />
    </div>
  );
}
