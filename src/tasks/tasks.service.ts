import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'This is task 1',
      done: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is task 2',
      done: false,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'This is task 3',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
}
