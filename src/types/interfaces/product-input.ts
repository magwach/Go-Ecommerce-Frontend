interface stock {
  stock: number;
}
export interface CreateProductInput {
  name: string;
  description: string;
  category_id: string;
  image_url: string;
  price: number;
  stock: stock;
}
