type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's colthing";

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description?: string;
  inStock: boolean;
}

interface Cart {
  product: Product;
  quantity: number;
}

class StoreManager {
  products: Product[] = [];
  cart: Cart[] = [];
  nextID: number = 1; //

  fetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        category: item.category,
        inStock: true,
      }));
      this.nextID = this.products.length + 1;
    } catch (e) {
      console.error("Please, refresh", e);
    }
  };

  
}
