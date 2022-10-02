import Allroutes from './Routes/Allroutes';
import "./App.css"
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Allroutes />
        </AuthContextProvider>
    </div>
  );
}

export default App;
