import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum.js';

import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';

@Injectable()
export class BoardsService {
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const board: Board = {
  //     id: uuid(),
  //     status: BoardStatus.PUBLIC,
  //     ...createBoardDto,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const board = this.boards.find((board) => board.id === id);
  //   if (!board) {
  //     throw new NotFoundException('Board not found');
  //   }
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
