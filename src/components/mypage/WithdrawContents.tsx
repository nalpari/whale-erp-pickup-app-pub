export default function WithdrawContents() {
  return (
    <div className="sub-contents">
      <div className="sub-white-wrap">
        <div className="withdraw-contents">
          <div className="withdraw-guide">
            <div className="withdraw-name">
              <span className="name">김*영님,</span>
              <span>탈퇴 이유를 알려주세요.</span>
            </div>
            <div className="withdraw-applogy">더 좋은 서비스를 제공하기 위해 노력하겠습니다.</div>
          </div>
          <div className="withdraw-reason-list">
            <div className="withdraw-reason-tit">중복선택 가능</div>
            <div className="withdraw-reason-item">
              <button className="withdraw-reason-btn">이용할 수 있는 점포 부족</button>
            </div>
            <div className="withdraw-reason-item act">
              <button className="withdraw-reason-btn">앱 사용이 불편하거나 어려움</button>
            </div>
            <div className="withdraw-reason-item act">
              <button className="withdraw-reason-btn">유사한 타 서비스 이용</button>
            </div>
            <div className="withdraw-reason-item">
              <button className="withdraw-reason-btn">개인정보 변경으로 인한 재가입</button>
            </div>
          </div>
          <div className="withdraw-reason-custom">
            <div className="withdraw-reason-custom-tit">직접입력 (0 / 200)</div>
            <div className="block">
              <textarea name="" id="" placeholder=" 소중한 의견을 들려주세요." className="textarea-form"></textarea>
            </div>
            <div className="withdraw-warning">
              회원 탈퇴 시 개인정보 및 포인트/쿠폰/스탬프 등의 정보가 모두 삭제됩니다. 추후 재가입하여도 해당 정보는
              복구되지 않습니다.
            </div>
          </div>
          <div className="withdraw-btn-wrap">
            <div className="check-form-box">
              <input type="checkbox" id="check1" name="check1" />
              <label htmlFor="check1">탈퇴 유의사항을 확인했습니다.</label>
            </div>
            <button className="btn-form black block">회원탈퇴 및 데이터 삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
