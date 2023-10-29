

const AddIcon=({AddNotePage})=>{
function setAddNotePage(){
    AddNotePage("addNote")
}

    return (
        <div onClick={setAddNotePage} className="fixed  bottom-[49px] right-[35px] w-[70px] px-3 h-[70px] rounded-full bg-[#252525] plusShadow grid place-items-center">
            <img src="./icon/add.svg" alt="" />
        </div>
    )
}
export default AddIcon;

  