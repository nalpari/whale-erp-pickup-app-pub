import Link from 'next/link'
import '@/styles/publishpage.scss'

export default function PublishPage() {
  return (
    <div className="publish-list">
      <div className="p-header">
        <h1>Whale ERP</h1>
      </div>
      <div className="p-body">
        <div className="p-contents">
          {/* <div className="p-guide mb15">
            <div className="p-guide-header">Style Guide</div>
            <div className="p-guide-content">
              <div className="p-guide-link-wrap">
                <Link href={'/styleguide/gridsystem'}>Grid System</Link>
                <Link href={'/styleguide/desktopfont'}>Desktop Font</Link>
                <Link href={'/styleguide/mobilefont'}>Mobile Font</Link>
                <Link href={'/styleguide/textfield'}>Text Field / Selectors</Link>
                <Link href={'/styleguide/button'}>ButtonGuide</Link>
              </div>
            </div>
          </div> */}
          <div className="p-guide">
            <div className="p-guide-header">Publish Guide</div>
            <div className="p-guide-content">
              <p>
                ※ className은 케밥 케이스 사용
                <span> ex) &quot;sample-class&quot;</span>
              </p>
              <p>
                ※ img네이밍은 &quot;_&quot;로 사용, 번호 사용시 01, 02 와 같이 2자리 숫자 사용{' '}
                <span>ex) &quot;img_sample01&quot;</span>
              </p>
              <p>
                ※ button, select, checkbox, radio... 등 기본 설정은
                <span> Style Guide</span>에 정의된 내용만 사용
              </p>
              <p>※ scss파일 생성시 &quot;_&quot;를 앞에 붙힌 후 생성, 또한 해당 카테고리에 적합한 폴더에 생성</p>
            </div>
          </div>
          <div className="p-list-wrap">
            <h2>Publish List</h2>
            <div className="p-list-table">
              <table>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '15%' }} />
                  <col />
                  <col style={{ width: '13%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '13%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Depth01</th>
                    <th>Depth02</th>
                    <th>파일명</th>
                    <th>비고</th>
                    <th>MarkUp</th>
                    <th>완료일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main</td>
                    <td></td>
                    <td>
                      <Link href={'/'}>Main.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>알림</td>
                    <td></td>
                    <td>
                      <Link href={'/notification'}>Notification.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td>검색하기</td>
                    <td></td>
                    <td>
                      <Link href={'/search'}>Search.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td>찜한 점포</td>
                    <td></td>
                    <td>
                      <Link href={'/save-store'}>SaveStore.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td rowSpan={3}>로그인 </td>
                    <td>Login</td>
                    <td>
                      <Link href={'/login'}>Login.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>회원가입</td>
                    <td>
                      <Link href={'/login/signup'}>Signup.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>회원가입 완료</td>
                    <td>
                      <Link href={'/login/singup-success'}>SingupSuccess.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>

                  <tr>
                    <td rowSpan={4}>매장정보 </td>
                    <td>매장정보</td>
                    <td>
                      <Link href={'/storedetail'}>StoreDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>메뉴 상세</td>
                    <td>
                      <Link href={'/storedetail/1'}>MenuDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포정보</td>
                    <td>
                      <Link href={'/storedetail/map'}>StoreMap.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>구매후기기</td>
                    <td>
                      <Link href={'/storedetail/review'}>Review.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>주문내역 </td>
                    <td>주문내역</td>
                    <td>
                      <Link href={'/orderhistory'}>OrderHistory.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>주문내역 상세</td>
                    <td>
                      <Link href={'/orderhistory/1'}>OrderHistoryDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>장바구니 </td>
                    <td>장바구니</td>
                    <td>
                      <Link href={'/basket'}>Basket.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={7}>마이페이지 </td>
                    <td>마이페이지</td>
                    <td>
                      <Link href={'/mypage'}>Mypage.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>마이페이지 스템프 </td>
                    <td>
                      <Link href={'/mypage/stemp'}>Stemp.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>마이페이지 쿠폰</td>
                    <td>
                      <Link href={'/mypage/coupon'}>Coupon.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>마이페이지 내정보 수정</td>
                    <td>
                      <Link href={'/mypage/edit'}>Edit.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td>마이페이지 구매후기 관리</td>
                    <td>
                      <Link href={'/mypage/review'}>Review.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td>마이페이지 결제수단 관리</td>
                    <td>
                      <Link href={'/mypage/payment'}>Payment.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                  <tr>
                    <td>마이페이지 환경설정</td>
                    <td>
                      <Link href={'/mypage/setting'}>Setting.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2026-03-05</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
