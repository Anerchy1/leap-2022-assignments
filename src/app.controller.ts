import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello Green class'
    return this.appService.getHello();
  }
  @Get('green')
  getGreen():string {
    return "<h1>Hello WORLD!!!</h1>"
  }
}
