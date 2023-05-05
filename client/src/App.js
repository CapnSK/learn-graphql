import  BookList  from './components/BookList';
import AddBook from './components/AddBook';
import client from './utils/graphqlClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
