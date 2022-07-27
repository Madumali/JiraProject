import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainRoutes from './components/main/MainRoutes';
import Login from './login/Login';


function App() {
  return (
    <div className='App'>

     <Router>
      <>
<Routes>
  <Route path='/login' element={<Login />} />

  
      </Routes>
      <MainRoutes />
      </>
     </Router>
    
    
    </div>
  );
}

export default App;
