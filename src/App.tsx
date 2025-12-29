import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import BookingSuccess from "./pages/BookingSuccess";

type Page = "home" | "services" | "appointment" | "success";

function App() {
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "services": return <Services />;
      case "appointment": return <Appointment onBooking={() => setPage("success")} />;
      case "success": return <BookingSuccess />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: "url('./permata-hatiku-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll' // Better mobile performance
    }}>
      <Navbar setPage={setPage} />
      <div style={{
        flex: 1,
        paddingTop: "120px",
        padding: window.innerWidth <= 768 ? "120px 1rem 0 1rem" : "120px 2rem 0 2rem" // Responsive padding
      }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
