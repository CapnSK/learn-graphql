import { GET_ALL_AUTHORS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function AddBook(){
    const { data, loading, error } = useQuery(GET_ALL_AUTHORS);
    return (
        <>
            <form id="add-book">
                <div className="field">
                    <label htmlFor="name">Book name: </label>
                    <input type="text" name="name"/>
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" name="genre"/>
                </div>
                <div className="field">
                    <label htmlFor="">Author: </label>
                    <select name="author" id="select-author">
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