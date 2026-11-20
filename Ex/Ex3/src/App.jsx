import SimpleForm from './components/SimpleForm';

const App = () => {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Zero-Effect Form Validation</h1>
        <p>
          Validation runs synchronously via derived state during render: 1
          keystroke triggers 1 render with 0 <code>useEffect</code> hooks.
        </p>
      </header>
      <section aria-label="Registration Form">
        <SimpleForm />
      </section>
    </main>
  );
};

export default App;