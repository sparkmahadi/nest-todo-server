import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findById(id);
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    return this.todosService.create(todo);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() updatedTodo: Todo
  ): Promise<Todo> {
    return this.todosService.update(id, updatedTodo);
  }

  @Patch(':id/softDelete')
  async softDeleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.softDelete(id);
  }

  @Patch(':id/restore')
  async restoreTodo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.restore(id);
  }

  @Patch(':id/permanentDelete')
  async permanentDeleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.permanentDelete(id);
  }
}
