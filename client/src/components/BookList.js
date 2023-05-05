import Book from './Book';
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from '../utils/queries';


function BookList(){
    const { data, loading, error } = useQuery(GET_ALL_BOOKS);
    return (
        <div className="BookList">
            {
                (!loading && !error && data) ? 
                <ul id="book-list">
                        {
                            data.books.map(book=>{
                                return (<Book key={book.id} {...book}/>);
                            })
                        }
                </ul> : 
                <div>No books to show</div> 
            }
        </div>
    );
}

export default BookList;