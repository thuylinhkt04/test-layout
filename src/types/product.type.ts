export enum ProductTypes {
  pink = 'pink',
  blue = 'blue',
  yellow = 'yellow',
  white = 'white',
}

export interface ProductItem {
  name: string;
  image: string;
  price: number;
  types: ProductTypes[];
}