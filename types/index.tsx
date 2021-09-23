export type Product = {
  id: string;
  name: string;
  price: number;
  urlImg?: string;
  listSize?: string[];
  star?:number;
  description?:string;
  listImg?:string[];
  categorys?:string[];
  sale?:number;
}