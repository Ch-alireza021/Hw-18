const SearchMain=({notes,handelNote})=>{
    const color=["#FD99FF","#FF9E9E","#91F48F","#FFF599","#9EFFFF","#B69CFF"];
    function getId(get){
        handelNote(get)
    }
  return notes.map((note, index) => {
const quotient=Math.floor(index/color.length)
const choseColor=quotient > 0 ? index%(quotient*color.length) : index ;
    return (
      <div key={note.id} onClick={()=>getId(note.id)}  className={`px-10 py-5  rounded-xl bg-[${color[choseColor]}]`} >
        <span>{note.title}</span>
      </div>
    );
  });
}
export default SearchMain;