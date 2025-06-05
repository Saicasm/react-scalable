import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes.ts';

// TODO: Clean up the code 
const SideNav: React.FC = () => {
  const sideNavLinks = routes
    .flatMap(layout => layout.routes)
  return (
    <nav
      className="fixed left-0 top-0 h-full   w-52  flex flex-col items-center py-8 shadow-md"
      style={{ zIndex: 100 }}
    >
      {sideNavLinks.map(route => (
        <NavLink
          key={route.name}
          to={{
            pathname: route.path,
          }}

          className={({ isActive }) =>
            `w-full text-center py-3 text-xl font-semibold mb-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
            }`
          }
          end={route.path === '/'}
        >
          {route.title}
        </NavLink>
      ))}

    </nav>
  );
};

export default SideNav;