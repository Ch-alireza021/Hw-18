import { createPortal } from "react-dom";
import About from "./About";
import { useState } from "react";
const MainHeaderNotes = () => {
const showModalDiv=document.getElementById("showModal");
const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-between pt-[47px]">
    <span className="text-[43px] text-white ">Notes</span>
    <div className=" flex gap-5">
      <span className="iconDiv">
        <img src="./icon/search.svg" alt="" />
      </span>
      <span className="iconDiv">
        <img src="./icon/Group.svg"  onClick={() => setShowModal(true)} alt="" />
      </span>
    </div>
    {showModal &&  createPortal(
        <About onClose={() => setShowModal(false)}/>,
        showModalDiv
      )}
  </div>)
};

export default MainHeaderNotes;
