import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from './components/Header';
import WhatsappBtn from './components/WhatsappBtn';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <WhatsappBtn/>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;