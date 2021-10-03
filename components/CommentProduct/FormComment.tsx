import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import style from "./../../styles/layout/CommentForm.module.scss";
import { CommentItem } from "./../../types/index";
interface PropsType {
  handleAddListComment?: (newComment: CommentItem) => void;
  handleUpdateComment?: (updateComment: CommentItem) => void;
  initialText?: string;
  initialStar?: number;
  handleCloseEdit?: () => void;
  itemEditing?: CommentItem | null;
}
function FormComment({
  handleAddListComment,
  handleUpdateComment,
  initialText,
  initialStar,
  handleCloseEdit,
  itemEditing,
}: PropsType) {
  const [textCmt, setTextCmt] = useState(initialText || "");
  const [star, setStar] = useState(initialStar || 0);
  const handleChangeCmt = (e) => {
    setTextCmt(e.target.value);
  };
  const handleClose = () => {
    if (handleCloseEdit) {
      handleCloseEdit();
    }
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
      if (handleAddListComment) {
        handleAddListComment(newComment);
      } else if (handleUpdateComment) {
        handleUpdateComment({
          ...itemEditing,
          content: textCmt,
          star
        });
      }
      if (handleCloseEdit) {
        handleCloseEdit();
      }
      setTextCmt("");
      setStar(0);
    }
  };
  useEffect(() => {
    if (itemEditing) {
      if (typeof document !== undefined) {
        const input = document.getElementById(`${itemEditing?.idComment}`);
        input.focus(); 
        var val = (input as HTMLInputElement).value; 
        (input as HTMLInputElement).value = ""; 
        (input as HTMLInputElement).value = val; 
      }
    }
  }, []);
  return (
    <>
      <div className={style.star}>
        <Rating
          name={`star-${Math.random()}`}
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </div>
      <form
        onSubmit={handleSubmitForm}
        className={`${style.formComment} ${itemEditing && style.formEdit} `}
      >
        <textarea
          id={`${itemEditing?.idComment}`}
          onChange={handleChangeCmt}
          value={textCmt}
          className={` ${itemEditing && style.inputEdit} ${
            style.formComment__inputCmt
          }`}
          placeholder="Viết bình luận"
        />
        <div
          className={`${style.wrapAction} ${itemEditing && style.formEdit} `}
        >
          <input
            className={`${style.formComment__submitCmt}`}
            type="submit"
            value={handleUpdateComment ? "Cập nhật" : "Đăng"}
          />
          {handleUpdateComment && (
            <button
              onClick={handleCloseEdit}
              className={`${style.formComment__submitCmt} ${
                itemEditing && style.cancelEdit
              } `}
            >
              Huỷ bỏ
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default FormComment;
