import React, { Suspense, lazy } from 'react';
import Skeleton from './components/Skeleton';

const PersonDetail = lazy(() => import('./components/PersonDetail'));

const App = () => {
  const mainStyle = {
    padding: '40px',
    fontFamily: 'sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headerStyle = {
    marginBottom: '24px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '16px',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <h1>Exercise 1.1 - Architecture Upgrade</h1>
      </header>
      
      <section style={sectionStyle}>
        <Suspense fallback={<Skeleton />}>
          <PersonDetail />
        </Suspense>
      </section>
    </main>
  );
};

export default App;