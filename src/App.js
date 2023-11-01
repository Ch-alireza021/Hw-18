import { useState } from "react";
import "./App.css";
import AddIcon from "./Components/MainCountainer/AddIcon/AddIcon";
import AddNote from "./Components/AddNote/AddNote";
import MainNotesCountainer from "./Components/MainNotes/MainNotesCountainer";
import NoteCountainer from "./Components/Note/NoteCountainer";

function App() {
  const [page, setPage] = useState("main");
  const [notes,setNotes]=useState([])

  const AddNotePage = (page) => {
    console.log(page);
    setPage(page);
  };

  const getNewNote=(getNote)=>{
console.log(getNote);
const newNotesArr=[...notes,getNote]
setNotes(newNotesArr);
console.log(notes);
  }

  function handelNote(get){
    console.log(get);
    console.log("hi");
    setPage("note");
    
  }

  return (
    <div className="App w-full min-h-screen px-6 bg-[#252525] relative">
    {page==="addNote" && <AddNote getNewNote={getNewNote} AddNotePage={AddNotePage} />}
      {/* <HeaderCountainer page={page} /> */}
       {page=== "main" && <AddIcon AddNotePage={AddNotePage} />}
       {page=== "main" && <MainNotesCountainer AddNotePage={AddNotePage} notes={notes} handelNote={handelNote} />}
       {page=== "note" && <NoteCountainer AddNotePage={AddNotePage} notes={notes} handelNote={handelNote} />}
       {/* <MainCountainer page={page} /> */}
    </div>
  );
}

export default App;
