import propTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation()

	return (
		<div className="card-header d-flex">
			<h2 className="mr-auto">{title}</h2>
			{location.pathname === '/' && <Button color={showAdd ? 'outline-secondary' : 'secondary'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
		</div>
	)
}

Header.defaultProps = {
	title: 'Tasks'
}

Header.propTypes = {
	title: propTypes.string.isRequired,
	onAdd: propTypes.func,
	showAdd: propTypes.bool
}

export default Header;
