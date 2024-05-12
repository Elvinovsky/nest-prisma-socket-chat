import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Chat } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('chat')
  @Render('index')
  Home(): string {
    return;
  }

  @Get('api/chat')
  async getMessages(): Promise<Chat[]> {
    return this.appService.getMessages();
  }
}
