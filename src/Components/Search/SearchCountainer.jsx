import { useState } from "react";
import SearchHeader from "./SearchHeader";
import SearchMain from "./SearchMain";


const SearchCountainer=({notes,handelNote})=>{
    const [searchNotes, setSearchNotes] = useState([]);
    console.log(notes);
    const searchInput = (event) => {
        console.log(event.target.value);
        const searchingNotesTitle=notes.filter((note)=>note.title.toLowerCase().includes(event.target.value.toLowerCase()));
        const searchingNotesDescription=notes.filter((note)=>note.description.toLowerCase().includes(event.target.value.toLowerCase()));
        const finalData = [...searchingNotesTitle, ...searchingNotesDescription];
        const uniqData = new Set(finalData);
        const uniqDataArr =Array.from(uniqData);
        setSearchNotes(uniqDataArr)

        // if(event.target.value){
        //   const newAddednotess=addednotess.includes((notes)=>notes.id===searchnotes[0].id) ? addednotess : [...searchnotes]
        //   console.log(newAddednotess);
        //   setsearchnotes(newAddednotess);
        }
return(
    <div>
        <SearchHeader searchInput={searchInput}/>
        <SearchMain notes={searchNotes} handelNote={handelNote} />
    </div>
)
}
export default SearchCountainer;