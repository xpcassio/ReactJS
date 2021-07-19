import { Link } from 'react-router-dom'

import { MdAdd } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';

function HomeHeader() {
	return (
		<header className="px-4 py-4 bg-white border-b-2 border-gray-200 dark:bg-darkMode-light dark:border-darkMode-dark">
		 	<div className="md:container md:mx-auto">
		 		<div className="flex flex-row mb-4">
					<h2 className="font-semibold py-0.5 mr-auto">Coleções</h2>
					<Link type="button" to="/buscar" className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
			 			<MdSearch className="inline-block" size="1.5em" />
			 		</Link>
				</div>
				<Link type="button" to="/adicionar" className="font-medium text-blue-600">
					<MdAdd className="inline-block" size="1.5em" />
					<span className="inline-block align-middle hover:underline">Iniciar nova coleção</span>
				</Link>
		 	</div>
		</header>
	);
}

export default HomeHeader;
