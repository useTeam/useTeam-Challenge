import { IsOptional, IsString } from "class-validator";
import { IUpdateCardDto } from "./update-card.dto.interface";
import { Types } from "mongoose";

export class UpdateCardDto implements IUpdateCardDto {
 @IsString()
 @IsOptional()
 title?: string;

 @IsString()
 @IsOptional()
 description?: string;

 columnId: Types.ObjectId;
}