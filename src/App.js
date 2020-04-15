import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_STORES = gql`
  {
    stores(count: 1) {
      id
      type
      location
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_STORES);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Oops...failed query!</p>;

  return (
    <>
      <h2>Macy's Stores </h2>
      {data.stores.map((store, id) => (
        <p key={id}>
          {store.type}/{store.location}
        </p>
      ))}
    </>
  );
}

export default App;
