/**
 * This code was generated by Builder.io.
 */
import React from 'react';

type AccountRowProps = {
  name: string;
  balance: string;
};

export const AccountRow: React.FC<AccountRowProps> = ({ name, balance }) => {
  return (
    <div className="flex justify-between items-center mb-2 font-light">
      <span>{name}</span>
      <span className="text-right whitespace-nowrap">{balance}</span>
    </div>
  );
};