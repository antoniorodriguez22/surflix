import { useHistory, withRouter } from 'react-router';
import classes from './ChooseProfile.module.css';
import avatar from '../../images/avatar.jpg'
import { useDispatch } from 'react-redux';
import { profileActions } from '../../store';



const ChooseProfile = () =>   {
    const dispatch = useDispatch();
    const history = useHistory();
        const setProfile = () => {
        dispatch(profileActions.setProfile());
        history.push("/browse");
    }

    return(
        <div className={classes.ChooseProfile}>
             <div className={classes.Card}>
                 <div className={classes.Title}>
                     Who's Watching?
                 </div>
                 <div className={classes.imgWrapper} onClick={setProfile}>
                    <img src={avatar} alt="User Profile" className={classes.image}/>
                    <div className={classes.userName}>Cody Maverick</div>
                 </div>

            </div>
        </div>
       
    )
}

export default withRouter(ChooseProfile);