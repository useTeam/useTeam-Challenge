import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Column } from "../../infrastructure/column.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ColumnResponseDto } from "../dto/column-response.dto";
import { ColumnMapper } from "../mapper/column.mapper";
import { CardService } from "src/module/card/application/service/card.service";

@Injectable()
export class ColumnService {
 constructor(@InjectModel(Column.name) private columnModel: Model<Column>, private readonly columnMapper: ColumnMapper, @Inject(forwardRef(() => CardService)) private readonly cardService: CardService) { }

  async getAll(): Promise<ColumnResponseDto[]> {
    const columns = await this.columnModel.find().exec();
    const columnsWithCards = await Promise.all(
      columns.map(async (column) => {
        const cards = await this.cardService.getCardsByColumnId(column._id);
        const columnDto = this.columnMapper.fromColumnToColumnResponseDto(column);
        columnDto.cards = cards;
        return columnDto;
      })
    );
    return columnsWithCards;
  }
 async getOneById(id: string): Promise<ColumnResponseDto> {
  const column = await this.columnModel.findById(id).exec();
  if(!column) throw new NotFoundException(`Column with id ${id} not found`);
  return this.columnMapper.fromColumnToColumnResponseDto(column);
 }

 async create(createColumnDto: any): Promise<ColumnResponseDto> {
  const createdColumn = await this.columnModel.create(createColumnDto);
  return this.columnMapper.fromColumnToColumnResponseDto(createdColumn);
 }
}