import HeaderNote from "./HeaderNote";
import NoteMain from "./NoteMain";


const NoteCountainer=({note,handleDelete})=>{

    // const note=
return (
    <div>
        <HeaderNote noteId={note.id} handleDelete={handleDelete} />
        <NoteMain note={note} />
    </div>
)
}
export default NoteCountainer;