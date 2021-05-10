

import Header from '../../components/Header/Header';
import Routes from '../../components/Routes/Routes';

import classes from "./Layout.module.css";

const Layout = () =>{


    return(
        <div className={classes.Layout}>
            <Header/>

            <Routes/>
            
         </div>
    )


}

export default Layout;