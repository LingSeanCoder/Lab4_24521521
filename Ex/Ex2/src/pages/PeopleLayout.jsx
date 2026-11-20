import { NavLink, Outlet } from 'react-router';

const PeopleLayout = ({ people }) => {
  return (
    <section className="master-detail" aria-label="People Directory">
      <aside className="people-list">
        <h2>Team Directory</h2>
        <nav aria-label="People list">
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                <NavLink
                  to={`/people/${person.id}`}
                  className={({ isActive }) =>
                    isActive ? 'person-item active' : 'person-item'
                  }
                >
                  <strong className="person-name">{person.name}</strong>
                  <span className="person-role">{person.role}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="detail-panel">
        <Outlet />
      </section>
    </section>
  );
};

export default PeopleLayout;