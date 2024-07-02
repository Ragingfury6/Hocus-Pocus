import TestImage1 from '../../assets/lipblushing.jpg';
import TestImage2 from '../../assets/microblading.jpg';
import TestImage3 from '../../assets/facial3.jpg';
import "../../scss/about.scss";
function AboutContent() {
  return (
    <div className="about__container">
    <section className="about">
        <div className="about__mission">
            <div className="about__mission__info">
                <h2 className="about__mission__info__title">Our Mission</h2>
                <p className="about__mission__info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam blanditiis consequuntur dolorem, debitis, similique, veniam impedit ad esse iure deserunt. In ad nemo perferendis asperiores, minima, placeat, unde praesentium quisquam minus accusamus nam illum!</p>
                <p className="about__mission__info__description--highlight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta neque vel natus odit ipsum.</p>
                <p className="about__mission__info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae, iste quas quod officia ratione culpa. Tempore sit reprehenderit ea officiis corporis, vitae, soluta iste architecto ut, dicta veniam ipsum laboriosam quibusdam minima voluptates? Quibusdam officia ipsam tempore nostrum quaerat expedita. Doloribus modi, amet repudiandae natus cum sint corporis officiis at incidunt consequuntur atque repellat eum assumenda neque sed id.</p>

            </div>
            <div className="about__mission__img">
                <img src={TestImage1} alt="" />
            </div>
            <div className="about__mission__img--centered">
            <img src={TestImage2} alt="" />
            </div>
        </div>
        <div className="about__story">
            <div className="about__story__img">
            <img src={TestImage3} alt="" />
            </div>
            <div className="about__story__info">
            <h2 className="about__story__info__title">Our Story</h2>
                <p className="about__story__info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam blanditiis consequuntur dolorem, debitis, similique, veniam impedit ad esse iure deserunt. In ad nemo perferendis asperiores, minima, placeat, unde praesentium quisquam minus accusamus nam illum!</p>
                <p className="about__story__info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus quasi amet, a vitae dignissimos. Fugiat amet delectus commodi! Rerum minima amet labore voluptatem dicta, quis ullam possimus nihil aut totam! Est a nihil eum adipisci exercitationem assumenda ipsam dolor!</p>
                <p className="about__story__info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum doloribus minima id, a libero, quidem quod laborum assumenda iure, delectus corporis nostrum voluptates debitis! Dolores, suscipit? Hic facilis, excepturi tempore vero totam labore voluptatum.</p>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutContent