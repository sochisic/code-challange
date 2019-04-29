import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: "Bearer 6a33529a148c67bd91961f1ef35f2f130853f7d3"
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