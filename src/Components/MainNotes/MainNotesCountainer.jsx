import Color from "./Color";
import HeaderMain from "./MainHeaderNotes";
import MainNotesMain from "./MainNotesMain";


const MainNotesCountainer=({notes,handelNote,isSearch})=>{
    
    return(
        <div>
            <HeaderMain isSearch={isSearch}/>
            {notes.length>0 ?
            <div className="text-2xl  pt-10 flex flex-col gap-6" >
                <MainNotesMain notes={notes} handelNote={handelNote}/>
                <Color/>
            </div> :<div className="pt-[15vh] flex flex-col justify-center items-center">
              <img src="./image/22159fa2c844130223b259fdf5067e86.png" alt="" />  
              <span className="text-[20px] text-white">Creat your first note !</span></div>}
        </div>
    )
}

export default MainNotesCountainer;