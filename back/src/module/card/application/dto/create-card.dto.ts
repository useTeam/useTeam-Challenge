import { ICreateCardDto } from "./create-card.dto.interface";
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCardDto implements ICreateCardDto {
 @IsString()
 @IsNotEmpty()
 title: string;

 @IsString()
 @IsOptional()
 description: string;

 @IsString()
 columnId: string;
}