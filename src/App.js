import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';

function App() {
  return (
    <>
      <Header />
      <Search />
      <ItemList />
      <ItemCard />
    </>
  );
}

export default App;
