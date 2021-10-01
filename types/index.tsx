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