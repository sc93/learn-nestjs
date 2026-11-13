import { Repository, DataSource } from 'typeorm';
import { Board } from './board.entity.js';
import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto.js';
import { BoardStatus } from './board-status.enum.js';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
