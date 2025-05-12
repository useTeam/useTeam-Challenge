import { IsNotEmpty, IsString } from "class-validator";
import { ICreateColumnDto } from "./create-column.dto.interface";

export class CreateColumnDto implements ICreateColumnDto {
 @IsString()
 @IsNotEmpty()
 name: string;
}