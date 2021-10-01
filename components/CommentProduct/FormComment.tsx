import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import style from "./../../styles/layout/CommentForm.module.scss";
import { CommentItem } from "./../../types/index";
interface PropsType {
  handleAddListComment: (newComment: CommentItem) => void;
}
function FormComment({ handleAddListComment }: PropsType) {
  const [textCmt, setTextCmt] = useState("");
  const [star, setStar] = useState(0);
  const handleChangeCmt = (e) => {
    setTextCmt(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (textCmt && textCmt.trim()) {
      //call api update cmt
      const newComment: CommentItem = {
        idComment: Date.now().toString(),
        productId: "1",
        nameUser: "Thanh",
        idUser: "345",
        content: textCmt,
        star,
        timeAt: new Date(),
      };
      if(handleAddListComment){
        handleAddListComment(newComment);
      }
    }
  };
  return (
    <>
      <div className={style.star}>
        <Rating
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </div>
      <form onSubmit={handleSubmitForm} className={style.formComment}>
        <textarea
          onChange={handleChangeCmt}
          value={textCmt}
          className={style.formComment__inputCmt}
          placeholder="Viết bình luận"
        />
        <input
          className={style.formComment__submitCmt}
          type="submit"
          value="Đăng"
        />
      </form>
    </>
  );
}

export default FormComment;
