import React from 'react';
import Home from './Screen/Home';
import AuthProvider from './AuthProvider';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <AuthProvider>
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
        <div>
          <Home />
        </div>
      {/* </SkeletonTheme> */}
    </AuthProvider>
  );
}

export default App;
