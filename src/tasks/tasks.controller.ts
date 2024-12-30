import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTask(): string {
    return 'tasks';
  }

  @Post()
  createTasks( @Body() task ): string {
    return 'tasks';
  }

  @Put()
  updateTasks(): string {
    return 'tasks';
  }

  @Delete()
  deleteTask(): string { {
    return 'tasks';
  }
}
