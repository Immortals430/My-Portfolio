import { useState } from "react";
import HomePage from "./Pages/HomePage";
import LoadingPage from "./Pages/LoadingPage";


function App() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [userDetails, setUserDetails] = useState({});


  if (loadingPage) {
    return (
      <LoadingPage
        setLoadingPage={setLoadingPage}
        setUserDetails={setUserDetails}
      />
    );
  }

  return <HomePage userDetails={userDetails} />;
}

export default App;
