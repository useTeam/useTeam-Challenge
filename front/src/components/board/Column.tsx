import { useDroppable } from "@dnd-kit/core";
import { Card } from "./Card";
import type { IColumn } from "../../interfaces/entities/column";

interface IColumnProps {
  column: IColumn;
  setOpenCardModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCardModalColumnId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Column({
  column,
  setOpenCardModal,
  setCardModalColumnId,
}: IColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-64 min-w-[16rem] flex-col rounded-lg bg-neutral-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-neutral-100 text-center self-center truncate max-w-[80%]">
          {column.title}
        </h2>
        <button
          className="bg-black text-white text-[20px] px-2 text-center  rounded-full cursor-pointer"
          onClick={() => {
            setOpenCardModal(true);
            setCardModalColumnId(column.id);
          }}
        >
          +
        </button>
      </div>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
