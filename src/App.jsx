import './scss/app.scss';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Faq from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar/><Home/><Footer/></>
  },
  {
    path:"/about",
    element: <><NavBar/><About/><Footer/></>
  },
  {
    path:"/faq",
    element: <><NavBar/><Faq/><Footer/></>
  },
  {
    path:"/contact",
    element: <><NavBar/><Contact/><Footer/></>
  }
]);
function App() {
  
  return (
    <>
    <RouterProvider router={router} />
</>
  )
}

export default App

/*
TODO
- box shadow on nav / fix nav


*/