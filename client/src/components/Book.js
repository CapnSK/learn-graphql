function Book({id, name, author, onClickHandle}) {

    return (
      <div className="Book" onClick={()=>onClickHandle(id)}>
        {name}
      </div>
    );
  }
  
export default Book;  