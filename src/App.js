
import { useContext} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes,Route } from 'react-router-dom';
import { AppContext } from './Context/AppContextProvider';
import Register from './Pages/Register/Register';
function App() {
  const {user}=useContext(AppContext)

  return (
    <div className="App">
   {
     !user?
     (<Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>)
:
(<Routes>
  <Route path='/' element={<Home/>} />

 </Routes>)
   }
      <>
     
        <Login/>
       <Register/>
        <Home/>
 
      
      </> 
      
    
 
    </div>
  );
}

export default App;
