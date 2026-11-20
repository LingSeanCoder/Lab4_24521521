import { Routes, Route } from 'react-router';
import { PEOPLE } from './data/people';
import Layout from './components/Layout';
import NotFoundState from './components/NotFoundState';
import Home from './pages/Home';
import About from './pages/About';
import PeopleLayout from './pages/PeopleLayout';
import PersonDetail from './pages/PersonDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="people" element={<PeopleLayout people={PEOPLE} />}>
          <Route
            index
            element={
              <section className="empty-detail">
                <p>Select a team member from the list to view their details.</p>
              </section>
            }
          />
          <Route path=":id" element={<PersonDetail people={PEOPLE} />} />
        </Route>
        <Route
          path="*"
          element={<NotFoundState backTo="/" backLabel="Back to Home" />}
        />
      </Route>
    </Routes>
  );
};

export default App;