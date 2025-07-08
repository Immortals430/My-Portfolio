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
      className={`relative w-[100vw] h-[100dvh] bg-black overflow-hidden duration-500
                transition-colors ${animateIcon && "bg-transparent"}`}
    >
      <FaReact
        size={`${!animateIcon ? "50px" : "80%"}`}
        className={`animate-spin text-cyan-300 transition-all
           duration-300 ${animateIcon && "opacity-0"} absolute top-1/2 left-1/2 -translate-1/2`}
      />
    </div>
  );
}
