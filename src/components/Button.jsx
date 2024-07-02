import PropTypes from 'prop-types';

function Button({label="Schedule Now", inverted=false}) {
  return (
    <button className={`${inverted ? 'inverted' : ''} cta-button`}>
        <p>{label}</p>
        </button>
  )
}
Button.propTypes = {
    label:PropTypes.string,
    inverted: PropTypes.bool
}
export default Button