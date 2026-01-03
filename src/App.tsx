import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import BookingSuccess from "./pages/BookingSuccess";

type Page = "home" | "about" | "services" | "appointment" | "success";

function App() {
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "about": return <About />;
      case "services": return <Services />;
      case "appointment": return <Appointment onBooking={() => setPage("success")} />;
      case "success": return <BookingSuccess />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar setPage={setPage} />
      <div className="content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
