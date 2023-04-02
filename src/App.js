import { RouterProvider } from 'react-router-dom';
import './App.css';
import Spinner from './components/shared/Spinner';
import routes from "./routes/Routes";
function App() {
  return (
    <div>
      <RouterProvider router={routes} fallbackElement={<Spinner />}/>
    </div>
  );
}

export default App;
