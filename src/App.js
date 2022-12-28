import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Header } from './ui-components';

function App() {
  const [activePage, setActivePage] = useState('home');

  const addActiveClass = (pageName) => (activePage === pageName ? ' Header__MenuItem-active' : '');

  const headerProperties = {
    Home: {
      className: 'Header__MenuItem' + addActiveClass('home'),
      onClick: () => setActivePage('home'),
    },
    Dashboard: {
      className: 'Header__MenuItem' + addActiveClass('dashboard'),
      onClick: () => setActivePage('dashboard'),
    },
  };

  return (
    <div className="App">
      <Header className="App__Header" width={'100%'} overrides={headerProperties} />
      {activePage === 'dashboard' && <Dashboard />}
      {activePage === 'home' && <Home />}
    </div>
  );
}

export default App;
