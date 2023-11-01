import HeaderNote from "./HeaderNote";
import NoteMain from "./NoteMain";


const NoteCountainer=({note,handleDelete,backToMain})=>{

    // const note=
return (
    <div>
        <HeaderNote noteId={note.id} handleDelete={handleDelete} backToMain={backToMain} />
        <NoteMain note={note} />
    </div>
)
}
export default NoteCountainer;