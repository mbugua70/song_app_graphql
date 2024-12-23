import React, {useEffect} from "react";

// graphql-tag it's a helper that help us to write queries inside a component file
import gql from "graphql-tag";
import { toast } from 'react-toastify';
import {useQuery, useMutation} from "@apollo/client";
import { Link } from "react-router-dom";

const Song_List = gql`
  {
      songs {
      id,
      title
    }
  }
`;

const Mutation_Song = gql`
   mutation DELETE_SONG($id: ID){
        deleteSong(id: $id){
          id
        }
   }
`;

function Songlist() {
  const {data, loading, error} = useQuery(Song_List);
  const [deleteSong, {loading: loadingDelete, error: errorDelete, data: dataID} ] = useMutation(Mutation_Song, {
    refetchQueries: [{query: Song_List}]
  })

   let content;

   console.log(loading);

   if(loading){
    content = <p>Loading .....</p>
   }


   if(error){
    content= <p>Ooops an error occured, could not fetch!</p>
   }

   if(!loading && !error){
    content = data.songs.map((songItem) => <li className="collection-item"  key={songItem.id}><Link to={`songs/${songItem.id}`} >{songItem.title}</Link><i className="material-icons" onClick={() => handleDeleteSong(songItem.id)}>delete</i></li>)
   }

  //  handledelete function

   function handleDeleteSong(id){
     deleteSong({variables: {id: id}})
   }

    useEffect(() => {
           if (dataID && !loadingDelete) {
             toast.success("Your song was deleted successfully");

           }
           if (errorDelete) {
             toast.error("Error adding song");

           }
         }, [dataID, errorDelete, loadingDelete]);

  return (
    <div className="row">
     {/* all the react song goes here */}
      <div className="col s12 m12">
      <ul className="collection">
       {content}
     </ul>
      </div>

      <Link to="newsong" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>

    </div>
  )
}




export default Songlist;
