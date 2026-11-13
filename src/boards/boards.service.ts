import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum.js';

import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';
import { BoardRepository } from './board.repository.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity.js';

@Injectable()
export class BoardsService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne({
      where: {
        id,
      },
    });

    if (!board) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }

    return board;
  }

  createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard({ title, description });
  }

  async deleteBoardById(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }

  async updateBoardById(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
