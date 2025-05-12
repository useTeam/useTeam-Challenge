import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageGateway } from '../message/interface/message.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from '../card/card.module';
import { ColumnModule } from '../column/column.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { environmentConfig } from 'src/config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environmentConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database.url'),
      })
    }),
    CardModule,
    ColumnModule,

  ],
  controllers: [AppController],
  providers: [AppService, MessageGateway],
})
export class AppModule {}
