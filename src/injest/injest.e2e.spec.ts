import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { InjestModule } from './injest.module';
import { InjestService } from './injest.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { EventsModule } from 'src/events/events.module';
import { SocketIoAdapter } from 'src/adapters/socket-io.adapter';

describe('Injest', () => {
    let app: INestApplication;
    let injestService = { create: (data) => 'test' };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [EventsModule, InjestModule],
        })
            .overrideProvider(InjestService)
            .useValue(injestService)
            .compile();

        app = moduleRef.createNestApplication();
        app.useWebSocketAdapter(new SocketIoAdapter(app, true));
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    it(`/POST injest - success`, () => {
        return request(app.getHttpServer())
            .post("/injest")
            .send({
                name: "fake name",
                statusCode: 200,
                stdout: "fake stdout"
            })
            .expect(201)
            .expect('test');
    });

    it(`/POST injest - error validation`, () => {
        return request(app.getHttpServer())
            .post("/injest")
            .send({
                name: "fake name",
                statusCode: "bla bla",
                stdout: "fake stdout"
            })
            .expect(400)
            .expect({ 
                "statusCode": 400, 
                "message": ["statusCode must be one of the following values: 200, 300, 400, 500", "statusCode must be a number conforming to the specified constraints"], 
                "error": "Bad Request" 
            });
    });

    afterAll(async () => {
        await app.close();
    });
});