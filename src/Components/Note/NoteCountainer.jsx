import HeaderNote from "./HeaderNote";
import NoteMain from "./NoteMain";


const NoteCountainer=({note})=>{

    // const note=
return (
    <div>
        <HeaderNote noteId={note.id} />
        <NoteMain note={note} />
    </div>
)
}
export default NoteCountainer;