import Header from "@/components/ui/Header";
import MapContents from "@/components/storedetail/MapContents";

export default function MapPage() {
  return (
    <div className="map-wrap">
      <Header url="/storedetail" title="점포정보" basket={false} />
      <MapContents />
    </div>
  );
}
