import { gql } from "@apollo/client";

export const GET_AUTHOR_BYID = (id)=>gql`
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