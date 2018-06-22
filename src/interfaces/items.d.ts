interface ICartItem {
  id: number,
  quantity: number,
  name?: string,
  title?: string,
  description?: string,
  img?: {},
  price?: number
}

interface IStockItem {
  id: number,
  name: string,
  title: string,
  description: string,
  img?: {},
  price?: number
}
