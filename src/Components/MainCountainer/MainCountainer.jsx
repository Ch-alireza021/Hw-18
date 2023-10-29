import MainAddNote from "../AddNote/MainAddNote";

const MainCountainer=({page})=>{
    return(
  <div>
    {page==="addNote" && <MainAddNote /> }
  </div>
    )
}

export default MainCountainer;