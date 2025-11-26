"use client";
import Image from "next/image";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import { useRouter } from "next/navigation";

export default function DetailContents() {
  const bottomSheetControler = useBottomSheetControler();
  const router = useRouter();
  return (
    <div className="detail-contents">
      <div className="dt-contents-inner">
        <div className="contents-tab-wrap">
          <div className="tab-list">
            <button className="tab-item">시그니처</button>
            <button className="tab-item act">에이드&주스</button>
            <button className="tab-item">논커피</button>
            <button className="tab-item">스무디</button>
            <button className="tab-item">스무디&프라페</button>
            <button
              className={`tab-item arr ${
                bottomSheetControler.categorySheet ? "act" : ""
              }`}
              onClick={() => bottomSheetControler.setCategorySheet(true)}
            >
              <i className="arr-icon"></i>
            </button>
          </div>
        </div>
        <dl className="menu-list">
          <dt className="menu-title">시그니처</dt>
          {/* ready 클래스 추가시 일시품절 표시 */}
          <dd className="menu-item ready">
            <button className="menu-item-btn">
              <div className="menu-item-img">
                <Image
                  src="/assets/images/contents/menu_item.png"
                  alt="menu-img"
                  fill
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-name">말차코튼샷라떼</div>
                <div className="menu-price">
                  6,000원 <span className="discount">8,600원</span>
                </div>
                <div className="menu-desc">
                  상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                </div>
              </div>
            </button>
          </dd>
          {Array.from({ length: 2 }).map((_, index) => (
            <dd className="menu-item" key={index}>
              <button
                className="menu-item-btn"
                onClick={() => router.push(`/storedetail/${index + 1}`)}
              >
                <div className="menu-item-img">
                  <Image
                    src="/assets/images/contents/menu_item.png"
                    alt="menu-img"
                    fill
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-name">말차코튼샷라떼</div>
                  <div className="menu-price">
                    6,000원 <span className="discount">8,600원</span>
                  </div>
                  <div className="menu-desc">
                    상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                  </div>
                </div>
              </button>
            </dd>
          ))}
        </dl>
        <dl className="menu-list">
          <dt className="menu-title">아메리카노</dt>
          {/* ready 클래스 추가시 일시품절 표시 */}
          <dd className="menu-item ready">
            <button className="menu-item-btn">
              <div className="menu-item-img">
                <Image
                  src="/assets/images/contents/menu_item.png"
                  alt="menu-img"
                  fill
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-name">말차코튼샷라떼</div>
                <div className="menu-price">
                  6,000원 <span className="discount">8,600원</span>
                </div>
                <div className="menu-desc">
                  상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                </div>
              </div>
            </button>
          </dd>
          {Array.from({ length: 2 }).map((_, index) => (
            <dd className="menu-item" key={index}>
              <button className="menu-item-btn">
                <div className="menu-item-img">
                  <Image
                    src="/assets/images/contents/menu_item.png"
                    alt="menu-img"
                    fill
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-name">말차코튼샷라떼</div>
                  <div className="menu-price">
                    6,000원 <span className="discount">8,600원</span>
                  </div>
                  <div className="menu-desc">
                    상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                  </div>
                </div>
              </button>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
}
