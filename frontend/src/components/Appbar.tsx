import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Appbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer"
      >
        Medium
      </Link>
      <div className="flex">
        <div>
          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              New
            </button>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="mr-4 text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Log out
            </button>
          ) : null}
        </div>
        <div>
          <Avatar size={"big"} name="harkirat" />
        </div>
      </div>
    </div>
  );
};
