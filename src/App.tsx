import Page from "@containers/Page/Page";
import GlobalStyles from "@styles/global.styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Page />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
