import propTypes from 'prop-types'

const InputText = ({ nome, valor }) => {
	return (
		<>
		 	<input type="text" name={nome} value={valor} className="font-semibold py-0.5 px-2 text-xl mr-auto w-full hover:bg-gray-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-transparent dark:text-white dark:hover:bg-opacity-25 dark:focus:text-black" />
		 	{/* focus:border-solid */}
		</>
	);
}

InputText.defaultProps = {
	nome: 'primary',
	valor: ''
}

InputText.propTypes = {
	nome: propTypes.string.isRequired,
	valor: propTypes.string
}

export default InputText;
