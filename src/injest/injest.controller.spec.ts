import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from 'src/events/events.gateway';
import { InjestController } from './injest.controller';
import { InjestService } from './injest.service';

describe('InjestController', () => {
  let controller: InjestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [InjestController],
      providers: [InjestService, EventsGateway],
    }).compile();

    controller = module.get<InjestController>(InjestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
