export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string; // Foreign key to the Category model
  imageUrl?: string; // Optional field for product images
  stock: number;
}