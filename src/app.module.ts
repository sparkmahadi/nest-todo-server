import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot('mongodb+srv://nextRepUser:3WtLqEqkTZCJmLpp@cluster0.gp7ekja.mongodb.net/nest-todo')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
