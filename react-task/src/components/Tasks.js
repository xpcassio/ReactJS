import propTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
	if (tasks.length !== 0)
		return (<>{tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}</>)
	else
		return (<li className="list-group-item text-center">Nenhuma lembrança adicionada!</li>)
}

Tasks.defaultProps = {
	tasks: []
}

Tasks.propTypes = {
	tasks: propTypes.array.isRequired,
	onDelete: propTypes.func,
	onToggle: propTypes.func
}

export default Tasks