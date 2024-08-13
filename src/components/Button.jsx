import PropTypes from 'prop-types';

function Button({label="Schedule Now", inverted=false}) {
  return (
        <a href="https://square.site/book/S1FMNH42X8NG2/hocus-pocus-skin-method" target='_blank'>
    <button className={`${inverted ? 'inverted' : ''} cta-button`}>
          <p>{label}</p>
        </button>
        </a>
  )
}
Button.propTypes = {
    label:PropTypes.string,
    inverted: PropTypes.bool
}
export default Button