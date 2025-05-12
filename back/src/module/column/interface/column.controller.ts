import { Body, Controller, Get, Post } from "@nestjs/common";
import { ColumnService } from "../application/service/column.service";
import { ColumnResponseDto } from "../application/dto/column-response.dto";
import { CreateColumnDto } from "../application/dto/create-column.dto";

@Controller('column')
export class ColumnController {
 constructor(private readonly columnService: ColumnService) { }

 @Get()
 getAll(): Promise<ColumnResponseDto[]> {
  return this.columnService.getAll();
 }

 @Post()
 create(@Body() createColumnDto: CreateColumnDto): Promise<ColumnResponseDto> {
  console.log({createColumnDto})
  return this.columnService.create(createColumnDto);
 }

}