import { ProductTypes, InventoryPolicy } from "../constants";
export interface ProductItem {
  name: string;
  image: string;
  price: number;
  types: ProductTypes[];
}

export interface VariantItem {
  id: number;
  sku: string;
  price: string;
  compare_at_price: string;
  inventory_management: string | null;
  inventory_policy: InventoryPolicy;
  inventory_quantity: number;
}

export interface ImageItem {
  id: number;
  src: string;
}

export interface ProductCardItemRaw {
  handle: string;
  id: number;
  title: string;
  vendor: string;
  tags: string;
  image: ImageItem;
  variants: VariantItem[];
}

export type ProductCardItem = {
  id: number;
  title: string;
  imageSrc: string;
  price: number;
  originalPrice: number;
  inventoryManagement: string | null;
  inventoryQuantity: number;
  inventoryPolicy: InventoryPolicy;
};
