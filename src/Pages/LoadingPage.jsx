import { useEffect } from "react";
import { FaReact } from "react-icons/fa6";
import { fetchCollection } from "../firebase/services/dbServices";

export default function LoadingPage({
  setLoadingPage,
  setUserDetails,
}) {

  useEffect(() => {
    fetchCollection("User Details").then((data) => setUserDetails(data[0]));
    ready();
  }, []);

  // wait for animation to complete before setting loading page false
  const ready = () => {
    setTimeout(() => {
      setLoadingPage(false);
    });
  };

  return (
    <div
      className={`flex justify-center items-center w-[100vw] h-[100dvh] bg-black flex-col gap-4`}
    >
      <FaReact
        size={"50px"}
        className={`animate-spin text-cyan-300 transition-transform duration-75 `}
      />
      <div className="text-white" >
        Loading...
      </div>
    </div>
  );
}
