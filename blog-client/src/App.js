import React from 'react';
import IndexScreen from './screens/IndexScreen';
import { Provider as AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <IndexScreen />
    </AuthProvider>
  );
};
export default App;
