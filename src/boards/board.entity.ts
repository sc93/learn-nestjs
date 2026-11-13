import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { BoardStatus } from './board.model.js';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
