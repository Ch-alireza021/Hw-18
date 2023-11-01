import { useState } from "react";
import HeaderAddNote from "./HeaderAddNote";
import MainAddNote from "./MainAddNote";

const AddNote=({backToMain,...props})=>{
    const [isSave,setIsSave]=useState(false);
   function handleSave(value){
    setIsSave(value)
   }


    

return(
    <div>
        <HeaderAddNote handleSave={handleSave} backToMain={backToMain}/>
        <MainAddNote isSave={isSave} handleSave={handleSave} {...props} />
    </div>
)
}
export default AddNote;