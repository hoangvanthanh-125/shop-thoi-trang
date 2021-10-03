import React from "react";
import { CommentItem } from "../../types";
import style from "./../../styles/layout/CommentGeneral.module.scss";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import StarIcon from "@material-ui/icons/Star";
function roundHalf(num) {
  return Math.round(num * 2) / 2;
}
interface PropsType {
  listComment: CommentItem[];
}

function CommentGeneral({ listComment }: PropsType) {
  let star = [];
  let percent = [];
  (star[1] = 0), (star[2] = 0), (star[3] = 0), (star[4] = 0), (star[5] = 0);
  let totalStar = 0;
  let currentListComment = listComment.filter((item) => item.star > 0);
  for (let i = 1; i <= 5; i++) {
    currentListComment.forEach((item) => {
      if (item.star === i) {
        star[i]++;
        totalStar++;
      }
    });
  }
  let startTb = 0;
  if (totalStar > 0) {
    for (let i = 1; i <= 5; i++) {
      percent[i] = ((star[i] * 100) / totalStar).toFixed(1);
    }

    startTb = roundHalf(
      (1 * star[1] + 2 * star[2] + 3 * star[3] + 4 * star[4] + 5 * star[5]) /
        totalStar
    );
  }

  return (
    totalStar > 0 && (
      <div className={style.commentGeneral}>
        <Grid container>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <div className={style.commentGeneral__left}>
              <h2 className={style.title}>Đánh giá trung bình</h2>
              <p className={style.starTb}>{startTb} / 5</p>
              <Rating value={startTb} />
            </div>
          </Grid>
          <Grid xs={12} md={6} sm={6} lg={6}>
            <div className={style.commentGeneral__right}>
              <div className={style.progressItem}>
                <p className={style.progressItem__star}>
                  1 <StarIcon className={style.starIcon} />
                </p>
                <LinearProgress
                  className={style.progressIcon}
                  variant="determinate"
                  value={percent[1]}
                />
                <div className={style.wrapPercent}>
                  <p className={style.progressItem__precent}>{percent[1]} %</p>
                  <p className={style.progressItem__quantityRate}>
                    {star[1]} đánh giá
                  </p>
                </div>
              </div>
              <div className={style.progressItem}>
                <p className={style.progressItem__star}>
                  2 <StarIcon className={style.starIcon} />
                </p>
                <LinearProgress
                  className={style.progressIcon}
                  variant="determinate"
                  value={percent[2]}
                />
                <div className={style.wrapPercent}>
                  <p className={style.progressItem__precent}>{percent[2]} %</p>
                  <p className={style.progressItem__quantityRate}>
                    {star[2]} đánh giá
                  </p>
                </div>
              </div>
              <div className={style.progressItem}>
                <p className={style.progressItem__star}>
                  3 <StarIcon className={style.starIcon} />
                </p>
                <LinearProgress
                  className={style.progressIcon}
                  variant="determinate"
                  value={percent[3]}
                />
                <div className={style.wrapPercent}>
                  <p className={style.progressItem__precent}>{percent[3]} %</p>
                  <p className={style.progressItem__quantityRate}>
                    {star[3]} đánh giá
                  </p>
                </div>
              </div>
              <div className={style.progressItem}>
                <p className={style.progressItem__star}>
                  4 <StarIcon className={style.starIcon} />
                </p>
                <LinearProgress
                  className={style.progressIcon}
                  variant="determinate"
                  value={percent[4]}
                />
                <div className={style.wrapPercent}>
                  <p className={style.progressItem__precent}>{percent[4]} %</p>
                  <p className={style.progressItem__quantityRate}>
                    {star[4]} đánh giá
                  </p>
                </div>
              </div>
              <div className={style.progressItem}>
                <p className={style.progressItem__star}>
                  5 <StarIcon className={style.starIcon} />
                </p>
                <LinearProgress
                  className={style.progressIcon}
                  variant="determinate"
                  value={percent[5]}
                />
                <div className={style.wrapPercent}>
                  <p className={style.progressItem__precent}>{percent[5]} %</p>
                  <p className={style.progressItem__quantityRate}>
                    {star[5]} đánh giá
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  );
}

export default CommentGeneral;
