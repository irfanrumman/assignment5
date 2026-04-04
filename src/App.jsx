import "./App.css";
import ContactPage from "./components/contacPage/ContactPage.jsx";
import ContactPageProvider from "./contexts/ContactPagectx.jsx";

function App() {
  return (
    <>
      <ContactPageProvider>
        <ContactPage />
      </ContactPageProvider>
    </>
  );
}

export default App;
