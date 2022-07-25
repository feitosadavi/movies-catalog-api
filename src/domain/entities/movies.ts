export type Product = {
  id: string
  title: string
  banner: string
  description: string
  director: string
  producer: string
}

export type ProductWithoutId = Omit<Product, 'id'>
