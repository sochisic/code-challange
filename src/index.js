import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITTOKEN}`
  }
});

const ApolloApp = AppComponent => {
  return (
    <ApolloProvider client={client}>
      <AppComponent />
    </ApolloProvider>
  )
}

ReactDOM.render(ApolloApp(App), document.getElementById('root'));