import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '@/app/routes/routes'

// TODO: Clean up the code 
const SideNav: React.FC = () => {
  const sideNavLinks = routes
    .flatMap(layout => layout.routes)
  return (
    <nav
      className="fixed left-0 top-0 h-full bg-light-bg-secondary text-light-text-primary  w-52  flex flex-col items-center py-20 shadow-md "
      style={{ zIndex: 100 }}
    >
      {sideNavLinks.map(route => (
        <NavLink
          key={route.name}
          to={{
            pathname: route.path,
          }}
          className={({ isActive }) =>
            `w-full text-center py-3 text-xl font-semibold mb-2 rounded transition ${isActive ? 'bg-accent rounded-2xl  text-light-text-secondary' : 'text-light-text-primary'
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