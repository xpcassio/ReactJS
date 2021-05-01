import propTypes from 'prop-types'
import { BsTrash } from "react-icons/bs"

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<li className={`list-group-item ${task.reminder ? "list-group-item-secondary" : ""}`} key={task.id} onDoubleClick={() => onToggle(task.id)}>
			<div className="d-flex w-100 justify-content-between">
				<h5>{task.text}</h5>
				<BsTrash style={{ color: 'red'}} onClick={() => onDelete(task.id)}/>
			</div>
			<p className="mb-0">{task.day}</p>
		</li>
	)
}

Task.defaultProps = {
	task: {}
}

Task.propTypes = {
	task: propTypes.object.isRequired,
	onDelete: propTypes.func,
	onToggle: propTypes.func
}

export default Task