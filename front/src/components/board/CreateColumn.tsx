import { useState } from "react";
import { useCreateColumn } from "../../hooks/useCreateColumn";
import { ICreateColumnDto } from "../../interfaces/entities/column";
import { notifyError, notifySuccess } from "../../helper/notifications";
import { Loader } from "../../common/Loader";
import { EMIT } from "../../interfaces/services/socket/emit";
import { Socket } from "socket.io-client";

interface ICreateColumnProps {
  refetchColumns: () => void;
  socket?: Socket | null;
}

export default function CreateColumn({
  socket,
  refetchColumns,
}: ICreateColumnProps) {
  const [newColumn, setNewColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const { mutateColumnCreation, isPendingColumnCreation } = useCreateColumn();

  const handleColumnCreation = (createColumnDto: ICreateColumnDto) => {
    mutateColumnCreation(createColumnDto, {
      onSuccess: () => {
        notifySuccess("Column created successfully!");
        setNewColumnTitle("");
        refetchColumns();
        socket?.emit(EMIT.NEW_COLUMN);
      },
      onError: () => notifyError("There was an error creating the column"),
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <button
        className="bg-black text-white text-lg p-4 rounded-full  cursor-pointer"
        onClick={() => !newColumn && setNewColumn(true)}
      >
        Add new column
      </button>
      {newColumn && (
        <div className="flex flex-col justify-center items-center gap-y-2 mb-4 ">
          <input
            type="text"
            value={newColumnTitle}
            maxLength={20}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-white"
          />

          <div className="flex justify-center items-center ">
            <button
              onClick={() => handleColumnCreation({ name: newColumnTitle })}
              className={`cursor-pointer  text-white px-4 py-2 rounded-full border-gray-800  ${
                isPendingColumnCreation || newColumnTitle === ""
                  ? "bg-gray-500"
                  : "bg-black"
              }`}
              disabled={isPendingColumnCreation || newColumnTitle === ""}
            >
              {isPendingColumnCreation ? <Loader size={1} /> : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
