import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { createPortal } from "react-dom";

const HeaderNote = ({noteId}) => {
  const shoModalDiv=document.getElementById("shoModal");
  const [showModal,setShowModal] =useState(false);

  function deleting(){
    console.log(noteId);
    setShowModal(true);
  }
  return (
    <div className="flex justify-between pt-[47px]">
      <div className="iconDiv">
        <img src="./icon/chevron_left.svg" alt="icon back" />
      </div>
      <div className="iconDiv">
        <img src="./icon/icon_trash.svg" onClick={deleting} alt="icon back" />
      </div>
      {showModal && createPortal(
        
      )}
    </div>
  );
};
export default HeaderNote;
