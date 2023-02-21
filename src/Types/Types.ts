interface Product {
  'Product Name': string;
  Description: string;
  'Current Price': number;
  'Previous Price': number;
}

export type ProductsArray = Product[];

export interface CardProps {
  cardsPerPage: ProductsArray;
}

export interface PaginateProps {
  cardsPerPage: number;
  totalCards: number;
  paginate: (number: number) => void;
}
