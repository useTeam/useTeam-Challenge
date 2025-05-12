import { Injectable } from "@nestjs/common";
import { ColumnDocument } from "../../infrastructure/column.schema";
import { ColumnResponseDto } from "../dto/column-response.dto";

@Injectable()
export class ColumnMapper {
 fromColumnToColumnResponseDto(column: ColumnDocument): ColumnResponseDto {
  const columnResponseDto = new ColumnResponseDto();
  columnResponseDto.id = column._id.toString();
  columnResponseDto.title = column.name;

  return columnResponseDto;
 }
  
}