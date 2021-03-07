import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);

  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log('Handling create() request');
    this.todoService.create(todo);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.logger.log(`Handling remove() request with id: ${id}`);
    return this.todoService.remove(id);
  }

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findAll() request');
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log(`Handling findOne() request with id: ${id}`);
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo) {
    this.logger.log(`Handling update() request with id: ${id}`);
    return this.todoService.update(id, todo);
  }
}
