import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

function Book({id, name, author}) {
    console.log("props: ", id, name, author);
    return (
      <div className="Book">
        Book: {name}
      </div>
    );
  }
  
  export default Book;  