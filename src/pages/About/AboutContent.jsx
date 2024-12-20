import MaleFace from '../../assets/male_face_closeup.webp';
import StretchedLogo from '../../assets/aboutusmain.jpg';
import AboutUsSign from '../../assets/AboutUsSign.jpg';
import "../../scss/about.scss";
function AboutContent() {
  return (
    <div className="about__container">
    <section className="about">
        <div className="about__mission">
            <div className="about__mission__info">
                <h2 className="about__mission__info__title">Our Mission</h2>
                <p className="about__mission__info__description">At Hocus Pocus Skin Method, our mission is to enhance your natural beauty and boost your confidence through personalized, high-quality skincare treatments. We are dedicated to offering a comprehensive range of services, from laser hair reduction to permanent makeup, ensuring each client receives a customized experience that caters to their unique needs and preferences. Our skilled professionals are committed to staying at the forefront of skincare innovation, using the latest techniques and products.</p>
                <p className="about__mission__info__description--highlight">Our commitment is to provide exceptional results in a comfortable and welcoming environment.</p>
                <p className="about__mission__info__description">With a focus on excellence and client satisfaction, we strive to make every visit transformative, leaving you feeling rejuvenated and empowered. We believe in the power of self-care and its ability to positively impact your overall well-being, and we are here to support you on your skincare journey. At Hocus Pocus Skin Method, your beauty and confidence are our top priorities.</p>

            </div>
            <div className="about__mission__img">
                <img src={MaleFace} alt="" />
            </div>
            <div className="about__mission__img--centered">
            <img src={AboutUsSign} alt="" />
            </div>
        </div>
        <div className="about__story">
            <div className="about__story__img">
            <img src={StretchedLogo} alt="" />
            </div>
            <div className="about__story__info">
            <h2 className="about__story__info__title">Our Story</h2>
                <p className="about__story__info__description">Hocus Pocus Skin Method was founded by Eva in Peoria, AZ, driven by her passion for enhancing natural beauty and empowering clients through personalized skincare. Working on her own, Eva quickly built a loyal clientele thanks to her expertise and dedication to high-quality care, earning a stellar reputation within the community.</p>
                <p className="about__story__info__description">As word spread, Hocus Pocus Skin Method gained significant popularity, becoming a go-to destination for those seeking innovative and effective skincare treatments. Eva&#39;s commitment to excellence and continuous learning kept the business at the forefront of the industry.</p>
                <p className="about__story__info__description">Today, Hocus Pocus Skin Method is a trusted name known for its exceptional results and personalized approach. Eva and her team continue to empower clients, helping them achieve confidence and radiant skin through cutting-edge treatments and a welcoming environment.</p>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutContent