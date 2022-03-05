import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      published
    }
  }
`;

function Book() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Link to="/books">Back</Link>
      <div>Id: {data.book.id}</div>
      <div>title: {data.book.title}</div>
      <div>published: {data.book.published}</div>
    </div>
  );
}

export default Book;
