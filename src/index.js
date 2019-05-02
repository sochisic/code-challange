import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { client } from './dal/apollo';
import './index.css';



const ApolloApp = AppComponent => {
  return (
    <ApolloProvider client={client}>
      <AppComponent />
    </ApolloProvider>
  )
}

ReactDOM.render(ApolloApp(App), document.getElementById('root'));