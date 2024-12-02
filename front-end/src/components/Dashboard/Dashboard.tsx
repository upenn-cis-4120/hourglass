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
    { id: "row3", cards: [{ title: "Recurring Payments", width: "w-[33%]" }, { title: "Transactions", width: "w-[30%]" }, { title: "Accounts", width: "w-[30%]" }] },
    { id: "row4", cards: [{ title: "Projections", width: "w-[33%]" }, { title: "Upcoming Bills", width: "w-[30%]" }, { title: "What You Have Learned So Far", width: "w-[30%]" }] },
  ]);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensure the component only renders drag-and-drop logic on the client
  }, []);

  if (!hydrated) return null; // Prevent rendering until hydration

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = rows.findIndex((row) => row.id === active.id);
    const newIndex = rows.findIndex((row) => row.id === over.id);

    if (oldIndex !== newIndex) {
      setRows((prevRows) => arrayMove(prevRows, oldIndex, newIndex));
    }
  };

  return (
    <main data-layername="desktop11" className="flex flex-col px-16 py-5 bg-[#212529] max-md:px-5">
      {/* <div style={{ transform: "scale(0.9)", transformOrigin: "top" }}> */}
      <header className="z-8 self-start mt-0 text-3xl font-bold text-white">
        Dashboard
      </header>
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={rows.map((row) => row.id)}>
        <div className="flex flex-col gap-3 font-extralight">
          {rows.map((row) => (
            <SortableRow key={row.id} id={row.id} cards={row.cards} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
    {/* </div> */}
    </main>
  );
};

const SortableRow: React.FC<{ id: string; cards: Array<{ title: string; width: string }> }> = ({ id, cards }) => {
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
      {...attributes} // Drag-and-drop ARIA attributes
      {...listeners} // Drag-and-drop event listeners
      className="rounded cursor-mov"
    >
      <DashboardRow cards={cards} />
    </div>
  );
};
