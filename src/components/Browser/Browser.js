import { withRouter } from 'react-router';
import classes from './Browser.module.css';

import Featured from './Featured/Featured';
import Row from './Row/Row';



const Browser = () =>   {


    return(
        <div className={classes.Browser}>
            <Featured/>
            <Row label="Surflix Originals:"/>
            <Row label="Releases:"/>
            
        </div>
       
    )
}

export default withRouter(Browser);