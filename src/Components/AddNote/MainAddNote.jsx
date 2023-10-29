import { useRef } from "react";

const MainAddNote=({isSave,setIsSave,getNewNote,setPage})=>{
    const titleInput=useRef();
    const descriptionInput=useRef();
  if (isSave && titleInput.current.value.length>3) {
    const title=titleInput.current.value.trim();
    const description=descriptionInput.current.value.trim();
    getNewNote({title,description})
    setPage("main");
    setIsSave(false);
   }else{
    setIsSave(false)
   }
    return (
        <div>
            <input ref={titleInput}  className="mt-10 text-[48px] text-[#9A9A9A] w-full bg-transparent outline-none" placeholder="Title"type="text"/>
            <textarea ref={descriptionInput} className="mt-10 text-2xl text-[#9A9A9A] w-full bg-transparent outline-none" placeholder="Type something..." />
        </div>
    )
}
export default MainAddNote;
