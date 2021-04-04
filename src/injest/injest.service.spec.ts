import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from 'src/events/events.gateway';
import { InjestService } from './injest.service';

describe('InjestService', () => {
  let service: InjestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [InjestService, EventsGateway],
    }).compile();

    service = module.get<InjestService>(InjestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
