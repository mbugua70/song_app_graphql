import React, { useState, useEffect } from 'react'
import gql  from "graphql-tag";
import {useMutation} from "@apollo/client"
import { toast } from 'react-toastify';


// graphqlgql
const Mutation_Song = gql`
 mutation  AddSong($title: String){
    addSong(title: $title){
        id
    }
 }
`;


function SongForm() {
    const [title, setTitle] = useState("");
    const [addSong, {loading, data, error}] = useMutation(Mutation_Song)

    const handleTitleInput =(event)=>{
        setTitle(event.target.value)
    }

    // submit function
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(loading)
        addSong({variables: {title: title}})

    }

    useEffect(() => {
        if (data && !loading) {
          toast.success("Your song was added successfully");
          setTitle("");
        }
        if (error) {
          toast.error("Error adding song");

        }
      }, [data, error, loading]);




  return (
    <>
    <div className="row">
     <h3>Add New Song</h3>
    <form onSubmit={handleSubmit}>
     <div className="input-field col s12">
       <span>Title</span><br/>
        <input id="song-title" placeholder="Enter song title" type="text" onChange={handleTitleInput} value={title}/>
      </div>

     <div className="input-fielzd col s12 center_it">
      <button  className="btn-large  margin-bottom waves-effect waves-light pick_color">{loading ? "Adding.." : "Add Song"}<i className="fa fa-send"></i></button>

    </div>
    </form>
    </div>

    </>
  )
}

export default SongForm;
