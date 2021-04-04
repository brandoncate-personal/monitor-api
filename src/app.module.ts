import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { EventsModule } from './events/events.module';
import { InjestModule } from './injest/injest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      load: [configuration],
    }),
    EventsModule,
    InjestModule,
  ],
})
export class AppModule { }
