import { FaSearch } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";

function Header() {
    return (<header className="d-flex flex-column"> {/*align-items-center align-items-md-start px-3 py-2 */}
        <brand className="d-flex align-items-center">
            <a className="brand ms-3 ms-md-0 mt-md-3 d-flex-inline justify-content-md-center" href="/">
                <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="Logo canaltech" className="mt-md-2" />
                <span className="ms-2 d-md-none">Canaltech</span>
            </a>
            <button type="button" className="ms-auto me-3 btn btn-link d-md-none text-white"><FaSearch /></button>
        </brand>
        <nav className="pt-3 px-3 px-md-0 pt-md-2">
            <a href="/" className="nav-item">
                <span className="icon">
                    <FaAdversal />
                </span>
                <div className="mt-2 d-md-none">Notícias</div>
            </a>
            <a href="/" className="nav-item">
                <span className="icon">
                    <FaAmazon />
                </span>
                <div className="mt-2 d-md-none">Vídeos</div>
            </a>
            <a href="/" className="nav-item">
                <span className="icon">
                    <FaAngellist />
                </span>
                <div className="mt-2 d-md-none">Podcasts</div>
            </a>
            <a href="/" className="nav-item">
                <span className="icon">
                    <FaBloggerB />
                </span>
                <div className="mt-2 d-md-none">Corporate</div>
            </a>
        </nav>

    	{/*<nav className="navbar navbar-expand-lg navbar-dark bg-canaltech">
    		<div className="container-fluid">
    			<a class="navbar-brand" href="/">
	    			<img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="Logo canaltech" className="me-2 d-inline" />
	    			<span className="d-md-none">Canaltech</span>
    			</a>

    			<button type="button" className="btn py-1 btn-search d-md-none d-flex"><FaSearch /></button>
    		</div>
    	</nav>*/}
    </header>);
}

export default Header;
