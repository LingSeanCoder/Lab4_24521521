import { useParams } from 'react-router';
import NotFoundState from '../components/NotFoundState';

const PersonDetail = ({ people }) => {
  const { id } = useParams();
  const person = people.find((p) => String(p.id) === id);

  if (!person) {
    return (
      <NotFoundState
        title="404 — Person Not Found"
        message={`No team member found with ID "${id}".`}
        backTo="/people"
        backLabel="Back to Directory"
      />
    );
  }

  return (
    <article className="person-card">
      <h2>{person.name}</h2>
      <dl className="person-details">
        <dt>Name:</dt>
        <dd>{person.name}</dd>
        <dt>Role:</dt>
        <dd>{person.role}</dd>
        <dt>Department:</dt>
        <dd>{person.department}</dd>
        <dt>Email:</dt>
        <dd>{person.email}</dd>
        <dt>Bio:</dt>
        <dd>{person.bio}</dd>
      </dl>
    </article>
  );
};

export default PersonDetail;