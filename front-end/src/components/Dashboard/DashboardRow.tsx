'use client';
import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DashboardCard } from "./DashboardCard";

interface DashboardRowProps {
  cards: Array<{ title: string; width: string }>;
  isDndEnabled: boolean; // New prop for controlling DND
  onReorder: (updatedCards: Array<{ title: string; width: string }>) => void; // Callback to notify parent of changes
}

export const DashboardRow: React.FC<DashboardRowProps> = ({ cards, isDndEnabled, onReorder }) => {
  const [items, setItems] = useState(cards);

  // Synchronize local state with parent-provided cards
  useEffect(() => {
    setItems(cards);
  }, [cards]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.title === active.id);
    const newIndex = items.findIndex((item) => item.title === over.id);

    const updatedItems = arrayMove(items, oldIndex, newIndex);
    setItems(updatedItems); // Update local state
    onReorder(updatedItems); // Notify parent of changes
  };

  return isDndEnabled ? (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.title)} strategy={horizontalListSortingStrategy}>
        <div className="mt-3 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {items.map((card) => (
              <SortableCard key={card.title} title={card.title} width={card.width} isDnd={isDndEnabled} />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  ) : (
    <div className="mt-3 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {items.map((card) => (
          <StaticCard key={card.title} title={card.title} width={card.width} isDnd={isDndEnabled} />
        ))}
      </div>
    </div>
  );
};

const SortableCard: React.FC<{ title: string; width: string; isDnd: boolean }> = ({ title, width, isDnd }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: title });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`rounded cursor-move ${width} focus:outline-none ${isDnd ? "halo-effect" : ""}`}
    >
      <DashboardCard title={title} width={width} />
    </div>
  );
};

const StaticCard: React.FC<{ title: string; width: string; isDnd: boolean }> = ({ title, width, isDnd }) => {
  return (
    <div
      className={`rounded ${width} focus:outline-none ${isDnd ? "halo-effect" : ""}`}
    >
      <DashboardCard title={title} width={width} />
    </div>
  );
};
