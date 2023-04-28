import Book from './Book';
import { useQuery, gql } from "@apollo/client";

const ALL_BOOKS = gql`
{
    author(id:"64409f0a63ef2cbd763b49a2"){
      name,
      age,
      books{
        id,
        name,
        genre
      }
    }
  }
`;

function BookList(){
    const bookList = [{
        id: "1"
    }];
    const { data, loading, error } = useQuery(ALL_BOOKS);
    console.log("data is ", data);
    return (
        <div className="BookList">
            Hello Booklist
            <ul id="book-list">
                {
                    bookList.map(book=>{
                        return (<Book key={book.id}/>);
                    })
                }
            </ul>
        </div>
    );
}

export default BookList;