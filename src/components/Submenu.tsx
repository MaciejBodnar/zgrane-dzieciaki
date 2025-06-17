import React from 'react';
import { NavLink, To } from 'react-router-dom';

interface SubmenuProps {
  link?: string;
  children?: React.ReactNode;
  label?: string;
}

export const Submenu = ({ link, label, children }: SubmenuProps) => {
  return (
    <div className="min-w-full h-full p-2">
      <NavLink
        to={link as To}
        className="flex p-4 text-gray-600 hover:text-gray-900  text-center items-center justify-center gap-2"
      >
        {children}
        <span>{label}</span>
      </NavLink>
    </div>
  );
};
