import { useDraggable } from "@dnd-kit/core";
import type { ICard } from "../../interfaces/entities/card";

interface ICardProps {
  card: ICard;
}

export function Card({ card }: ICardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      draggingFrom: card.columnId,
    },
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <h2 className="font-medium text-neutral-100">{card.title}</h2>
      <p className="mt-2 text-sm text-neutral-400">{card.description}</p>
    </div>
  );
}
