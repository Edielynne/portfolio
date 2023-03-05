import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import Footer from './Footer';
import Timeline from './Timeline';
import Info from './Info';
import Contactus from './contact';
import { useRoutes} from 'react-router-dom'

const Routing = () =>{
  let routes = useRoutes([
    { path: "/", element: <Profile/> },
    { path: "/contactme", element: <Contactus/> }
  ]);
  return routes;
}

function App() {
  return (
    <div className="bg-pink-200 bg-fixed  ">
     <Routing/>
    </div>
  );
}

export default App;
