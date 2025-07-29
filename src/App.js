import logo from './logo.svg';
import './App.css';
import MainRout from './routers';
import { useRoutes } from 'react-router-dom';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';

function App() {

  let importRoutes = useRoutes(MainRout)
  return (
   <div className='div'>
    <Header/>
    <div className='div-app'>
      <SideBar/>
      {importRoutes}
    </div>
   </div>
  );
}

export default App;
