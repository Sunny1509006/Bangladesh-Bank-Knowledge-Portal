import React from 'react';
import Home from './Screen/Home';
import AuthProvider from './AuthProvider';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
      <ScrollToTop />
        <div>
          <Home />
        </div>
      {/* </SkeletonTheme> */}
    </AuthProvider>
  );
}

export default App;
