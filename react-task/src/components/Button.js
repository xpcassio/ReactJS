import propTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
	return <button type="button" onClick={onClick} className={`btn btn-${color}`}>{text}</button>
}

Button.defaultProps = {
	color: 'primary',
	text: ''
}

Button.propTypes = {
	color: propTypes.string.isRequired,
	text: propTypes.string,
	onClick: propTypes.func
}

export default Button