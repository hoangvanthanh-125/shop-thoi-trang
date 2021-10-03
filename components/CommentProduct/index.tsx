import React, { useState } from "react";
import { CommentItem } from "../../types";
import CommentGeneral from "../CommentGeneral";
import CommentList from "../CommentList";
import style from "./../../styles/layout/CommentProduct.module.scss";
import FormComment from "./FormComment";
interface PropsType {
  listComment: CommentItem[];
}
function CommentProduct({ listComment }: PropsType) {
  const [listCommentProduct, setListCommentProduct] = useState(listComment);
  const [itemEditting,setItemEditing] = useState(null);
  const handleAddListComment = (newComment: CommentItem) => {
    const newListCmt = [...listCommentProduct];
    newListCmt.unshift(newComment);
    setListCommentProduct(newListCmt);
  };
  const handleUpdateComment = (updateComment: CommentItem) => {
    const index = listCommentProduct.findIndex(
      (item) => item.idComment === updateComment.idComment
    );        
    let newList = [...listCommentProduct];
    newList[index] = updateComment;
    setListCommentProduct(newList);
  };
  const handleDeleteComment = (commentDelete: CommentItem) => {
    const newListCmt = listCommentProduct.filter(
      (item) => item.idComment !== commentDelete.idComment
    );
    setListCommentProduct(newListCmt);
  };
  return (
    <div className={style.wrapCommentProduct}>
       <div className={style.wrapCommentGeneral}>
        <CommentGeneral listComment = {listCommentProduct} />
      </div>
      <div className={style.wrapForm}>
        <FormComment handleAddListComment={handleAddListComment} />
      </div>
     
      <div className={style.wrapListCmt}>
        <CommentList
          handleDeleteComment={handleDeleteComment}
          handleUpdateComment={handleUpdateComment}
          listComment={listCommentProduct}
        />
      </div>
    </div>
  );
}

export default CommentProduct;
