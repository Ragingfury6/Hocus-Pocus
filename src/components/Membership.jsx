import "../scss/membership.scss";
import PropTypes from 'prop-types';
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
    </div>
  );
}
Membership.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    children: PropTypes.any
}

export default Membership;
