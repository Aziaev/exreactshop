interface ICatalogItem {
  key: number,
  id: number,
  addToCart( id: number ): any;
}

interface IStockItem {
  id: number,
  name: string,
  title: string,
  description: string,
  img: {},
  price: number
}
