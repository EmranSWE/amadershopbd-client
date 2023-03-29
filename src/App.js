import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import routes from "./routes/Routes";
function App() {
  return (
    <div>
      {/* 
      <Home></Home>
       */}
      <Navbar></Navbar>
      <RouterProvider router={routes} />
      <Footer></Footer>
    </div>
  );
}

export default App;
