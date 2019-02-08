// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import {repository} from '@loopback/repository';
import {TodoListRepository} from '../repositories';

export class TodoListTodoController {
  constructor(
    @repository(TodoListRepository) protected todoListRepo: TodoListRepository,
  ) {}
}
