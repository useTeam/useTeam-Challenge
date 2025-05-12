import { useCallback, useEffect, useState } from "react";
import { useGetColumns } from "../../hooks/useGetColumns";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { Column } from "./Column";
import type { Socket } from "socket.io-client";
import type { IColumn } from "../../interfaces/entities/column";
import { EMIT } from "../../interfaces/services/socket/emit";
import CreateColumn from "./CreateColumn";
import CreateCardFormModal from "./CreateCardFormModal";
import { useCreateCard } from "../../hooks/useCreateCard";
import { ICreateCardDto } from "../../interfaces/entities/card";
import { notifyError, notifySuccess } from "../../helper/notifications";
import { useSocket } from "../../hooks/useSocket";
import { updateCardColumn } from "../../helper/updateCardColumn";
import { Loader } from "../../common/Loader";

interface IBoardProps {
  socket: Socket | null;
}

export default function Board({ socket }: IBoardProps) {
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [openCardModal, setOpenCardModal] = useState(false);
  const [cardModalColumnId, setCardModalColumnId] = useState<string | null>(
    null
  );

  const { columnsData, isPending, refetchColumns } = useGetColumns();
  const { mutateCardCreation } = useCreateCard();

  useSocket(socket, refetchColumns);

  useEffect(() => {
    if (columnsData && columnsData.length > 0) {
      setColumns(columnsData);
    }
  }, [columnsData]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over) return;

      const cardId = active.id as string;
      const newColumn = over.id as string;
      const columnOrigin = active.data.current?.draggingFrom;
      if (columnOrigin === newColumn) return;
      socket?.emit(EMIT.UPDATE_CARD_COLUMN, cardId, newColumn);
      setColumns((prevColumns) =>
        updateCardColumn(prevColumns, cardId, columnOrigin, newColumn)
      );
    },
    [columns, socket]
  );

  const handleCardCreation = (values: {
    title: string;
    description?: string;
  }) => {
    const createCardDto: ICreateCardDto = {
      title: values.title,
      columnId: cardModalColumnId!,
      ...(values.description &&
        values.description !== "" && { description: values.description }),
    };

    mutateCardCreation(createCardDto, {
      onSuccess: () => {
        notifySuccess("Card created successfully!");
        refetchColumns();
        socket?.emit(EMIT.NEW_CARD);
        setCardModalColumnId(null);
      },
      onError: () => notifyError("There was an error creating the card"),
    });
  };

  if (isPending)
    return (
      <div>
        <Loader size={5} />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-y-15 w-full">
      <CreateColumn socket={socket} refetchColumns={refetchColumns} />

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap justify-center gap-4 overflow-x-auto">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              setOpenCardModal={setOpenCardModal}
              setCardModalColumnId={setCardModalColumnId}
            />
          ))}
        </div>
      </DndContext>
      {openCardModal && (
        <CreateCardFormModal
          onClose={() => setOpenCardModal(false)}
          onSubmit={(values) => handleCardCreation(values)}
        />
      )}
    </div>
  );
}
