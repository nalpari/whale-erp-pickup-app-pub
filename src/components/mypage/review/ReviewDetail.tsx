'use client'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function ReviewDetail() {
  const bottomSheetControler = useBottomSheetControler()

  return (
    <div className="sub-contents">
      <div className="sub-white-wrap">
        <div className="review-detail-header">
          <div className="review-detail-tit">힘이나는커피생활 무교점</div>
          <div className="review-detail-category">
            <span>아메리카노</span>
            <span>아메리카노</span>
            <span>아메리카노</span>
            <span>아메리카노</span>
            <span>라떼</span>
          </div>
        </div>
        <div className="review-detail-body">
          <div className="review-txt-wrap">
            <div className="review-txt-tit">
              내용 (100 /1,000) <span className="red">*</span>
            </div>
            <div className="review-txt">
              <textarea name="" id="" placeholder="내용을 입력해주세요." className="textarea-form"></textarea>
            </div>
          </div>
          <div className="add-photo-wrap">
            <button className="btn-form photo block" onClick={() => bottomSheetControler.setAddPhotoSheet(true)}>
              <i className="photo-icon"></i>사진 등록하기 (최대 6장까지 가능)
            </button>
            <div className="photo-list-wrap">
              <div className="photo-item">
                <div className="photo-img">image</div>
                <button className="photo-delete"></button>
              </div>
              <div className="photo-item">
                <div className="photo-img">image</div>
                <button className="photo-delete"></button>
              </div>
              <div className="photo-item">
                <div className="photo-img">image</div>
                <button className="photo-delete"></button>
              </div>
              <div className="photo-item">
                <div className="photo-img">image</div>
                <button className="photo-delete"></button>
              </div>
              <div className="photo-item">
                <button className="photo-add"></button>
              </div>
              <div className="photo-item">
                <button className="photo-add"></button>
              </div>
            </div>
            <div className="add-photo-btn">
              <button className="btn-form black block">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
