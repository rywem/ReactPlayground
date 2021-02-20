import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div>
      
    </div>
  );
}
*/
export default App;
