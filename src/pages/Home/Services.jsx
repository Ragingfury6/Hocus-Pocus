import Card from "../../components/Card";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef, useContext } from "react";
import FeaturedCard from "../../components/FeaturedCard";
import { ServicesContext } from "../../context/ServicesContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Services() {
  const container = useRef();
  const services = useContext(ServicesContext);

  useGSAP(
    () => {
      services.map((i, idx) => {
        return gsap.to(`#card${idx}`, {
          scrollTrigger: { trigger: `#card${idx}`, start: "top 90%" },
          y:0,
          opacity: 1,
          duration: 1,
        });
      });
      // gsap.to(q(".card"),{scrollTrigger: ".card",y:0, opacity:1, duration:1});
    },
    { scope: container }
  );
  return (
    <section className="services">
      <h2 className="services__title">Services</h2>
      <div className="services__cards-wrapper" ref={container}>
        {services.map((service,idx) => {
          if(service.featured){
            return <FeaturedCard key={idx} num={idx} data={service}/>
          }else{
            return <Card key={idx} num={idx} data={service}/>;
          }
        })}
        {/* <FeaturedCard num={3}/> */}
        {/* <Card num={4} /> */}
      </div>
    </section>
  );
}

export default Services;
