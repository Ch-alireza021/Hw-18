
const Header=()=>{
    return(
        <div  className="flex justify-between pt-[47px]">
            <span className="text-[43px] text-white ">
                Notes
            </span>
            <div className=" flex gap-5">
                <span className="iconDiv"><img src="./icon/search.svg" alt="" /></span>
                <span className="iconDiv"><img src="./icon/Group.svg" alt="" /></span>
            </div>
        </div>
    )
}

export default Header;