import {Entity, model, property} from '@loopback/repository';
import {hasMany} from '@loopback/repository';
import {Todo} from './todo.model';

@model()
export class TodoList extends Entity {
  @hasMany(() => Todo)
  todos?: Todo[];

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;


  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}
