import { Types } from "mongoose";

export interface IUpdateCardDto {
 title?: string;
 description?: string;
 columnId: Types.ObjectId;
}