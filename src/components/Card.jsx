import '../scss/card.scss';
import Button from './Button';
import PropTypes from 'prop-types';

function Card({num, data}) {
    const {name, description, price, image} = data;
  return (
    <div className={`card`} id={`card${num}`}>
        <div className="card__image-wrapper">
            <img src={image} alt="" />
        </div>
        <div className="card__content">
            <h4 className="card__content__title">{name}</h4>
            <p className="card__content__description">{description}</p>
            <div className="card__content__pricing">
                <p className="card__content__pricing__price">From {price}</p>
                {/* <p className="card__content__pricing__divider">·</p> */}
                <Button inverted={true}/>
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    num: PropTypes.number,
    data: PropTypes.object
}

export default Card