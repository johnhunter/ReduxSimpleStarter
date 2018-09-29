import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostsShow from './containers/posts_show'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/posts/:id" component={PostsShow}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
