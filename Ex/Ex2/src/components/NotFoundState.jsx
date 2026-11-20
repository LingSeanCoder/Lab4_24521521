import { Link } from 'react-router';

const NotFoundState = ({
  title = '404 — Not Found',
  message = 'The requested record or page could not be found.',
  backTo = '/people',
  backLabel = 'Back to Directory',
}) => {
  return (
    <section className="not-found" role="alert" aria-live="polite">
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to={backTo} className="not-found-link">
        {backLabel}
      </Link>
    </section>
  );
};

export default NotFoundState;