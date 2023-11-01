const NoteMain=({note})=>{
return(
    <div>
        <div>
            {note.title}
        </div>
        <div>
            {note.description}
        </div>
    </div>
)
}

export default NoteMain;