import { IsString } from "class-validator";
import { IColumnResponseDto } from "./column-response.dto.interface";
import { CardResponseDto } from "../../../card/application/dto/card.response.dto";

export class ColumnResponseDto implements IColumnResponseDto {
 @IsString()
 id: string;

 @IsString()
 title: string;

 cards?: CardResponseDto[];
}