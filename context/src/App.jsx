import React from 'react';
import { MyProvider } from './Somecontext';
import { MyContext } from './Somecontext';
import { useContext } from 'react';

const MyConsumer = () => {
  // Access the shared data from the context
  const data = useContext(MyContext);

  return <div>{data}</div>;
};

// Use the provider to wrap components that need access to the context
const App = () => {
  return (
    <MyProvider>
      <div>
        <h1>App Component</h1>
        {/* The consumer component can access the shared data */}
        <MyConsumer />
      </div>
    </MyProvider>
  );
};

export default App;
