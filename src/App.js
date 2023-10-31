import { useState } from "react";
import "./App.css";
import AddIcon from "./Components/MainCountainer/AddIcon/AddIcon";
// import HeaderCountainer from "./Components/HeaderCountainer/HeaderCountainer";
// import MainCountainer from "./Components/MainCountainer/MainCountainer";
import AddNote from "./Components/AddNote/AddNote";

function App() {
  const [page, setPage] = useState("main");
  const [notes,setNotes]=useState([])

  const AddNotePage = (page) => {
    setPage(page);
  };

  const getNewNote=(getNote)=>{
// console.log(getNote);
// const newNotesArr=[...notes,getNote]
// setNotes(newNotesArr);
// console.log(notes);
  }
  return (
    <div className="App w-full min-h-screen px-6 bg-[#252525] relative">
    {page==="addNote" && <AddNote getNewNote={getNewNote} AddNotePage={AddNotePage} />}
      {/* <HeaderCountainer page={page} /> */}
       {page=== "main" && <AddIcon AddNotePage={AddNotePage} />}
       {/* <MainCountainer page={page} /> */}
    </div>
  );
}

export default App;
