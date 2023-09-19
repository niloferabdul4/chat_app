
import { useContext} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes,Route } from 'react-router-dom';
import { AppContext } from './Context/AppContextProvider';
import Register from './Pages/Register/Register';


function App() {
  const {state:{loggedUser}}=useContext(AppContext)  
  
  
  return (
    <div className="App">
      
     <Routes>
      <Route path='/'>
          <Route index element={loggedUser? (<Home/>):(<Login/>)} />
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />} />
      </Route>
     </Routes>

 
    </div>
  );
}

export default App;
