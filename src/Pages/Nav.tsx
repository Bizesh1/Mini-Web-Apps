import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d9d7d2]">
      <nav className={`px-6 flex items-center justify-center gap-10 h-20 font-bold text-[#101b14]`}>
          <button className="hover:text-red-700" onClick={() => navigate(-1)}> Back </button>
          <button className="hover:text-red-700" onClick={() => navigate("/")}> Home </button>
      </nav>
    </div>
  );
}
export default Nav;
