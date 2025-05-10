import "swiper/swiper.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Add this line

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./routes/Routes";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider> {/* ✅ Wrap everything in ThemeProvider */}
        <BrowserRouter>
          <div className="app-wrapper">
            <Header />
            <div className="app-content">
              <Routes />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;
