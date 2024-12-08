import "../scss/membership.scss";
import PropTypes from 'prop-types';
import Button from "./Button";
function Membership({name, price, children}) {
  return (
    <div className="membership">
      <div className={`membership__header ${name.toLowerCase()}`}>
        <div className="membership__title">{name}</div>
        <div className="membership__price">${price}</div>
      </div>
      <div className="membership__content">
        {children}
        
      </div>
      <div className="membership__content__button-container">
      <Button label="Purchase Now" inverted={true}/>
      </div>
    </div>
  );
}
Membership.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    children: PropTypes.any
}

export default Membership;
