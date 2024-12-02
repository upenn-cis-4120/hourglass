'use client'
import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DashboardCard } from "./DashboardCard";

interface DashboardRowProps {
  cards: Array<{ title: string; width: string }>;
}

export const DashboardRow: React.FC<DashboardRowProps> = ({ cards }) => {
  const [items, setItems] = useState(cards);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.title === active.id);
      const newIndex = items.findIndex((item) => item.title === over.id);

      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map((item) => item.title)} strategy={horizontalListSortingStrategy}>
        <div className="mt-3 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {items.map((card) => (
              <SortableCard key={card.title} title={card.title} width={card.width} />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

const SortableCard: React.FC<{ title: string; width: string }> = ({ title, width }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: title });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width, // Ensure card respects the width from props
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`rounded cursor-move ${width}`}
    >
      <DashboardCard title={title} width={width} />
    </div>
  );
};
