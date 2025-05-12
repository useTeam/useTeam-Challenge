import { forwardRef, Module } from "@nestjs/common";
import { ColumnController } from "./interface/column.controller";
import { ColumnService } from "./application/service/column.service";
import { Column, ColumnSchema } from "./infrastructure/column.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ColumnMapper } from "./application/mapper/column.mapper";
import { CardModule } from "../card/card.module";

@Module({
 imports: [
  MongooseModule.forFeature([
   { name: Column.name, schema: ColumnSchema }
  ]),
  forwardRef(() => CardModule)
 ],
 controllers: [ColumnController],
 providers: [ColumnService, ColumnMapper],
 exports: [ColumnService]
})

export class ColumnModule {}