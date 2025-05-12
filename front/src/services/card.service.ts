import { ICard, ICreateCardDto } from "../interfaces/entities/card";
import type { ICardService } from "../interfaces/ICardService";
import type { IApiService } from "../interfaces/services/IApiService";
import { apiService, type ApiRequestConfig } from "./api.service";

class CardService implements ICardService {
	api: IApiService<ApiRequestConfig>;

	constructor(api: IApiService<ApiRequestConfig>) {
		this.api = api;
 }
 
 getAll(config?: ApiRequestConfig): Promise<ICard[]> {
  return this.api.get("/card", config);
 }

 create(createCardDto: ICreateCardDto): Promise<ICard> {
  return this.api.post("/card", createCardDto);
 }
}

export const cardService = new CardService(apiService);