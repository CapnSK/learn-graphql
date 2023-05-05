import { gql } from "@apollo/client";


export const POST_BOOK = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            id,
            name
        }
    }

`;


export const GET_AUTHOR_BY_ID = (id)=>gql`
{
    author(id:"${id}"){
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

export const GET_ALL_BOOKS = gql`
{
    books{
        name,
        id,
        author{
            name
        }
    }
}
`;

export const GET_ALL_AUTHORS = gql`
{
    authors{
        name,
        id,
        books{
            name
            genre
        }
    }
}
`