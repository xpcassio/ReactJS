// import { MdArrowUpward } from 'react-icons/md';
import { MdArrowDownward } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
// import { MdViewModule } from 'react-icons/md';
// import { MdViewStream } from 'react-icons/md';

function Sorting() {
	return (
		<>
		 	<div className="mb-5 flex flex-row">
		 		{/* RIGHT */}
		 		{/*<button className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
		 			<MdViewModule className="inline-block" size="1.5em" />
		 		</button>*/}
		 		{/*<button className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
		 			<MdViewStream className="inline-block" size="1.5em" />
		 		</button>*/}

		 		{/* LEFT */}
		 		{/*<button className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
		 			<MdArrowUpward className="inline-block" size="1.5em" />
		 		</button>*/}
		 		<button className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5 ml-auto">
		 			<MdArrowDownward className="inline-block" size="1.5em" />
		 		</button>
		 		<button className="px-1 py-0.5 font-medium align-middle hover:bg-gray-200 dark:hover:bg-darkMode-light">
		 			Classificar por data de criação
		 		</button>
		 		<button className="hover:bg-gray-200 dark:hover:bg-darkMode-light px-1 py-0.5">
		 			<MdClose className="inline-block" size="1.5em" />
		 		</button>
		 	</div>
		</>
	);
}

export default Sorting;
