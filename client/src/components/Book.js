function Book({id, name, author, onClickHandle}) {

    return (
      <div className="Book" onClick={()=>onClickHandle(id)}>
        Book: {name}
      </div>
    );
  }
  
export default Book;  