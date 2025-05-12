import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ColumnDocument = HydratedDocument<Column>;

@Schema()
export class Column {
  @Prop({ required: true })
  name: string;
}

export const ColumnSchema = SchemaFactory.createForClass(Column);
