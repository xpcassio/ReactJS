function Headline() {
    return (<>
    	<div className="row d-none d-md-flex">
    		<div className="col-12 col-md-6" style={{height: '400px'}}>
    			<a href="/" className="headline-item d-flex flex-column py-2 px-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/cafe-5579069_1280.jpg'})`}}>
    				<h5 className="mt-auto">É do Brasil!</h5>
        			<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
    			</a>
    		</div>
    		<div className="col-12 col-md-6" style={{height: '400px'}}>
    			<div className="row">
    				<div className="col-12" style={{marginBottom: '20px'}}>
    					<a dhref="/" className="headline-item d-flex flex-column py-2 px-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/horse-4679863_1280.jpg'})`, height: '190px'}}>
    						<h5 className="mt-auto">É do Brasil!</h5>
        					<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
    					</a>
    				</div>
    				<div className="col-12">
    					<a href="/" className="headline-item d-flex flex-column py-2 px-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/seagull-4822595_1280.jpg'})`, height: '190px'}}>
    						<h5 className="mt-auto">É do Brasil!</h5>
        					<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
    					</a>
    				</div>
    			</div>
    		</div>
    	</div>

        <headline className="d-md-none">
        	<a href="/" className="headline-item py-2 px-2 text-wrap me-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/cafe-5579069_1280.jpg'})`}}>
        		<h5>É do Brasil!</h5>
        		<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
        	</a>
        	<a href="/" className="headline-item py-2 px-2 text-wrap me-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/horse-4679863_1280.jpg'})`}}>
        		<h5>É do Brasil!</h5>
        		<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
        	</a>
        	<a href="/" className="headline-item py-2 px-2 text-wrap" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline/seagull-4822595_1280.jpg'})`}}>
        		<h5>É do Brasil!</h5>
        		<h4>Butantan anuncia vacina nacional contra COVID-19 e quer iniciar testes</h4>
        	</a>
        </headline>
    </>);
}

export default Headline;
