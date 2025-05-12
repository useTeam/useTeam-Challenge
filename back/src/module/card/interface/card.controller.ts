import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CardService } from "../application/service/card.service";
import { CardResponseDto } from "../application/dto/card-response.dto.interface";
import { CreateCardDto } from "../application/dto/create-card.dto";

@Controller('card') 
export class CardController {
 constructor( private readonly cardService: CardService) { }
 
 @Get()
 getAll(): Promise<CardResponseDto[]> {
  return this.cardService.getAll();
 }

 @Post()
 create(@Body() createCardDto: CreateCardDto): Promise<CardResponseDto> {
  return this.cardService.create(createCardDto);
 }


}