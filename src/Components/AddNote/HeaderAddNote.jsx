const HeaderAddNote = ({handleSave}) => {
const saveNote=()=>{
  handleSave(true);
}

  return (
    <div className="flex justify-between pt-[47px]">
      <div className="iconDiv">
        <img src="./icon/chevron_left.svg" alt="icon back" />
      </div>
      <div onClick={saveNote} className="iconDiv">
        <img src="./icon/save.svg" alt="icon back" />
      </div>
    
    </div>
  );
};

export default HeaderAddNote;
