const SearchHeader=({searchInput})=>{
return(
    <div className="w-full h-full pt-20 ">
        <input onChange={searchInput} className="bg-[#3B3B3B] px-[38px] outline-none w-full rounded-full h-14" type="search" />
    </div>
)
}
export default SearchHeader;