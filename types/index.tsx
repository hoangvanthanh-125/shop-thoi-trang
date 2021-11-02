export type Product = {
  id: string;
  name: string;
  price: number;
  urlImg?: string;
  listSize?: string[];
  stars?:number[];
  description?:string;
  listImg?:string[];
  categorys?:string[];
  sale?:number;
}
export type CommentItem = {
  idComment:string,
  productId:string,
  nameUser:string,
  idUser:string,
  content:string ,
  star:number,
  timeAt:Date
}
export type CartType = {
  id: string | number;
  cartItem: Product
  quantity: number;
  size?:string
};
export interface OrderProduct{
  orderId:any,
  productOrder:CartType,
  orderDate:Date | string,
  requiredDate?:Date | string,
  shippedDate?:Date | string,
  status:"received" | "cancelled" |"delivering" ,
}