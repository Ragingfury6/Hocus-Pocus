import PropTypes from 'prop-types';

function Button({label="Schedule Now", fullWidth=false, inverted=false}) {
  return (
        <a href="https://square.site/book/S1FMNH42X8NG2/hocus-pocus-skin-method" target='_blank'>
    <button className={`${inverted ? 'inverted' : ''} ${fullWidth ? 'full-width' : ''} cta-button`}>
          <p>{label}</p>
        </button>
        </a>
  )
}
Button.propTypes = {
    label:PropTypes.string,
    fullWidth: PropTypes.bool,
    inverted: PropTypes.bool
}
export default Button