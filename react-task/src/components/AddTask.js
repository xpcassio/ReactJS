import { useState } from 'react'

import propTypes from 'prop-types'

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Adicione um texto!");
			return
		}

		onAdd({ text, day, reminder });

		setText('')
		setDay('')
		setReminder(false)
	}

	return (
		<form className="row px-4 py-3" onSubmit={onSubmit}>
			<div className="form-group col-12">
				<label htmlFor="idTexto">Texto:*</label>
				<input type="text" className="form-control" id="idTexto" value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className="form-group col-12">
				<label htmlFor="idData">Data:</label>
				<input type="text" className="form-control" id="idData" value={day} onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className="col-12">
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
	    			<label className="form-check-label" htmlFor="exampleCheck1">Reminder</label>
				</div>
			</div>
			<div className="col-12">
				<button type="submit" className="btn btn-outline-secondary btn-lg btn-block">Adicionar</button>
			</div>
		</form>
	)
}

AddTask.defaultProps = {
	AddTask: []
}

AddTask.propTypes = {
	onAdd: propTypes.func
}

export default AddTask