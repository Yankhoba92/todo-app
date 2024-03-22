import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todos.interface';

// localhost:3000/todos  C'est grâce à 'todos' qu'on peut ecouter notre port
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }
}
