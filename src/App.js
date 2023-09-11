
import { useContext} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes,Route } from 'react-router-dom';
import { AppContext } from './Context/AppContextProvider';

function App() {
  const {state:{user}}=useContext(AppContext)

  return (
    <div className="App">
   
      <>
      <Routes>
         <Route path='/login' element={!user? (<Login />):(<Home/>)} />
         <Route path='/' element={user? (<Home />):(<Login/>)} />  
      </Routes>
      
      </> 
      
    
 
    </div>
  );
}

export default App;
