import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { fetchCollection } from "../firebase/services/dbServices";

export default function LoadingPage({ setLoadingPage, setUserDetails }) {
  const [animateIcon, setAnimateIcon] = useState(false);

  useEffect(() => {
    fetchCollection("User Details").then((data) => {
      setUserDetails(data[0]);
      ready();
    });
  }, []);


  // wait for animation to complete before setting loading page false
  const ready = () => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 300);
    setAnimateIcon(true);
  };

  return (
    <div
      className={`flex justify-center items-center w-[100vw] h-[100dvh]
                bg-black flex-col gap-4 overflow-hidden duration-500
                transition-colors ${animateIcon && "bg-transparent"}`}
    >
      <FaReact
        size={`${!animateIcon ? "50px" : "80%"}`}
        className={`animate-spin text-cyan-300 transition-all
           duration-300 ${animateIcon && "opacity-0"} `}
      />
    </div>
  );
}
