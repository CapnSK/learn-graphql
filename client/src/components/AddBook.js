import { useState } from "react";
import { GET_ALL_AUTHORS, POST_BOOK, GET_ALL_BOOKS } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";

function AddBook(){
    const { data, loading, error } = useQuery(GET_ALL_AUTHORS);
    const [ bookToAdd, setBookToAdd ] = useState({name:"", genre:"", authorId:""});
    const [ addBookMutation ] = useMutation(POST_BOOK);


    const setNewName = (e) => {
        setBookToAdd((prev)=>{
            return {...prev, name:e.target.value}
        });
    }

    const setNewGenre = (e) => {
        setBookToAdd((prev)=>{
            return {...prev, genre:e.target.value}
        });
    }

    const setNewAuthor = (e) => {
        setBookToAdd((prev)=>{
            return {...prev, authorId:e.target.value}
        });
    }

    const addNewBook = async (e) => {
        e.preventDefault();
        if(bookToAdd?.name && bookToAdd?.authorId){
            const returnData = await addBookMutation({variables: {...bookToAdd}, refetchQueries: [GET_ALL_BOOKS], awaitRefetchQueries: true});
            const { id, name } = returnData.data.addBook;
            console.log("Id of newly created book is", id);
            console.log("name of newly created book is", name);
            alert(`Book added successfully  \nid: ${id} \nname: ${name}`);
        }
    }

    return (
        <>
            <form id="add-book" onSubmit={addNewBook}>
                <div className="field">
                    <label htmlFor="name">Book name: </label>
                    <input type="text" name="name" onChange={setNewName}/>
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" name="genre" onChange={setNewGenre}/>
                </div>
                <div className="field">
                    <label htmlFor="">Author: </label>
                    <select name="author" id="select-author" onChange={setNewAuthor}>
                        <option value="none">Select Author</option>
                        {data && !loading && !error ?
                            data.authors.map(author=>{
                                return <option key={author.id} value={`${author.id}`}>{author.name}</option>;
                            })
                            : ""
                        }
                    </select>
                </div>

                <button className="add-more">+</button>
            </form>
        </>
    );
}

export default AddBook;