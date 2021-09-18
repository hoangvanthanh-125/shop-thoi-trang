import React from 'react';
import { listDanhmuc } from '../../fakeData';
import style from '../../styles/layout/ProductsListCategory.module.scss';
import Link from 'next/link'

function ProductListCategory(props) {
  return (
    <div className={style.listCategory}>
      <div className={style.listCategory__head}>
        Danh mục sản phẩm
      </div>
      <div className={style.listCategory__body}>
        {listDanhmuc.map((item,index) => (
         <Link href={`/products/${item.name}/${item.id}`} key={index} > 
          <a className={style.listCategory__body__item}>
             {item.name}
          </a>
         </Link>
        ))}
      </div>

      
       
    </div>
  );
}

export default ProductListCategory;