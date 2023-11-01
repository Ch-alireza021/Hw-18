import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { createPortal } from "react-dom";

const HeaderNote = ({ noteId ,handleDelete,backToMain}) => {
  const shoModalDiv = document.getElementById("showModal");
  const [showModal, setShowModal] = useState(false);

  function deleting() {
    console.log(noteId);
    setShowModal(true);
  }

  function isDelete(getok) {
  if(getok){
    console.log(getok);
    handleDelete(noteId)
  }
  }

  function isBack(){
    backToMain(true)
  }
  return (
    <div className="flex justify-between pt-[47px]">
      <div onClick={isBack} className="iconDiv">
        <img src="./icon/chevron_left.svg" alt="icon back" />
      </div>
      <div className="iconDiv">
        <img src="./icon/icon_trash.svg" onClick={deleting} alt="icon back" />
      </div>
      {showModal && createPortal(<DeleteModal isDelete={isDelete} />, shoModalDiv)}
    </div>
  );
};
export default HeaderNote;
