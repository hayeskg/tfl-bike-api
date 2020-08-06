import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ItemList from './components/ItemList';
import Footer from "./components/Footer"

function App() {

  const [incidents, setIncidents] = useState([]);
  const [location, setLocation] = useState('');
  return (
    <>
      <Header />
      <Search location={location} setLocation={setLocation} setIncidents={setIncidents} />
      {incidents.length > 0 && <ItemList incidents={incidents} location={location} />}
      <Footer />
    </>
  );
}

export default App;
