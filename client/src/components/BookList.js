import Book from './Book';

function BookList(){
    const bookList = [{
        id: "1"
    }];
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