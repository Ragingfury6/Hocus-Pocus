import Landing from "./Landing"
import "../../scss/home.scss";
import Services from "./Services";
import Reviews from "./Reviews";
// import NavBar from "../../components/NavBar";
// import Footer from "../../components/Footer";

function Home() {
  return (
    <>
    {/* <NavBar/> */}
    <Landing/>
    <Services/>
    <Reviews/>
    {/* <Footer/> */}
    </>
  )
}

export default Home