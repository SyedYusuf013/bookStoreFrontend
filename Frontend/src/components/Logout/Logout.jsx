import React from "react";
import { useAuth } from "../../context/authProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { setAuthUser, setAuthToken } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    try {
      setAuthUser(null); 
      setAuthToken(null);
      localStorage.removeItem("Users");
      localStorage.removeItem("Token");

      toast.success("Logout Successfully");

      navigate("/");
    } catch (error) {
      toast.error("Logout Failed: " + error.message);
    }
  };

  return (
    <div>
      <button
        className=" px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer transition-transform  transform hover:scale-105 duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
