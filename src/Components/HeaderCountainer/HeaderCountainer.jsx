import HeaderAddNote from "./Header/HeaderAddNote";
import HeaderMain from "./Header/HeaderMain";
import HeaderNote from "./Header/HeaderNote";
const HeaderCountainer = ({ page }) => {
  return (
    <div className="flex justify-between pt-[47px]">
      {page === "main" && <HeaderMain />}
      {page === "addNote" && <HeaderAddNote />}
      {page === "Note" && <HeaderNote />}
    </div>
  );
};
export default HeaderCountainer;
