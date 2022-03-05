import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      published
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.books.map((book) => (
        <div>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Books;
