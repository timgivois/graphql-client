import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./App.css";

const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      title
      published
    }
  }
`;

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      published
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id: 2 } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <div>{data.book.title}</div>;
}

export default App;
