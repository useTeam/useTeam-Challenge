import { useQuery } from '@tanstack/react-query';
import { columnService } from '../services/column.service';

export const useGetColumns = () => {
	const {
		data: columnsData,
		isLoading,
		isPending,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['cards'],
		queryFn: () => columnService.getAll(),
	});

	return {
		columnsData,
		isLoading,
		isPending,
		isError,
		error,
		refetchColumns: refetch,
	};
};
