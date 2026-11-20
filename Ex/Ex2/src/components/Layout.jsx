import { NavLink, Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            People
          </NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;