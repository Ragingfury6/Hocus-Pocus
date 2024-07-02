import Review from "../../components/Review";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ ignoreMobileResize: true });

function Reviews() {
    const container = useRef();
    useGSAP(
        () => {
            return gsap.to(`.reviews__column--reverse`, {
              scrollTrigger: { trigger: `.reviews__column__regular`, start:"top top", end:"bottom bottom", scrub:1},
              yPercent: 100,
              y:-window.innerHeight,
              duration: 1,
            });
        },
        { scope: container }
      );
  return (
    <section className="reviews" ref={container}>
       <div className="reviews__column reviews__column--reverse reviews__column--desktop">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className="reviews__column reviews__column__regular">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className="reviews__column reviews__column--reverse">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      {/* <div className="reviews__column reviews__column--reverse"></div> */}
    </section>
  );
}

export default Reviews;
