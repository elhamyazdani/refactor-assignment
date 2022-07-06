export default interface ProductInterface {
  title: string
  description: string
  price: number
  isFavorite: boolean
  rating: {
    rate: number
    count: number
  }
}
