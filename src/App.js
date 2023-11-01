import { useEffect, useState } from "react";
import "./App.css";
import AddIcon from "./Components/MainCountainer/AddIcon/AddIcon";
import AddNote from "./Components/AddNote/AddNote";
import MainNotesCountainer from "./Components/MainNotes/MainNotesCountainer";
import NoteCountainer from "./Components/Note/NoteCountainer";
import SearchCountainer from "./Components/Search/SearchCountainer";

function App() {
  const saveNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [page, setPage] = useState("main");
  const [notes, setNotes] = useState(saveNotes);
  const [note, setNote] = useState("");
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const AddNotePage = (page) => {
    console.log(page);
    setPage(page);
  };

  const getNewNote = (getNote) => {
    console.log(getNote);
    const newNotesArr = [...notes, getNote];
    setNotes(newNotesArr);
    console.log(notes);
  };
  // Get note id from MainNotesMain
  function handelNote(id) {
    console.log(id);
    setPage("note");
    const note = notes.find((note) => note.id === id);
    setNote(note);
  }

  function handleDelete(deleteId) {
    console.log("deleteId", deleteId);
    const newNotes = notes.filter((note) => note.id !== deleteId);
    setNotes(newNotes);
    setPage("main");
  }
  function backToMain(isBack) {
    if (isBack) {
      setPage("main");
    }
  }
function isSearch(isIt){
  if(isIt){
    setPage("search")
  }
  console.log("search");
}
  return (
    <div className="App w-full min-h-screen px-6 bg-[#252525] relative">
      {page === "search" && <SearchCountainer AddNotePage={AddNotePage} notes={notes} handelNote={handelNote} />}
      {page === "main" && <AddIcon AddNotePage={AddNotePage} />}
      {page === "main" && (
        <MainNotesCountainer
          AddNotePage={AddNotePage}
          notes={notes}
          handelNote={handelNote}
          isSearch={isSearch}
        />
      )}
      {page === "addNote" && (
        <AddNote
          getNewNote={getNewNote}
          AddNotePage={AddNotePage}
          backToMain={backToMain}
        />
      )}
      {page === "note" && (
        <NoteCountainer
          AddNotePage={AddNotePage}
          note={note}
          handleDelete={handleDelete}
          backToMain={backToMain}
        />
      )}
    </div>
  );
}

export default App;
