import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  create(todo: Todo): void {
    const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
    todo.id = currentMaxId > 0 ? currentMaxId + 1 : 1;
    this.storage.push(todo);
  }

  findAll(): Todo[] {
    return this.storage;
  }

  findOne(id: number): Todo {
    return this.storage.find((t: Todo) => t.id === id);
  }

  remove(id: number): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);

    this.storage.splice(index, 1);
  }

  update(id: number, todo: Todo): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);

    this.storage[index] = todo;
  }
}
