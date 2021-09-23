import React from 'react';
import { listDanhmuc } from '../../fakeData';
import style from '../../styles/layout/ProductsListCategory.module.scss';
import Link from 'next/link'
import {useRouter} from 'next/router';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
function ProductListCategory(props) {
  const router = useRouter();
  const { type } = router.query;
  
  return (
    <div className={style.listCategory}>
      <div className={style.listCategory__head}>
        Danh mục
      </div>
      <div className={style.listCategory__body}>
        {listDanhmuc.map((item,index) => (
         <Link href={`/products/?type=${item.path}`} key={index} > 
          <a className={`${style.listCategory__body__item} ${type === item.path && style.active}`}>
            <span>< ArrowRightIcon className={`${style.icon} ${type === item.path && style.iconActive}`} /></span> <span>{item.name}</span>
          </a>
         </Link>
        ))}
      </div>

      
       
    </div>
  );
}

export default ProductListCategory;