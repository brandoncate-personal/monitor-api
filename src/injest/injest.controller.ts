import { Controller, Post, Body } from '@nestjs/common';
import { InjestService } from './injest.service';
import { CreateInjestDto } from './dto/create-injest.dto';

@Controller('injest')
export class InjestController {
  constructor(private readonly injestService: InjestService) {}

  @Post()
  create(@Body() createInjestDto: CreateInjestDto) {
    return this.injestService.create(createInjestDto);
  }
}
