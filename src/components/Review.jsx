import '../scss/review.scss';
import { FaQuoteRight } from "react-icons/fa";
function Review() {
  return (
    <div className="review">
        <div className="review__decoration"><FaQuoteRight /></div>
      <div className="review__content">
        <p className="review__content__quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis quae repellat animi, aspernatur eius?</p>
        <div className="review__content__name">John Doe</div>
        <div className="review__content__date">04/03/2024</div>
      </div>
    </div>
  );
}

export default Review;
