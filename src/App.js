import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar/index';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
