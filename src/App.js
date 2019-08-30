import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Blog from './containers/Blog';
import './App.css';

class App extends Component {
  render() {
    //Here the <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
    return (
      <Provider store={store}>
        <div className="App">
          <Blog />
        </div>
      </Provider>
    );
  }
}

export default App;
