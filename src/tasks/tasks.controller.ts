import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId): Task {
    return this.tasksService.getTask(parseInt(taskId));
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'tasks';
  }

  @Put(':id')
  updateTasks(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Updating a tasks';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Deleting a task number: ${id}`;
  }
}
