import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRouter
import App from './App.jsx';
import './index.css';
import ScrollToTop from './components/ScrollToTop.jsx';
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <HelmetProvider>
    <ScrollToTop/>
      <App />
      </HelmetProvider>
    </BrowserRouter>
 
);

