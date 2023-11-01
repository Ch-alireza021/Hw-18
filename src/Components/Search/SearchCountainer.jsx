import { useState } from "react";
import SearchHeader from "./SearchHeader";
import SearchMain from "./SearchMain";

const SearchCountainer = ({ notes, handelNote }) => {
  const [searchNotes, setSearchNotes] = useState([]);
  console.log(notes);
  const searchInput = (event) => {
    console.log(event.target.value);
    const searchingNotesTitle = notes.filter((note) =>
      note.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    const searchingNotesDescription = notes.filter((note) =>
      note.description.toLowerCase().includes(event.target.value.toLowerCase())
    );
    const finalData = [...searchingNotesTitle, ...searchingNotesDescription];
    const uniqData = new Set(finalData);
    const uniqDataArr = Array.from(uniqData);
    setSearchNotes(uniqDataArr);
  };
  return (
    <div>
      <SearchHeader searchInput={searchInput} />
      {searchNotes.length > 0 ? (
        <div className="text-2xl  pt-10 flex flex-col gap-6">
          <SearchMain notes={searchNotes} handelNote={handelNote} />
        </div>
      ) : (
        <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3">
          <div className="text-[20px] text-white relative ">
            <img src="./image/Search.png" alt="not found Search" />
            <span className="absolute bottom-7 w-full grid place-items-center">
              File not found. Try searching again.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchCountainer;
