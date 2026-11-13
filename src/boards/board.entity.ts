import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { BoardStatus } from './board-status.enum.js';

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
