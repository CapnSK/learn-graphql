import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
{
    author(id:"64409f0a63ef2cbd763b49a2"){
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