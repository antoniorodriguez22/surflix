
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Auth from '../Auth/Auth';
import Browser from '../Browser/Browser';
import ChooseProfile from '../ChooseProfile/ChooseProfile';


const Routes = (props) => {
    const auth = useSelector(state => state.auth.isAuthenticated);


    return(    


    
        <Router> 
            <Switch>       
                {
                    auth ?  (
                    <div>
                        <Route path="/ChooseProfile" component={ChooseProfile}/>
                        <Route path="/browse" component={Browser}/>
                        </div>) : 
                        <Route exact path="/" component={Auth} />
                }

            </Switch>
        </Router>)


}

export default Routes;