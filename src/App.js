import './App.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Catalog from "./components/Catalog/Catalog";
import DeliveryAndPayment from "./components/DeliveryAndPayment/DeliveryAndPayment";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main/>}></Route>
        <Route path={'/catalog'} element={<Catalog/>}></Route>
        <Route path={'/payment'} element={<DeliveryAndPayment/>}></Route>
        <Route path={'/about'} element={<AboutUs/>}></Route>
        <Route path={'/contacts'} element={<Contacts/>}></Route>
        <Route path={'/faq'} element={<FAQ/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
