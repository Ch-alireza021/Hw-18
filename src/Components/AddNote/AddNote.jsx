import { useState } from "react";
import HeaderAddNote from "./HeaderAddNote";
import MainAddNote from "./MainAddNote";

const AddNote=(props)=>{
    const [isSave,setIsSave]=useState(false);

return(
    <div>
        <HeaderAddNote setIsSave={setIsSave}/>
        <MainAddNote isSave={isSave} setIsSave={setIsSave} {...props} />
    </div>
)
}
export default AddNote;