import React from "react";

// graphql-tag it's a helper that help us to write queries inside a component file
import gql from "graphql-tag";
import {useQuery } from "@apollo/client";

const Song_List = gql`
  {
    songs {
      id,
      title
    }
  }
`;

function Songlist() {
  const {data, loading, error} = useQuery(Song_List);

   let content;

   console.log(loading);

   if(loading){
    content = <p>Loading .....</p>
   }


   if(error){
    content= <p>Ooops an error occured, could not fetch!</p>
   }

   if(!loading && !error){
    content = data.songs.map((songItem) => <li className="collection-item" key={songItem.id}>{songItem.title}</li>)
   }

   console.log(data)
  return (
    <div className="row">
     {/* all the react song goes here */}
      <div className="col s12 m12">
      <ul className="collection">
       {content}
     </ul>
      </div>
    </div>
  )
}




export default Songlist;
