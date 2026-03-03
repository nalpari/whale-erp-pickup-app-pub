export default function SingupSuccessContents() {
  return (
    <>
      <div className="signup-success-box">
        <div className="signup-success-tit">회원가입이 완료되었습니다.</div>
        <div className="signup-success-data">
          <table className="signup-success-table">
            <colgroup>
              <col width="80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>이메일</th>
                <td>kj12345@naver.com</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>0102345789</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="signup-success-btn">
          <button className="btn-form black block">픽업 주문하기</button>
        </div>
      </div>
    </>
  )
}
