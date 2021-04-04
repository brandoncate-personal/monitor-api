import { Module } from '@nestjs/common';
import { InjestService } from './injest.service';
import { InjestController } from './injest.controller';
import { EventsGateway } from 'src/events/events.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [InjestController],
  providers: [InjestService, EventsGateway]
})
export class InjestModule {}
