import  BookList  from './Components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Hello
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
