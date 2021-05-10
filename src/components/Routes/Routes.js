
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Auth from '../Auth/Auth';
import Browser from '../Browser/Browser';
import ChooseProfile from '../ChooseProfile/ChooseProfile';
import Header from "../Header/Header";


const Routes = (props) => {
    const auth = useSelector(state => state.auth.isAuthenticated);


    return(    


    
        <Router> 
            <Header/>
            <Switch>       
                {
                    auth ?  (
                    <div>
                        <Route exact path="/ChooseProfile" component={ChooseProfile}/>
                        <Route exact path="/browse" component={Browser}/>
                        </div>) : 
                        <Route exact path="/" component={Auth} />
                }

            </Switch>
        </Router>)


}

export default Routes;