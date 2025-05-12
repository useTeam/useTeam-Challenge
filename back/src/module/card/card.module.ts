import { Module } from "@nestjs/common";
import { CardController } from "./interface/card.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Card, CardSchema } from "./infrastructure/card.schema";
import { CardService } from "./application/service/card.service";
import { CardMapper } from "./application/mapper/card.mapper";
import { ColumnModule } from "../column/column.module";

@Module({
 imports: [MongooseModule.forFeature([{name: Card.name, schema: CardSchema}]), ColumnModule
 ],
 controllers: [CardController],
 providers: [CardService, CardMapper],
 exports: [CardService]
})
 
export class CardModule {}