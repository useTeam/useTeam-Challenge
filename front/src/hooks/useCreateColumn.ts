import { useMutation } from '@tanstack/react-query';

import { columnService } from '../services/column.service';
import { ICreateColumnDto } from '../interfaces/entities/column';

export const useCreateColumn = () => {
 const { mutate,isPending, isError } = useMutation({
		mutationFn: (createColumnDto: ICreateColumnDto)=>columnService.create(createColumnDto),

	});

	return { mutateColumnCreation: mutate, isPendingColumnCreation: isPending , isErrorColumnCreation: isError };
};
