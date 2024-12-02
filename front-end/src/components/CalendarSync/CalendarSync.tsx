"use client"
import React, { useState } from 'react';
import { BillItem } from './BillItem';
import { BillItemProps } from './types';

export const CalendarSync: React.FC = () => {
  const [bills] = useState<BillItemProps[]>([
    { name: 'Rent', amount: 3800, dueDate: 'Oct 6' },
    { name: 'Water bill', amount: 100, dueDate: 'Oct 10' },
    { name: 'Electricity', amount: 100, dueDate: 'Oct 6' },
    { name: 'Soho House', amount: 100, dueDate: 'Oct 10' },
  ]);

  return (
    <section className="flex flex-col gap-2 items-start text-base rounded-none">
      <h1 className="self-stretch">Sync to calendar</h1>
      {bills.map((bill, index) => (
        <BillItem key={index} {...bill} />
      ))}
    </section>
  );
};