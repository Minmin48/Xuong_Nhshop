export interface IProduct {
  _id?: number | string;
  name: string;
  price: number;
  category?: string;
  gallery?: string[];
  quantity?: number;
  image: string;
  description?: string;
  discount: number;
  featured: boolean;
  countInStock: number;
}
