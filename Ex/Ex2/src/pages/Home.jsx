import { Link } from 'react-router';

const Home = () => {
  return (
    <section className="page-section">
      <h1>Multi-Route SPA Architecture</h1>
      <p>
        Welcome to Lab 4 Exercise 2. This single-page application demonstrates
        declarative routing with React Router v7, shared nested layouts, and a
        responsive Master-Detail directory built with semantic HTML and CSS
        Grid.
      </p>
      <Link to="/people" className="cta-link">
        Explore People Directory
      </Link>
    </section>
  );
};

export default Home;