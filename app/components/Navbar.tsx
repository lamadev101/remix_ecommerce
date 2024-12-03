import { useState } from "react";
import { Link } from "@remix-run/react";
import LoginModal from "./LoginModal";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickHandler = () => {
    console.log("-------trigger")
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="bg-slate-100 px-14 py-6 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src="/images/logo.svg" className="w-12 h-12" />
          </Link>
        </div>
        <div>
          <Link to={"/filter-products/?category=all"}>Products</Link>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={onClickHandler}
            className="cursor-pointer bg-slate-200 px-3 py-2"
          >
            Login/Register
          </div>
          <div className="relative bg-slate-200 w-12 h-12 p-1 rounded-full shadow-md flex items-center justify-center">
            <BsCart size={24} />
            <span className="bg-red-500 rounded-full w-6 h-6 absolute top-0 -right-2 text-white flex items-center justify-center">2</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <LoginModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Navbar;
