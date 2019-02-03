import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  isComplete: boolean;


  constructor(data?: Partial<Todo>) {
    super(data);
  }

  testMethod():object{
   return {hello: "world!"}
  }
}
