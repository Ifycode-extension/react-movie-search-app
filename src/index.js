
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from './components/searchMovie';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
  render() {
    return (
      <>
      <main className="container">
        <h1 className="title"> React Movie Search App</h1>
        <SearchMovies/>
      </main>
      <Footer/>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));



/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
