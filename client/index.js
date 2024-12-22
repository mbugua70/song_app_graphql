import React from 'react';
import "./style/style.css";
import ReactDOM from 'react-dom/client';
// import {ApolloClient} from "apollo-client";
import {ApolloClient, InMemoryCache, gql, HttpLink, ApolloProvider} from '@apollo/client';


import RootRouter from './nestedcomponent/RootRouter';





const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql' // Your GraphQL server URL
  }),
 cache: new InMemoryCache(),
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <RootRouter/>
    </ApolloProvider>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)



// apollo store
// this is what will be used to communicate with our graphql server.
// this is the client side repository of all the data that is coming from our graphql server.
//  between our graphql server we have the apollo store and apollo Provider

// apollo provider - this is the intergration layer between the apollo store and our react app.
// takes data from our store(apollo store and inject into our react app)