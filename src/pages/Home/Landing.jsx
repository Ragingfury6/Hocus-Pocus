import Button from "../../components/Button"
import FeatureVideo from "../../components/FeatureVideo";
import videoPoster from '../../assets/landing.png';
import video from "../../assets/aiskin.mp4";
import "../../scss/button.scss";

function Landing() {
 
  return (
    <>
    <section className="landing">
      <FeatureVideo poster={videoPoster} aria={"Skincare Highlight"} src={video}/>
        <div className="landing__content">
            <h1 className="landing__content__title">Hocus Pocus<br/>Skin Method</h1>
            <p className="landing__content__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste tempore culpa!</p>
        </div>
        <div className="landing__button">
            <Button/>
        </div>
    </section>
    </>
  )
}

export default Landing