import { Route, Routes } from "react-router";
import "./App.css";
import ContactPage from "./components/contacPage/ContactPage.jsx";
import ContactPageProvider from "./contexts/ContactPagectx.jsx";
import AddNewPage from "./components/addNewPage/AddNewPage.jsx";

function App() {
  return (
    <>
      <ContactPageProvider>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/add-contact" element={<AddNewPage />} />
          <Route path="/add-new" element={<AddNewPage />} />
        </Routes>
      </ContactPageProvider>
    </>
  );
}

export default App;
