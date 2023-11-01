const SearchHeader=({searchInput})=>{
return(
    <div className="w-full h-full pt-20 ">
        <input onChange={searchInput} className="bg-[#3B3B3B] px-[38px] text-[20px] text-white outline-none w-full rounded-full h-14" type="search" />
    </div>
)
}
export default SearchHeader;