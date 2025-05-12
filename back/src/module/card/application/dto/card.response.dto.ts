import { IsString } from "class-validator";

export class CardResponseDto {
 @IsString()
 id: string;

 @IsString()
 title: string;

 @IsString()
 description: string;
 
 @IsString()
 columnId: string;
}