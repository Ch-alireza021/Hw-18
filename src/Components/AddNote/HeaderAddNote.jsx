const HeaderAddNote = ({handleSave,backToMain}) => {
const saveNote=()=>{
  handleSave(true);
}
const isBack=()=>{
  backToMain(true)
}

  return (
    <div className="flex justify-between pt-[47px]">
      <div className="iconDiv">
        <img onClick={isBack} src="./icon/chevron_left.svg" alt="icon back" />
      </div>
      <div onClick={saveNote} className="iconDiv">
        <img src="./icon/save.svg" alt="icon back" />
      </div>
    
    </div>
  );
};

export default HeaderAddNote;
