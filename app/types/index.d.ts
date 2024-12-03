declare interface Product {
  id: number,
  category: string,
  price: number,
  title: string,
  description: string,
  image: string,
  rating: {
    count: number,
    rate: number,
  }
}
declare type Categories = string[]