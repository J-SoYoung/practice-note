export interface Todo {
  id: number;
  content: string;
}

export interface Item {
  itemId: string;
  image: string;
  title: string;
  itemName: string;
  price: number;
  size: (string | number)[];
}
