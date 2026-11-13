import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model.js';

import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const board: Board = {
      id: uuid(),
      status: BoardStatus.PUBLIC,
      ...createBoardDto,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  deleteBoardById(id: string): void {
    const board = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== board.id);
  }

  updateBoardById(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
