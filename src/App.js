import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from "./components/Navbar";
import Slides from './components/Slides'
import Banner from './components/Banner';
import Product from "./components/Products";

import './App.css';

function App() {
    const  config = {
        systemName: 'Fresh Skin'
    }
  return (
          <div className="App">
              <Container maxWidth="md">
                  <header className="App-header">
                      <NavBar systemName={ config.systemName}  />
                      <Slides/>
                      <Banner/>
                      <Product/>
                  </header>
              </Container>
          </div>
  );
}
export default App;
