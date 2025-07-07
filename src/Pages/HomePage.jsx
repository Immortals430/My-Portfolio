import About from "../Components/About/About";
import Head from "../Components/Head/Head";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/Aside/LeftAside";
import RightAside from "../Components/Aside/RightAside";
import Projects from "../Components/Projects/Projects";
import MiniProjects from "../Components/MiniProjects/MiniProjects";
import Contact from "../Components/Contact/Contact";
import { ToastContainer } from "react-toastify";

export default function Home({ userDetails }) {
  return (
    <>
      <Navbar resumeLink={userDetails.resumeLink} />
      <Head githubLink={userDetails.githubLink} />
      <About />
      <Projects />
      <MiniProjects />
      <Contact userDetails={userDetails} />

      <LeftAside userDetails={userDetails} />
      <RightAside email={userDetails.email} />

      <ToastContainer />
    </>
  );
}
