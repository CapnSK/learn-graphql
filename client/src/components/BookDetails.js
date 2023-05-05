import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_ID } from '../utils/queries';

export default function BookDetails({id}){
    const { data, loading, error } = useQuery(GET_BOOK_BY_ID, {
        variables: {id}
    });
    return (
        <>
            { 
                (data && !loading && !error) ?
                    <>
                        <h2>{data.book.name}</h2>
                        <p>{data.book.genre}</p>
                        <p>{data.book.author.name}</p>
                        <ul className="author-all-books">
                            {
                                data.book.author.books?.map(book=>{
                                        return book.id !== id ? (<li key={book.id} className="book">{book.name}</li>) : "";
                                    })
                            }
                        </ul>
                    </>
                : ""
            }

        </>
    );
}