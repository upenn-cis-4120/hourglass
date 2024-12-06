'use client';

import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DashboardRow } from "./DashboardRow";

export const Dashboard: React.FC = () => {
  const [rows, setRows] = useState([
    { id: "row1", cards: [{ title: "This Month's Budgeting", width: "w-[53%]" }, { title: "Investments", width: "w-[42%]" }] },
    { id: "row2", cards: [{ title: "Savings Track & Forecast", width: "w-[97%]" }] },
    { id: "row3", cards: [{ title: "Recurring Payments", width: "w-[30%]" }, { title: "Transactions", width: "w-[30%]" }, { title: "Accounts", width: "w-[30%]" }] },
    { id: "row4", cards: [{ title: "Projections", width: "w-[30%]" }, { title: "Upcoming Bills", width: "w-[30%]" }, { title: "What You Have Learned So Far", width: "w-[30%]" }] },
  ]);

  const [hydrated, setHydrated] = useState(false);
  const [isDndEnabled, setIsDndEnabled] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = rows.findIndex((row) => row.id === active.id);
    const newIndex = rows.findIndex((row) => row.id === over.id);

    if (oldIndex !== newIndex) {
      setRows((prevRows) => arrayMove(prevRows, oldIndex, newIndex));
    }
  };

  const toggleDnd = () => {
    setIsDndEnabled((prev) => !prev);
  };

  return (
    <main className="flex flex-col px-16 py-5 bg-[#212529] max-md:px-5 font-sans">
      <header className="flex flex-row items-center justify-between z-8 mt-0 text-3xl font-bold text-white">
        <span>Dashboard</span>
        <div
          onClick={toggleDnd}
          className="flex flex-row mx-2 my-2 text-sm font-medium text-[#FF8A3D] rounded hover:pointer cursor-pointer"
        >
          <p className="mx-2 underline underline-offset-2">{isDndEnabled ? "Save Re-order" : "Re-order"}</p>
          <img src='reorder.svg'></img>
        </div>
      </header>
      {isDndEnabled ? (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={rows.map((row) => row.id)}>
            <div className="flex flex-col gap-3 font-extralight">
              {rows.map((row) => (
                <SortableRow
                  key={row.id}
                  id={row.id}
                  cards={row.cards}
                  isDndEnabled={isDndEnabled}
                  onReorder={(updatedCards) =>
                    setRows((prevRows) =>
                      prevRows.map((r) => (r.id === row.id ? { ...r, cards: updatedCards } : r))
                    )
                  }
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <div className="flex flex-col gap-3 font-extralight">
          {rows.map((row) => (
            <DashboardRow
              key={row.id}
              cards={row.cards}
              isDndEnabled={isDndEnabled}
              onReorder={(updatedCards) =>
                setRows((prevRows) =>
                  prevRows.map((r) => (r.id === row.id ? { ...r, cards: updatedCards } : r))
                )
              }
            />
          ))}
        </div>
      )}
    </main>
  );
};

const SortableRow: React.FC<{
  id: string;
  cards: Array<{ title: string; width: string }>;
  isDndEnabled: boolean;
  onReorder: (updatedCards: Array<{ title: string; width: string }>) => void; // Forwarded prop
}> = ({ id, cards, isDndEnabled, onReorder }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto", // Ensure the row appears on top while dragging
  };

  return (
    <div
      ref={setNodeRef} // Attach the drag-and-drop ref
      style={style} // Apply dynamic drag styles
      {...(isDndEnabled ? { ...attributes, ...listeners } : {})} // Only apply drag-and-drop if enabled
      className="rounded cursor-move"
    >
      <DashboardRow cards={cards} isDndEnabled={isDndEnabled} onReorder={onReorder} />
    </div>
  );
};
