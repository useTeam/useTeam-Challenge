import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Card } from "../../infrastructure/card.schema";
import { Model, Types } from "mongoose";
import { CardMapper } from "../mapper/card.mapper";
import { CardResponseDto } from "../dto/card.response.dto";
import { CreateCardDto } from "../dto/create-card.dto";
import { ColumnService } from "src/module/column/application/service/column.service";
import { UpdateCardDto } from "../dto/update-card.dto";

@Injectable()
export class CardService {
 constructor(
  @InjectModel(Card.name) private cardModel: Model<Card>,
  private readonly cardMapper: CardMapper,
  @Inject(forwardRef(() => ColumnService)) private readonly columnService: ColumnService
 ) {}
 
 async getAll(): Promise<CardResponseDto[]> {
  const cards = await this.cardModel.find().exec();
  return cards.map((card)=> this.cardMapper.fromCardToCardResponseDto(card));
 }

 async getCardsByColumnId(columnId: Types.ObjectId): Promise<CardResponseDto[]> {
  const cards = await this.cardModel.find({ columnId }).exec();
  return cards.map(card => this.cardMapper.fromCardToCardResponseDto(card));
 }

 async create(createCardDto: CreateCardDto): Promise<CardResponseDto> {
  await this.columnService.getOneById(createCardDto.columnId);

  const createdCard = await this.cardModel.create(this.cardMapper.fromCreateCardDtoToCard(createCardDto));
  return this.cardMapper.fromCardToCardResponseDto(createdCard);
  
 }

 async updateOneById(id: string, updateCardDto: UpdateCardDto): Promise<CardResponseDto> {
  if (updateCardDto.columnId) {
   updateCardDto.columnId = new Types.ObjectId(updateCardDto.columnId);
  }
  const updatedCard = await this.cardModel.findByIdAndUpdate(id, updateCardDto, { new: true }).exec();
  if(!updatedCard) throw new NotFoundException(`Card with id ${id} not found`);
  return this.cardMapper.fromCardToCardResponseDto(updatedCard);

 }
}