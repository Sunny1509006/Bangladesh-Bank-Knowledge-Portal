import React from 'react';
import Home from './Screen/Home';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div>
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
