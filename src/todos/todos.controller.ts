import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
    private todos: Todo[] = [];

    @Get()
    getAllTodos(): Todo[] {
        return this.todos;
    }

    @Post()
    createTodo(@Body() todo: Todo): Todo{
        this.todos.push(todo);
        return todo;
    }

    @Delete(':id')
  deleteTodo(@Param('id') todoId: string): Todo {
    const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
    const deletedTodo = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    return deletedTodo;
  }
  
}
