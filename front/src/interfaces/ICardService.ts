import type { ApiRequestConfig } from "../services/api.service";
import { ICard, ICreateCardDto } from "./entities/card";

export interface ICardService {
 getAll(config?: ApiRequestConfig): Promise<ICard[]>;
 create(createCardDto: ICreateCardDto): Promise<ICard>;
}