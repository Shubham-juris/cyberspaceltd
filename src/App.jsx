import React from 'react';
import './App.css';
import Router from './Router/Router';
import Header from './Componentes/Common/Header';
import Footer from './Componentes/Common/Footer';


function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
