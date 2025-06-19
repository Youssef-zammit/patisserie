import Page from "./pages/page";
import AboutUs from "./pages/AboutUs";
import Orders from "./pages/Orders";
import CollectionPage from "./pages/Offers";
import CreateAccountForm from "./components/CreateAccountForm"; 
import Signin from "./components/signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// This is new
function App() {
  return ( 
    
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offers" element={<CollectionPage />} />
        <Route path="/createaccount" element={<CreateAccountForm />} />
      </Routes>
    </Router>
  )
}
export default App;
