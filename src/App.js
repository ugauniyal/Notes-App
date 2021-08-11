import React, { useState, useEffect } from 'react';
import './App.css';
import { Notes } from "./MyComponents/Notes";
import { Footer } from "./MyComponents/Footer";
import { NoteAdd } from "./MyComponents/NoteAdd";

function App() {
  let initNote;
  if (localStorage.getItem("notes")===null)
  {
    initNote = [];
  }
  else
  {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }

  const addNote = (title,desc) => {
    let sno;
    if (notes.length === 0)
    {
      sno = 1;
    }
    else
    {
      sno = notes[notes.length - 1].sno + 1;
    }

    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setNotes([...notes, myNote]);
    console.log(myNote)

    if(localStorage.getItem("notes"))
    {
      localStorage.setItem("notes", JSON.stringify(notes));
    }

  }

  const onDelete = (note) => {
    // console.log("Delete", notes);
    setNotes(notes.filter((e) =>{
      return e!==note;
    }));
    localStorage.setItem("notes", JSON.stringify(notes))
  }


  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  let myStyle1 = {textAlign : 'center', paddingBottom: '1%', paddingTop: '2px', backgroundColor: '#000000d7', color:'white'}

  return (
    <>
      <h1 style={myStyle1}>NOTES APP</h1>
      <br />
      <br />
      <NoteAdd addNote={addNote}/>
      <Notes notes={notes} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
