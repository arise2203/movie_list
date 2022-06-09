import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './containers/List';
import Header from './components/Header/Header';
import MenuHeader from './components/Header/Menu';
import ListRight from './containers/ListRight';
import '../src/css/index.css'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='container-fluid bg-app '>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <Header/>
      </nav>
      <div className="menu"><MenuHeader/></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
          <List />
          </div>
          <div className="col-sm-3">
          <ListRight/>
          </div>
        </div>
      </div>
      <footer>
        
        <Footer></Footer>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
