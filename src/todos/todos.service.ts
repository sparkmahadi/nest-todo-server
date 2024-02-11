import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {
    const mongoURI = process.env.MONGO_URI;
    // Use mongoURI to connect to the database
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find({ deleted: false }).exec();
  }

  async findById(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id, deleted: false }).exec();
  }

  async create(todo: Todo): Promise<Todo> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async update(id: string, updatedTodo: Todo): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, updatedTodo, { new: true }).exec();
  }

  async softDelete(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    ).exec();
  }

  async restore(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(
      id,
      { deleted: false },
      { new: true }
    ).exec();
  }

  async permanentDelete(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
