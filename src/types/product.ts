export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rate: number;
  reviewCount: number;
  discount: number;
  perMonth: {
    month: number;
    price: number;
  };
}

