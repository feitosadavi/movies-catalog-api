import { Entity } from '@/core/domain/Entity'

export type Product = {
  id: string
  title: string
  banner: string
  description: string
  director: string
  producer: string
}

export type ProductWithoutId = Omit<Product, 'id'>

export type MovieProps = {
  title: string
  banner: string
  description: string
  director: string
  producer: string
}

export class Movie extends Entity<MovieProps> {
  private constructor(props: MovieProps, id?: string) {
    super(props, id)
  }

  static create (props: MovieProps, id?: string) {
    const movie = new Movie(props)

    return movie
  }
}