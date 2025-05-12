import '@nestjs/platform-socket.io';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { CardService } from '../../card/application/service/card.service';

export type SocketAuth = Socket & {
};

@WebSocketGateway({
  transports: ['polling', 'websocket'],
  cors: { origin: '*' },
})
export class MessageGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly cardService: CardService
  ) { }
  @WebSocketServer()
  server: Socket;

  afterInit() {
    return;
  }

  handleConnection() {
    return;
  }

  handleDisconnect() {
    return;
  }

  @SubscribeMessage('update card column')
  async handleUpdateCard(
    @MessageBody() body: { cardId: string; columnId: string },
  ) {
    this.cardService.updateOneById(body[0], { columnId: body[1] });
    this.server.emit('card column updated'); 
  }

  @SubscribeMessage('new column')
  async handleColumnCreated(
  ) {
    this.server.emit('column created');
  }

  @SubscribeMessage('new card')
  async handleCardCreated(
  ) {
    this.server.emit('card created');
  }

 
}
