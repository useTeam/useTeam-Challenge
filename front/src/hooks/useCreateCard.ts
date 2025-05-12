import { useMutation } from '@tanstack/react-query';
import { cardService } from '../services/card.service';
import { ICreateCardDto } from '../interfaces/entities/card';


export const useCreateCard = () => {
 const { mutate,isPending, isError } = useMutation({
		mutationFn: (createCardDto: ICreateCardDto)=>cardService.create(createCardDto),
	});

	return { mutateCardCreation: mutate, isPendingCardCreation: isPending , isErrorCardCreation: isError };
};
