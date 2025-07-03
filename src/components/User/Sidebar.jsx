import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: '/dashboard.png', path: '/dashboard' },
  { label: 'NewTicket', icon: '/Newticket.png', path: '/newticket' },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="fixed top-[90px] left-0 w-[250px] h-[934px] bg-[rgba(106,103,103,0.21)] pt-4">
      {navItems.map(({ label, icon, path }) => {
        const active = pathname === path;

        return (
          // reserve 2 rem (pl‑8) so text never shifts
          <NavLink
            key={path}
            to={path}
            className="relative flex items-center py-2 pl-8"
          >
            {/* arrow: absolutely positioned in the reserved space */}
            {active && (
              <img
                src="/arrow.png"
                alt=""
                className="absolute left-2 w-5 h-5"
              />
            )}

            {/* nav icon / text */}
            <img
              src={icon}
              alt={label}
              className="w-[190px] h-[35px] object-contain"
            />
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
