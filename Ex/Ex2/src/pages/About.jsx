const About = () => {
  return (
    <section className="page-section">
      <h1>About This Application</h1>
      <p>
        This Multi-Route SPA is built with React 19, Vite, and React Router v7,
        following modern semantic HTML and pure CSS architecture principles.
      </p>
      <ul>
        <li>
          <strong>Declarative Routing:</strong> Uses React Router v7{' '}
          <code>&lt;Routes&gt;</code> and the <code>element</code> prop for
          clean, explicit route matching.
        </li>
        <li>
          <strong>Nested Layouts:</strong> Renders shared navigation chrome
          around dynamic child routes via <code>&lt;Outlet /&gt;</code>.
        </li>
        <li>
          <strong>Active Navigation:</strong> Highlights active routes using the{' '}
          <code>&lt;NavLink&gt;</code> functional <code>className</code>{' '}
          callback.
        </li>
        <li>
          <strong>Master-Detail Directory:</strong> Combines responsive CSS Grid
          layouts with semantic definition lists (<code>&lt;dl&gt;</code>,{' '}
          <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code>) and 404 fallback
          handling.
        </li>
      </ul>
    </section>
  );
};

export default About;