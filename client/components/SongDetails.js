import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {gql, useQuery} from "@apollo/client";


 // graphql gql
 const QUERY_SONG =gql`
 query Song_Query($id: ID!){
   song(id: $id){
     title
   }
 }
`;

function SongDetails() {
    const params = useParams();
    const {data, loading, error} = useQuery(QUERY_SONG,{
      variables: {id: params.id}
    });

    console.log(data);

    let content;

      if(loading){
        content = <p>Loading data....</p>
      }

      if(!error && !loading){
        content = (
          <div className="song-detail">
            <p>{data.song.title}</p>
            <i className='material-icons'>favorite_border</i>
          </div>
        )
      }

      if(!data && error){
        content = <p>Failed to fetch song detail</p>
      }



  return (
    <div className='card'>
        {content}

    </div>
  )
}

export default SongDetails
