const NoteMain=({note})=>{
return(
    <div className="text-[#9A9A9A] pt-10 ">
        <div className="text-[40px] ">
            {note.title}
        </div>
        <div className="text-2xl pt-5">
            {note.description}
        </div>
    </div>
)
}

export default NoteMain;