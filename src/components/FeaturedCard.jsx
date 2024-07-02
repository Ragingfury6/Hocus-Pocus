import "../scss/card.scss";
import Button from "./Button";
import PropTypes from "prop-types";

function FeaturedCard({ num, data }) {
    const {name, description, price, image1, image2, image3, pros, tips} = data;
  return (
    <div className={`card card--featured`} id={`card${num}`}>
      <div className="card__image-wrapper card__image-wrapper--featured">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <div className="card__content">
        <h4 className="card__content__title">{name}</h4>
        <p className="card__content__description">
        {description}
        </p>
        <div className="card__content__description card__content__description--extended">
          <div className="card__content__description__section">
            <h5>Pros</h5>
            <p>
              {pros}
            </p>
          </div>
          <div className="divider"></div>
          <div className="card__content__description__section">
            <h5>Tips</h5>
            <p>
             {tips}
            </p>
          </div>
        </div>
        <div className="card__content__pricing">
          <p className="card__content__pricing__price">From {price}</p>
          {/* <p className="card__content__pricing__divider">·</p> */}
          <Button inverted={true} />
        </div>
      </div>
    </div>
  );
}

FeaturedCard.propTypes = {
  num: PropTypes.number,
  data: PropTypes.object
};

export default FeaturedCard;
