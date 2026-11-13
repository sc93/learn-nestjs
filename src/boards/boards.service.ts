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

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

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

  // getBoardById(id: string): Board {
  //   const board = this.boards.find((board) => board.id === id);
  //   if (!board) {
  //     throw new NotFoundException('Board not found');
  //   }
  //   return board;
  // }

  async createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.boardRepository.save(board);

    return board;
  }

  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const board: Board = {
  //     id: uuid(),
  //     status: BoardStatus.PUBLIC,
  //     ...createBoardDto,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // deleteBoardById(id: string): void {
  //   const board = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== board.id);
  // }
  // updateBoardById(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
