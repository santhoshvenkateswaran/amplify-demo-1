import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { Home } from './pages/Home';
import { Header } from './ui-components';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      <Header className="App__Header" width={'100%'} />
      {activePage === 'dashboard' && <Dashboard />}
      {activePage === 'home' && <Home />}
    </div>
  );
}

export default App;
