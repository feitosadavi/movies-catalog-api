import { Entity } from '@/core/domain/Entity'

type CarProps = {
  doors: number
}
class Car extends Entity<CarProps> {
  constructor(props: CarProps, id?: string) {
    super(props, id)
  }
}

describe('Entity', () => {
  it('should pass props and id to entity', () => {
    const car = new Car({ doors: 4 }, 'any_id')

    expect(car._id).toBe('any_id')
    expect(car.props).toEqual({ doors: 4 })
  })

  it('should create an id if it wasnt passed to constructor', () => {
    const car = new Car({ doors: 4 })

    expect(car._id).toBeTruthy()
  })
})