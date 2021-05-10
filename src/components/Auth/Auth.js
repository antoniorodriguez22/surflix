import { useHistory, withRouter } from 'react-router';
import classes from './Auth.module.css';
import Input from '../../UI/Input/Input';
import useFormHook from '../../Hooks/FormHook';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Auth = () =>   {
    const history = useHistory();
    const dispatch = useDispatch();
    const login = () => {
        dispatch(authActions.login());
        history.push('/ChooseProfile');
        
    }



    const {inputs, handleInputChange, handleSubmit} = useFormHook({  email: '', password: ''}, login);
    return(
        <div className={classes.Auth}>
             <div className={classes.Card}>
                 <div className={classes.Title}>
                     SURFLIX
                 </div>
                 <div className={classes.subheading}>
                     Login
                 </div>
             <Input 
                label="E-mail Address: " 
                inputType="email"
                placeholder="Please, introduce your e-mail..."
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                />

            <Input 
                label="Password: " 
                inputType="password"
                placeholder="Please, introduce your password..."
                name="password"
                onChange={handleInputChange}
                value={inputs.password}
                />

                <div className={classes.buttonWrapper}>
                    <Button buttonValue="Login" onClick={handleSubmit}/>
                </div>

              
        </div>
        </div>
       
    )
}

export default withRouter(Auth);