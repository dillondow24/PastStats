import { Controller, Get, QueryParam } from 'routing-controllers';
import 'reflect-metadata';

@Controller('/hello-world')
export class HelloWorldController {
  @Get('/')
  index() {
    return "hello world!";
  }
}

module.exports = HelloWorldController