import '../scss/review.scss';
import PropTypes from 'prop-types';
import { FaQuoteRight } from "react-icons/fa";
function Review({name, date, review}) {
  return (
    <div className="review">
        <div className="review__decoration"><FaQuoteRight /></div>
      <div className="review__content">
        <p className="review__content__quote">{review}</p>
        <div className="review__content__name">{name}</div>
        <div className="review__content__date">{date}</div>
      </div>
    </div>
  );
}
Review.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  review: PropTypes.string
}

export default Review;
