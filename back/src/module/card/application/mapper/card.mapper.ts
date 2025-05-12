import { Injectable } from "@nestjs/common";
import { Card, CardDocument } from "../../infrastructure/card.schema";
import { CardResponseDto } from "../dto/card.response.dto";
import { CreateCardDto } from "../dto/create-card.dto";
import { Types } from "mongoose";

@Injectable()
export class CardMapper {
 fromCardToCardResponseDto(card: CardDocument): CardResponseDto {
  const cardResponseDto = new CardResponseDto();

  cardResponseDto.id = card._id.toString(); 
  cardResponseDto.title = card.title;
  cardResponseDto.description = card.description;
  cardResponseDto.columnId = card.columnId.toString();

  return cardResponseDto;

 }

 fromCreateCardDtoToCard(createCardDto: CreateCardDto): Card {
  const card = new Card();

  card.title = createCardDto.title;
  card.description = createCardDto.description;
  card.columnId = new Types.ObjectId(createCardDto.columnId);

  return card;
 }
}