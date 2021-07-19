import { useState } from 'react'
import { Link } from 'react-router-dom'

import InputText from './InputText.js'

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdAddCircle } from 'react-icons/md';

function AddHeader() {
	const [nameCollection, setNameCollection] = useState("")

	setNameCollection('Nova coleção')

	return (
		<header className="px-4 py-4 bg-white border-b-2 border-gray-200 dark:bg-darkMode-light dark:border-darkMode-dark">
		 	<div className="md:container md:mx-auto">
				<div className="flex flex-row">
					<Link type="button" to="/" className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
			 			<MdKeyboardArrowLeft className="inline-block" size="1.5em" />
			 		</Link>
			 		<InputText nome="" valor={nameCollection}/>
					<button type="button" className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
			 			<MdAddCircle className="inline-block" size="1.5em" />
			 		</button>
				</div>
		 	</div>
		</header>
	);
}

export default AddHeader;
