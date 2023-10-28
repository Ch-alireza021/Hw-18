import { useState } from "react";
import "./App.css";
import Header from "./Components/HeaderCountainer/Header/HeaderMain";
import AddIcon from "./Components/AddIcon/AddIcon";
import HeaderAddNote from "./Components/HeaderCountainer/Header/HeaderAddNote";
import HeaderCountainer from "./Components/HeaderCountainer/HeaderCountainer";

function App() {
  const [page, setPage] = useState("main");
  console.log(page);
  const AddNotePage = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <div className="App w-full min-h-screen px-6 bg-[#252525] relative">
      {/* <Header page={page}  />  */}
      {/* <HeaderAddNote /> */}
      <HeaderCountainer page={page} />
      <AddIcon AddNotePage={AddNotePage} />
    </div>
  );
}

export default App;
