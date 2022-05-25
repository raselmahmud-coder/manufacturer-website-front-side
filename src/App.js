import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";
import AddReview from "./Components/DashBoard/AddReview";
import DashBoard from "./Components/DashBoard/DashBoard";
import MyOrders from "./Components/DashBoard/MyOrders";
import Payment from "./Components/DashBoard/Payment/Payment";
import ViewProfile from "./Components/DashBoard/ViewProfile";
import HomePage from "./Components/HomePage/HomePage";
import LogIn from "./Components/LogIn/LogIn";
import Pricing from "./Components/Pricing/Pricing";
import Purchase from "./Components/Purchase/Purchase";
import Registration from "./Components/Registration/Registration";
import Services from "./Components/ServicesPage/Services";
import Footer from "./Components/Shared/Footer/Footer";
import NavBarAutoParts from "./Components/Shared/NavBar/NavBarAutoParts";
import NotFound from "./Components/Shared/NotFound/NotFound";
import RequiredAuth from "./Components/Shared/RequiredAuth/RequiredAuth";

function App() {
  return (
    <>
      <NavBarAutoParts />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<ViewProfile />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="add-review" element={<AddReview />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
