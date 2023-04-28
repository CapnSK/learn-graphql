import  BookList  from './components/BookList';
import client from './utils/graphqlClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Hello world
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
