import Noticias from './Noticias';
import Procurados from './Procurados';
import Videos from './Videos';
import Headline from './Headline';

function Container() {
    return (
        <container className="d-flex flex-column"> {/*px-3 py-3*/}
            <Videos />

            <Noticias />
        </container>
    );
}

export default Container;
