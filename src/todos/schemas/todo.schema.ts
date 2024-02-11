import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ default: false })
  deleted: boolean; // New field to indicate soft deletion
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
