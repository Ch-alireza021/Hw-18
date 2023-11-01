const DeleteModal=({isDelete})=>{
    
return(
    <div className="modal-cover text-[#CFCFCF] text-2xl ">
<div className="w-[330px] h-[236px] bg-[#252525] p-8 flex flex-col justify-between rounded-[20px]">
<span>Are your sure you want delete?</span>
<div className="w-full flex justify-between">
    <button onClick={()=>isDelete(true)} className="w-28 h-10 rounded bg-[#FF0000]">Delete</button>
    <button className="w-28 h-10 rounded bg-[#30BE71]">Keep</button>
</div>
</div>
    </div>
)
}
export default DeleteModal;