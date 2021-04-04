import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EventsGateway } from '../events/events.gateway';
import { CreateInjestDto } from './dto/create-injest.dto';

@Injectable()
export class InjestService {

  constructor(
    private readonly configService: ConfigService,
    private readonly eventsGateway: EventsGateway
  ) { }

  create(createInjestDto: CreateInjestDto) {
    return this.eventsGateway.server.emit(this.configService.get<string>('websocket.channel'), createInjestDto);
  }
}
