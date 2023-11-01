const About=({ onClose })=>{
    return (
        <div className="modal z-10 w-full h-screen fixed grid place-items-center">
            <div className="w-[330px] h-[236px] text-[25px] text-white bg-[#252525] rounded-[20px] px-7 flex flex-col items-center justify-center">
          <div>Designed by- Mr Chizari</div>
          <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
}
export default About;