import Book from './Book';
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from '../utils/queries';
import { useState } from 'react';
import BookDetails from './BookDetails';


function BookList(){
    const { data, loading, error } = useQuery(GET_ALL_BOOKS);
    const [bookSelected, setBookSelected ] = useState("");
    const onBookClick = (id)=>{
        setBookSelected(id);
    }

    return (
        <>
            <div className="BookList">
                {
                    (!loading && !error && data) ? 
                    <ul className="book-list">
                            {
                                data.books.map(book=>{
                                    return (<Book key={book.id} {...book} onClickHandle={onBookClick}/>);
                                })
                            }
                    </ul> : 
                    <div>No books to show</div> 
                }
            </div>
            {<BookDetails id={bookSelected}></BookDetails>}
        </>
    );
}

export default BookList;