import Color from "./Color";
import HeaderMain from "./MainHeaderNotes";
import MainNotesMain from "./MainNotesMain";


const MainNotesCountainer=({notes,handelNote})=>{
    return(
        <div>
            <HeaderMain/>
            <div className="text-2xl  pt-10 flex flex-col gap-6" >
                <MainNotesMain notes={notes} handelNote={handelNote}/>
                <Color/>
            </div>
        </div>
    )
}

export default MainNotesCountainer;