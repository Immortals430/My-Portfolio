import Navbar from "./Component/Navbar";
import Head from "./Component/Head";
import About from "./Component/About";
import Experience from "./Component/Experience";
import MyWorks from "./Component/MajorProject";
import OtherWorks from "./Component/OtherWorks";
import Contact from "./Component/Contact";
import LeftFixedComp from "./Component/LeftFixedComp";
import RightFixedComp from "./Component/RightFixedComp";
import { Atom } from "react-loading-indicators";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
        <Atom color={"#6ce3d3"} size="medium" />
        </div>

      ) : (
        <>
          <Navbar />
          <main>
            <Head />
            <About />
            <Experience />
            <MyWorks />
            <OtherWorks />
            <Contact />
          </main>
          <LeftFixedComp />
          <RightFixedComp />
        </>
      )}
    </>
  );
}

export default App;
