import { CardResponseDto } from "../../../card/application/dto/card.response.dto";

export interface IColumnResponseDto {
 id: string;
 title: string;
 cards?: CardResponseDto[];
}