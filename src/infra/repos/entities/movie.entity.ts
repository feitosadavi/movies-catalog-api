import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('movies')
class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  banner: string;
  @Column()
  producer: string;
  @Column()
  director: string;
}

export default MovieEntity;