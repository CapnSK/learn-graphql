import Book from './Book';
import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from '../utils/queries';


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