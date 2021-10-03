import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./../../styles/layout/CommentList.module.scss";
import { CommentItem } from "../../types";
import { Rating } from "@material-ui/lab";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import FormComment from "../CommentProduct/FormComment";
interface PropsType {
  listComment: CommentItem[];
  handleUpdateComment: (updateComment: CommentItem) => void;
  handleDeleteComment: (deleteComment: CommentItem) => void;
}
function CommentList({
  listComment,
  handleUpdateComment,
  handleDeleteComment,
}: PropsType) {
  const [itemEditing, setItemEditing] = useState(null);

  const handleCloseEdit = () => {
    setItemEditing(null);
  };
  const handleClickEdit = (item) => {
    setItemEditing(item);
  };
  const deleteCmt = (deleteComment: CommentItem) => {
    if (handleDeleteComment) {
      handleDeleteComment(deleteComment);
    }
  };
  const renderListComment = () => {
    let result = null;
    if (listComment.length > 0) {
      result = listComment.map((item) => (
        <div className={style.commentItem} key={item.idComment}>
          <p className={style.nameUser}>{item.nameUser}</p>
          {item.star > 0 && !itemEditing && <Rating value={item.star} />}
          {!(itemEditing?.idComment === item.idComment) ? (
            <p className={style.content}>{item.content}</p>
          ) : (
            <FormComment
              handleCloseEdit={handleCloseEdit}
              initialText={item.content}
              initialStar={item.star}
              handleUpdateComment={handleUpdateComment}
              itemEditing={itemEditing}
            />
          )}
        { itemEditing?.idComment !== item.idComment&& <p className={style.date}>{item.timeAt.toString()}</p>}
          <div className={style.moreIcon}>
            <MoreHorizIcon />
            <div className={style.moreAction}>
              <div
                onClick={() => handleClickEdit(item)}
                className={style.action__item}
              >
                <EditIcon className={style.action__item__icon} />
                <p>Chỉnh sửa</p>
              </div>
              <div
                onClick={() => deleteCmt(item)}
                className={style.action__item}
              >
                <DeleteOutlineIcon className={style.action__item__icon} />
                <p>Xóa</p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return result;
  };
  return <div className={style.wrapListCommnet}>{renderListComment()}</div>;
}

export default CommentList;
