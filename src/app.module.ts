import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module.js';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
