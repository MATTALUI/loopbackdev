// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest'

export class HelloController {
  constructor() {}

  @get('/hello')
  hello(): string {
    return "hello world!!!!!!!!!!"
  }

  @get('/test')
  meow(): object {
    return {works: "fine"}
  }

  @get('/cats')
  cats(): object {
    return {hello: "world"}
  }

  @get('/cats/{id}')
  cat(@param.path.number('id') id: number): object {
    return {
      id: id,
      name: "Garfield"
    }
  }
}
