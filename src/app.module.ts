import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.DB_USER)

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gp7ekja.mongodb.net/nest-todo`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
