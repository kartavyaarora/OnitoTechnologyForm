import './App.css';
import Data from './Components/Data';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Form />}/>
        <Route  path="page1" element={<Form />}/>
        <Route  path="page2" element={<Data />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
