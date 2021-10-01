import React, { useState } from 'react';
import { CommentItem } from '../../types';
import style from './../../styles/layout/CommentProduct.module.scss'
import FormComment from './FormComment';
interface PropsType{
  listComment:CommentItem[]
}
function CommentProduct({ listComment } : PropsType) {
  const [listCommnetProduct,setListCommentProduct] = useState(listComment);
  const handleAddListComment = (newComment:CommentItem) => {
        const newListCmt = [...listCommnetProduct];
        newListCmt.unshift(newComment);
        setListCommentProduct(newListCmt);
  }
  return (
    <div className={style.wrapCommentProduct}>
      <div className={style.wrapForm}>
        <FormComment handleAddListComment = {handleAddListComment} />
      </div>
    </div>
  );
}

export default CommentProduct;